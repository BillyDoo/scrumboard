from rest_framework import serializers

from .models import List, Card

#Encode Python objects as JSON

class CardSerializer(serializers.ModelSerializer):#generate JSON

    class Meta:
        model = Card
        fields = '__all__'


class ListSerializer(serializers.ModelSerializer):
    cards = CardSerializer(read_only=True, many=True)

    class Meta:
        model = List
        fields = '__all__'




