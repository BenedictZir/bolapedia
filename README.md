Link aplikasi PWS: https://benedictus-lucky-bolapedia.pbp.cs.ui.ac.id/

1. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
    - Pertama, saya membuat folder baru bernama bolapedia dan membuat virtual environment dan membuat konfigurasinya
    - Lalu, saya menulis segala hal yang dibutuhkan dalam requirements.txt lalu menginstallnya
    - Setelah menginstall, saya membuat project Django baru dan membuat aplikasi main
    - Di dalam main saya membuat class Product berisi atribut-atributnya
    - Setelah itu, saya melakukan python manage.py makemigrations dan python manage.py migrate untuk mengupdate database
    - Lalu, saya membuat template (.html) sederhana beserta membuat fungsi di views.py
    - Setelah itu, saya melakukan routing di urls.py project untuk bisa menjalankan aplikasi main dan melakukan routing di urls.py milik main juga
    - Setelah selesai semua, saya membuat README.md ini sekaligus melakukan deployment di PWS.

2. Buatlah bagan yang berisi request client ke web aplikasi berbasis Django beserta responnya dan jelaskan pada bagan tersebut kaitan antara urls.py, views.py, models.py, dan berkas html.
    - https://drive.google.com/file/d/1qhKZSit5N2rBlEuY6xgZBaL7onrIGIsp/view?usp=sharing
    - Request dari client dikirim ke server Django dan dicocokkan dengan urls.py yang cocok.
    - Setelah menemukan pola yang sesuai, Django meneruskan request ke views.py
    - views.py akan bertindak sebagai otak, jika butuh data views.py akan meminta ke models.py
    - Jika sudah memiliki data yang dibutuhkan, views.py akan mengirim data tersebut ke template untuk dirender
    - Setelah dirender, views.py mengembalikan HTML ini ke client dan browser menampilkan halaman tersebut.

3. Jelaskan peran settings.py dalam proyek Django!
    - Settings.py berisi konfigurasi utama django seperti database, app, template path, secret keys, allowed host, dan lain-lain.

4. Bagaimana cara kerja migrasi database di Django?
    - Pertama, ketik python manage.py makemigrations di terminal untuk membuat file migrasi (sebagai instruksi perubahan database)
    - Lalu, gunakan python manage.py migrate untuk mengeksekusi instruksi perubahan yang kita lakukan sebelumnya
    - Setelah melakukan kedua hal tersebut, database telah berhasil mengikuti perubahan models saat ini

5. Menurut Anda, dari semua framework yang ada, mengapa framework Django dijadikan permulaan pembelajaran pengembangan perangkat lunak?
    - Fitur bawaan banyak yang bisa langsung digunakan untuk membantu pengembangan aplikasi, terutama bagi para pemula
    - Komunitas yang besar membuat kita mudah menyelesaikan masalah dengan bertanya di forum atau melihat dari pertanyaan orang sebelumnya yang
      serupa
    - Django merupakan framework yang open source, semua orang bisa pakai, modifikasi, dan kontribusi
    - Django aman dipakai hingga tahap production
    - Django juga fleksibel, bisa digunakan untuk berbagai jenis aplikasi, dari sederhana hingga yang kompleks 

6. Apakah ada feedback untuk asisten dosen tutorial 1 yang telah kamu kerjakan sebelumnya?
    - Tidak ada, tutorialnya sudah cukup jelas dan mudah diikuti. 
