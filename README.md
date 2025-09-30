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

Tugas 4:

1. Apa itu Django AuthenticationForm? Jelaskan juga kelebihan dan kekurangannya.
    - AuthenticationForm adalah form bawaan Django yang digunakan untuk autentikasi user. Form ini digunakan di halaman login. Form tersebut memiliki field username dan field password. Setelah itu akan dilakukan validasi terhadap kredensial user dengan database Django.
    - Kelebihan:
        - Sudah terintegrasi dengan sistem autentikasi Django, jadi kita tidak perlu membuat validasi manual.
        - Form ini sudah memiliki handling error otomatis, misal jika password salah atau akun tidak ada.
    - Kekurangan:
        - Form ini cukup generik, sehingga developer perlu kustomisasi tambahan jika ingin membuat sistem login yang lebih kompleks.
        - Tampilan form ini sederhana, sehingga hampir selalu diubah tampilannya menyesuaikan UI aplikasi.

2. Apa perbedaan antara autentikasi dan otorisasi? Bagaiamana Django mengimplementasikan kedua konsep tersebut?
    - Autentikasi adalah proses mengidentifikasi identitas user, sedangkan otorisasi adalah proses menentukan hak akses pada user.
    - Django mengimplementasikan proses autentikasi ini dengan menyediakan sistem User bawaan, form login bawaan (AuthenticationForm), dan backend autentikasi.
    - Django mengimplementasikan proses otorisasi dengan memiliki sistem permission dan group. Pembuat aplikasi dapat menentukan apakah seorang user memiliki akses tertentu.

3. Apa saja kelebihan dan kekurangan session dan cookies dalam konteks menyimpan state di aplikasi web?
    - Sessions:
        - Kelebihan:
            - Data tersimpan di server sehingga lebih aman.
            - Bisa menyimpan informasi lebih kompleks karna hanya session ID yang dikirim ke client.
        - Kekurangan:
            - Karna disimpan di server, maka perlu penyimpanan tambahan di server.
            - Skalabilitas lebih kompleks untuk aplikasi yang memiliki banyak user.
    - Cookies:
        - Kelebihan:
            - Data langsung tersimpan di browser user.
            - Tidak perlu storage khusus di server.
        - Kekurangan:
            - Rentan dimodifikasi atau dicuri.
            - Kapasitas penyimpanan kecil
    
4. Apakah penggunaan cookies aman secara default dalam pengembangan web, atau apakah ada risiko potensial yang harus diwaspadai? Bagaimana Django menangani hal tersebut?
    - Secara default, penggunaan cookies kurang aman karna memiliki beberapa resiko. Contohnya jika cookie dicuri orang lain yang mana berisi session id, pencuri dapat menyamar sebagai korban. Selain itu, karna cookie otomatis terkirim tiap request, attacker bisa mengirim request palsu dengan cookie session yang masih valid.
    - Django sudah menyiapkan mekanisme bawaaan untuk menghindari resiko-resiko yang ditimbulkan penggunaan cookies.
        - HttpOnly cookies, Django set cookie session sebagai HttpOnly, jadi cookie tidak bisa dibaca lewat JavaScript sehingga aman dari serangan XSS sederhana.
        - Secure Flag, jika flag ini diaktifkan cookie hanya dikirim lewat HTTPS.
        - Proteksi Csrf bawaan, Django punya csrf token dan middleware yang mamvalidasi setiap FORM post
        - Session ID saja yang disimpan dan bukan data aslinya. Sehingga walau cookie dibaca penyerang, penyerang hanya bisa melihat ID bukan data aslinya.

