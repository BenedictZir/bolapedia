Tugas 2:
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


Tugas 3:

1. Jelaskan mengapa kita memerlukan data delivery dalam pengimplementasian sebuah platform?
    - Dengan data delivery, aplikasi yang kita buat menjadi lebih fleksibel dan lebih scalable. Kita bisa memisahkan bagian backend dan frontend, logika dan database diurus di backend, frontend tinggal menampilkan data-data tersebut. Lalu, kita jadi lebih mudah melakukan integrasi dengan platform lain. 

2. Menurutmu, mana yang lebih baik antara XML dan JSON? Mengapa JSON lebih populer dibandingkan XML?
    - Menurut saya pribadi, JSON lebih baik dari XML. Hal ini dikarenakan bagi saya JSON lebih mudah untuk dibaca, bentukannya mirip seperti dictionary python. Lalu, dari riset saya JSON lebih populer dan disukai oleh lebih banyak orang juga. Selain karena lebih mudah dibaca, ukuran file lebih kecil dan struktur datanya lebih sederhana sehingga lebih mudah diproses.

3. Jelaskan fungsi dari method is_valid() pada form Django dan mengapa kita membutuhkan method tersebut?
    - Method is_valid() akan mengembalikan nilai true apabila data yang dikirim melalui form sudah sesuai (valid) dengan yang didefinisikan oleh form. Kita bisa cek nilai hasil is_valid() dan hanya memasukkan data valid ke databse jika true. Dengan ini, kita bisa mencegah data berbahaya atau invalid masuk ke database.

4. Mengapa kita membutuhkan csrf_token saat membuat form di Django? Apa yang dapat terjadi jika kita tidak menambahkan csrf_token pada form Django? Bagaimana hal tersebut dapat dimanfaatkan oleh penyerang?
    - Kita memerlukan cstf_token untuk memastikan request sah yang diterima server. Jika kita tidak menambahkannya, user bisa mengirim request yang merugikan mereka tanpa kehendak mereka. Misalkan penyerang memberi link berbahaya yang membuat user mengirim request untuk transfer uang. 

5. Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
    - Menambahkan fungsi-fungsi di views untuk melihat objek dalam format JSON atau XML, juga membuat fungsi yang hanya meliat 1 objek dengan id yang kita inginkan. Cara membuatnya dengan mengambil semua object yang sudah dibuat (atau satu objek jika menggunakan id) lalu melakukan serialize dengan format sesuai fungsinya lalu di kembalikan sebagai HTTPResponse
    - Setelah membuat fungsi-fungsi itu, saya menambahkan path yang sesuai fungsi-fungsi tersebut di urls.py milik direktori main.
    - Saya membuat struktur form yang dapat menerima data product baru sehingga user bisa menambahkan product di aplikasi.
    - Selanjutnya, saya membuat template base.html yang akan digunakan untuk diturunkan di page-page lain. 
    - Saya lalu membuat template untuk halaman detail produk dan halaman ketika add product.
    - Setelah itu, saya membuat dua fungsi baru di views.py untuk bagian add product dan lihat detail product, masing-masing fungsi tersebut membawa user ke page yang sesuai.
    - Lalu saya menambahkan path yang sesuai dua fungsi itu di urls.py
    - Setelah selesai semua, saya melanjutkan README.md ini sekaligus melakukan push di PWS dan github.

6. Apakah ada feedback untuk asdos di tutorial 2 yang sudah kalian kerjakan?
    - Tidak ada, tutorialnya sudah cukup jelas dan mudah diikuti. 