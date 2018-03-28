from django.shortcuts import redirect

# Create your views here.

def redirect_action(request):
  return redirect('/polls/')
