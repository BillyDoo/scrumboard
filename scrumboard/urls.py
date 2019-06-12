from .api import ListViewSet, CardViewSet
from rest_framework.routers import DefaultRouter


#Get the URLS for our viewset classes
router = DefaultRouter()
router.register(r'lists', ListViewSet) #match the patterns to a url,as a view set!
router.register(r'cards', CardViewSet)


urlpatterns = router.urls
