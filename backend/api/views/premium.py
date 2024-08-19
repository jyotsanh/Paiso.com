from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from api.models import User

class SimulatedEsewaPaymentView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        
        if not user.premium:
            # Convert user to premium and add webapp currency
            user.make_premium()
            return Response({'message': 'You are successfully subscribed and now a premium member.'}, status=status.HTTP_200_OK)
        else:
            return Response({'message': 'You are already a premium member.'}, status=status.HTTP_200_OK)
