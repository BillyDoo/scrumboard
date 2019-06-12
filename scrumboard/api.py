from rest_framework.viewsets import ModelViewSet
from rest_framework import permissions

from .models import List, Card
from .serializers import ListSerializer, CardSerializer


class ListViewSet(ModelViewSet):
    queryset = List.objects.all() #retrieve all the objects for the db
    serializer_class = ListSerializer #convert the data into JSON
    permission_classes = (permissions.IsAuthenticated,)#permit the user to access the URLs


class CardViewSet(ModelViewSet):
    queryset = Card.objects.all()
    serializer_class = CardSerializer
    permission_classes = (permissions.IsAuthenticated,)
