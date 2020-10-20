from django.shortcuts import render
from django.http import HttpResponse, request, HttpResponseRedirect
from pdc.helpers.login import auth
from pdc import settings

# Create your views here.

def index(request):
    session_token = request.COOKIES.get('authorizator_session')
    if auth.Api.pdcLoginCheck(session_token):
        user = auth.Api.pdcGetUser(session_token)
        return HttpResponse("store is logged in - username:" + user.getName())
    else:
        return HttpResponseRedirect(settings.PDC_LOGIN_URL + "?next=/store")
