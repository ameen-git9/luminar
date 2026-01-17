from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from django.contrib.auth.models import User
from rest_framework.response import Response
from blog_app.serializers import UserSerializer,ProfileSerializer,PostSerializer,CommentSerializer
from blog_app.models import ProfileModel,PostModel,CommentModel
from rest_framework import permissions, authentication
from rest_framework.decorators import action,api_view,authentication_classes,permission_classes
from rest_framework_simplejwt import authentication as simplejwt_auth


# Create your views here.

@api_view(["GET"])
@authentication_classes([authentication.TokenAuthentication])
@permission_classes([permissions.IsAuthenticated])
def getdata(request,*args,**kwargs):
    user=request.user
    return Response({"id":user.id,"username":user.username})



class UserView(ModelViewSet):
    queryset=User.objects.all()
    serializer_class=UserSerializer

    def create(self, request, *args, **kwargs):
        serializer=UserSerializer(data=request.data)
        if serializer.is_valid():
            User.objects.create_user(**serializer.validated_data)
            return Response(data=serializer.data)
        else:
            return Response(data=serializer.errors)
        
    @action(methods=["GET"],detail=False,authentication_classes=[authentication.TokenAuthentication],permission_classes=[permissions.IsAuthenticated])
    def post_list(self,request,*args,**kwargs):
        user=request.user
        all_post=PostModel.objects.filter(user=user)
        serializer=PostSerializer(all_post,many=True)
        return Response(data=serializer.data)
        
class ProfileView(ModelViewSet):
    queryset=ProfileModel.objects.all()
    serializer_class=ProfileSerializer
    authentication_classes=[authentication.TokenAuthentication]
    permission_classes=[permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)
    
    @action(methods=['POST'],detail=True)
    def add_follower(self,request,*args,**kwargs):
        profile_to_follow=ProfileModel.objects.get(id=kwargs.get('pk'))
        user_followwing=request.user
        profile_to_follow.followers.add(user_followwing)
        return Response({'msg':'followed'})
    
    @action(methods=['GET'],detail=True)
    def list_followers(self, request, *args, **kwargs):
        profile=ProfileModel.objects.get(id=kwargs.get('pk'))
        followers_list=profile.followers.all()
        serializer=UserSerializer(followers_list,many=True)
        return Response(data=serializer.data)
    
class PostView(ModelViewSet):
    queryset=PostModel.objects.all()
    serializer_class=PostSerializer
    authentication_classes=[authentication.TokenAuthentication]
    # authentication_classes=[simplejwt_auth.JWTAuthentication]
    permission_classes=[permissions.IsAuthenticated]

    def perform_create(self,serializer):
        serializer.save(user=self.request.user)
        return super().perform_create(serializer)
    
    @action(methods=['POST'],detail=True)
    def Add_likes(self,request,*args,**kwargs):
        post_to_like = PostModel.objects.get(id=kwargs.get('pk'))
        user = request.user
        post_to_like.likes.add(user)
        return Response ({'msg':'liked'})
    

    @action(methods=['POST'],detail=True)
    def add_comment(self, request, *args, **kwargs):
        post= PostModel.objects.get(id=kwargs.get('pk'))
        user= request.user
        serializer=CommentSerializer(data=request.data)
        if serializer.is_valid():
            CommentModel.objects.create(**serializer.validated_data,user=user,post=post)
            return Response({'msg':'comment added'})
        


    @action(methods=['GET'],detail=True)
    def comments_list(self,request,*args, **kwargs):
        post=PostModel.objects.get(id=kwargs.get('pk'))
        comments=CommentModel.objects.filter(post=post)
        serializer=CommentSerializer(comments,many=True)
        return Response(data=serializer.data)



class CommentView(ModelViewSet):
    queryset=CommentModel.objects.all()
    serializer_class=CommentSerializer
    authentication_classes=[authentication.TokenAuthentication]
    permission_classes=[permissions.IsAuthenticated]







    

        
        
