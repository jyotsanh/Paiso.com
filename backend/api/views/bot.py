# bot/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from api.serializers import ChatSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework.exceptions import PermissionDenied
import google.generativeai as genai
import os
import re
from dotenv import load_dotenv
genai.configure(api_key="")
load_dotenv()
from api.models import Conversation
from datetime import timedelta
from django.utils import timezone

api_key = os.getenv("GOOGLE_API_KEY2")


def chat_bot(user_message):
    genai.configure(api_key=api_key)
    model=genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    system_instruction="You are Financial personal assistant for the paiso.com website which is a finance literacy website and you should response in Nepali Language and in context of Nepal country stock.Your name is Hari and You should only response if the user ask you a question related to finance or Trading Stock. If you don't know the answer to the question, just say, 'I don't know'.",
    )
    response = model.generate_content(user_message)
    clean_response = re.sub(r'(\*\*|__)(.*?)\1', r'\2', response.text)
    print(clean_response)
    return clean_response



class ChatbotView(APIView):
    permission_classes = [IsAuthenticated]  # Ensure only logged-in users can access this view

    def post(self, request, *args, **kwargs):
        serializer = ChatSerializer(data=request.data)
        if serializer.is_valid():
            user_message = serializer.validated_data.get('message')
            user = request.user

            # Check and reset message count if the last reset time is more than 24 hours ago
            now = timezone.now()
            if now - user.message_count_last_reset > timedelta(hours=24):
                user.message_count = 0
                user.message_count_last_reset = now
                user.save()

            if not user.premium:
                # Check if the non-premium user has exceeded the message limit
                if user.message_count >= 30:
                    return Response(
                        {'error': 'Non-premium users can only send 4 messages every 24 hours.'},
                        status=status.HTTP_403_FORBIDDEN
                    )

            # Handle the chatbot response
            try:
                liste = user_message.split()
                print(liste)
                if "help" in liste:
                    bot_response = "मलाई आफ्नो समस्या अवश्य बताउनुहोस्"
                else:
                    bot_response = chat_bot(user_message)
                    bot_response = bot_response.replace("\n", "")
            except Exception as e:
                bot_response = "माफ गर्नुहोस् मैले त्यो बुझिन"

            # Update the user's message count
            user.message_count += 1
            user.save()

            return Response({'response': bot_response}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)