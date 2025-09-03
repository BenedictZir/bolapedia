from django.shortcuts import render

def show_main(request):
    context = {
        'nama_aplikasi' : 'Bolapedia',
        'nama' : 'Benedictus Lucky Win Ziraluo',
        'npm' : '2406355174',
        'kelas' : 'PBP E'
    }

    return render(request, "main.html", context)