5.  Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial).
    - Pertama-tama membuat fungsi register di views.py dengan UserCreationForm bawaan Django untuk bagian registrasi akun user. Setelah membuat fungsi register, membuat juga halaman register beserta melakukan routing untuk halaman register itu.
    - Setelah membuat fungsi register, sekarang untuk bagian login. Seperti register, saya membuat fungsi login_user di views.py dengan AuthenticationForm bawaan Django, lalu mmebuat halaman login dan routingnya.
    - Lalu membuat fungsi logout_user yang dapat dipanggil dengan memencet button di halaman main, yang berisi fungsi logout bawaan Django.
    - Setelah selesai membuat mekanisme registrasi beserta login dan logout, saya memberikan decorator login_required diatas fungsi di views.py. Hal ini agar untuk mengakses halaman-halaman dari fungsi tersebut, user harus login terlebih dahulu. Disini untuk memanggil show_main dan show_product kita pastikan harus login dan kita alihkan ke halaman login.
    
    - Untuk menghubungkan model Product dengan User, pertama kita update model product di models.py dan tambahkan atribut User (bawaan Django) di dalam model product.
    - Setelah itu saya mengupdate fungsi create_product di views.py agar menambahkan user yang memberi request untuk membuat product sebagai pemilik product tersebut.
    - Di fungsi show_main dan halaman main.html saya berikan opsi untuk menunjukkan product milik user saja atau milik semua user.
    - Lalu saya juga menambahkan nama user pemilik product tersebut di halaman product_detail.


    - Untuk menerapkan menampilkan data user yang sedang login dengan cookies, pertama kita tambahkan set_cookie bernama last_login di fungsi login_user yang akan menyimpan cookie berisi timestamp.
    - Selain itu, saya menambahkan delete_cookie di fungsi logout_user untuk menghapus cookie last_login ketika user melakukan logout.
    - Terakhir, saya menampilkan cookie tersebut di context yang akan ditampilkan halaman main.

Tugas 5:

1.  Jika terdapat beberapa CSS selector untuk suatu elemen HTML, jelaskan urutan prioritas pengambilan CSS selector tersebut!
    - Jika ada beberapa selector, urutan prioritasnya dari yang tertinggi adalah
        - Inline style (paling prioritas)
        - ID selector
        - Classes, attribute selectors and pseudo-classes
        - Elements and pseudo-elements
        - Universal selector and :where()	

2. Mengapa responsive design menjadi konsep yang penting dalam pengembangan aplikasi web? Berikan contoh aplikasi yang sudah dan belum menerapkan responsive design, serta jelaskan mengapa!
    - Agar website lebih aksesibel ke banyak device dan orang serta meningkatkan user experience. Selain itu, membuat website yang responsive lebih efisien daripada membuat website berbeda untuk device berbeda.
    - Contoh aplikasi yang sudah menerapkan seperti website tokopedia, yang belum itu seperti website atcoder.com (konten yang lebih besar tidak langsung disesuaikan di device yang lebih kecil sehingga user harus scroll horizontal)

3. Jelaskan perbedaan antara margin, border, dan padding, serta cara untuk mengimplementasikan ketiga hal tersebut!
    - Margin seperti bagian kosong dengan elemen lain, tujuannya agar elemen tidak menempel ke elemen lain.
        - contoh cara implementasi: 
            .box{
                margin: 20px;
            }
    - Border itu garis yang mengelilingi elemen, berfungsi untuk memberi semacam frame untuk elemen tersebut.
        - contoh cara implementasi:
            .box{
                border: 2px solid black;
            }
    - Padding itu ruang di dalam elemen, atau jarak antara konten dengan border.
        - contoh cara implementasi:
            .box{
                padding: 15px;
            }

4.  Jelaskan konsep flex box dan grid layout beserta kegunaannya!
    - Flexbox adalah sistem layout yang bisa otomatis mengatur elemen-elemen dalam 1 row atau 1 column. flex box otomatis menyesuaikan ukuran, posisi, dan jarak di berbagai ukuran layar. Berguna jika kita ingin membuat semacam 1 bar
    - Grid adalah sistem layout 2 dimensi (punya baris dan kolom), kita bisa membuat semacam tabel dan mengatur kolom dan barisnya. Berguna jika ingin membuat halaman penuh seperti homepace ecommerce.

5.  Jelaskan bagaimana cara kamu mengimplementasikan checklist di atas secara step-by-step (bukan hanya sekadar mengikuti tutorial)!
    - Membuat fungsi bernama edit_product dan delete_product. Pada fungsi edit product, kita akan membuat form baru dan data di form baru yang diisi akan menggantikan data product itu. Lalu untuk yang delete_product, kita tinggal memanggil method delete bawaan model untuk menghapus product tersebut tadi database lalu kembali ke halaman main.
    - Untuk kustomisasi menggunakan css, di base.html kita beri script dari tailwind dulu agar semua halaman yang mengextend base.html menggunakan tailwind.
    - Selain itu kita juga membuat static file global.css berisi beberapa konfigurasi form dan checkbox agar semua halaman punya desain yang seragam.
    - Untuk navbar, saya membuat navbar.html berisi tombol tombol seperti create product,  nama menggunakan tailwind. Di main.html saya buat include navbar diatas bagian halamannya. Di halaman navbar dibuat 2 versi untuk size medium dan jika size besar agar responsive.
    - Untuk halaman lain menggunakan tailwind juga dengan style yang mirip-mirip
    
