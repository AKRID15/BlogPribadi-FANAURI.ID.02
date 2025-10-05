const postsDataTugas1 = [
  { id: 1, title: "Post 1: Harapan di MK Basis Data", img: "img/harapanMK.png" },
  { id: 2, title: "Post 2: Basis Data", img: "img/BASISDATA.PNG" },
  { id: 3, title: "Post 3: Conceptual Database", img: "img/KONSEPTIALDB.png" },
  { id: 4, title: "Post 4: Physical Model", img: "img/pysicalmodel.png" }
];

const postsDataTugas2 = [
  { 
    id: 5, 
    title: "Post 1: Instalasi MySQL (DBMS)", 
    img: "img/mysql.png" 
  },
  { 
    id: 6, 
    title: "Post 2: Attribute, Entitas, dan Relasi dalam ERD", 
    img: "img/entitas.png" 
  }
];


const detailContent = {
  1: `<h2>Harapan di MK Basis Data</h2>
      <p>Saya berharap setelah mengikuti mata kuliah Basis Data saya mampu merancang dan mengimplementasikan struktur data yang rapi untuk aplikasi nyata. 
      Secara spesifik saya ingin dapat membuat ER diagram yang benar, melakukan normalisasi untuk menghindari redudansi, menulis query SQL dasar hingga menengah, serta memahami konsep transaksi dan integritas data agar aplikasi yang saya buat aman dan konsisten.</p>`,

  2: `<h2>Apa itu Basis Data</h2>
      <p><b>Definisi:</b> Basis data adalah kumpulan data yang terorganisir dan saling berhubungan, yang disimpan secara sistematis dalam komputer sehingga dapat diakses, dikelola, dan diperbarui dengan mudah.</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Tersusun secara terstruktur.</li>
        <li>Memiliki hubungan antar data (relasi).</li>
        <li>Dikelola oleh sistem manajemen basis data (DBMS).</li>
        <li>Mendukung keamanan, integritas, dan konsistensi data.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menyimpan data secara efisien.</li>
        <li>Mengelola akses data banyak pengguna sekaligus.</li>
        <li>Memudahkan pencarian, pengeditan, dan penghapusan data.</li>
        <li>Mengurangi redundansi data (pengulangan).</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Meningkatkan kecepatan akses informasi.</li>
        <li>Menjaga kualitas dan konsistensi data.</li>
        <li>Mendukung pengambilan keputusan.</li>
        <li>Menyediakan data yang aman dan terkontrol.</li>
      </ul>
      <p><b>Contoh:</b> Basis data akademik universitas yang menyimpan data mahasiswa, dosen, mata kuliah, serta nilai.</p>`,

  3: `<h2>Apa itu Conceptual Database (Model Konseptual)</h2>
      <p><b>Definisi:</b> Model konseptual basis data adalah representasi abstrak dari struktur data yang menunjukkan entitas, atribut, dan hubungan antar entitas, biasanya divisualisasikan dengan diagram ER (Entity Relationship).</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Bersifat abstrak (belum teknis).</li>
        <li>Fokus pada “apa” data yang dibutuhkan, bukan “bagaimana” data disimpan.</li>
        <li>Menggunakan simbol, diagram, dan notasi untuk menggambarkan relasi.</li>
        <li>Tidak tergantung pada perangkat lunak DBMS tertentu.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menjadi rancangan awal sebelum implementasi basis data.</li>
        <li>Menggambarkan kebutuhan informasi pengguna.</li>
        <li>Memudahkan komunikasi antara analis sistem, desainer, dan pengguna.</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Mengurangi kesalahan saat implementasi database.</li>
        <li>Mempermudah dokumentasi sistem.</li>
        <li>Memberikan gambaran jelas tentang hubungan antar data.</li>
      </ul>
      <p><b>Contoh:</b> Diagram ER untuk sistem rumah sakit yang menggambarkan entitas Pasien, Dokter, Poli, dan Rekam Medis, serta hubungan antar entitas tersebut.</p>`,

  4: `<h2>Apa itu Physical Model (Model Fisik)</h2>
      <p><b>Definisi:</b> Model fisik basis data adalah rancangan teknis yang menjelaskan bagaimana data akan disimpan secara nyata dalam DBMS, termasuk struktur tabel, tipe data, indeks, partisi, dan relasi antar tabel.</p>
      <p><b>Karakteristik:</b></p>
      <ul>
        <li>Bersifat teknis dan detail.</li>
        <li>Menentukan tabel, kolom, tipe data, primary key, foreign key.</li>
        <li>Bergantung pada DBMS yang digunakan (misalnya MySQL, Oracle, PostgreSQL).</li>
        <li>Siap diimplementasikan ke dalam sistem database.</li>
      </ul>
      <p><b>Fungsi:</b></p>
      <ul>
        <li>Menentukan struktur penyimpanan data yang optimal.</li>
        <li>Menjamin integritas data dengan aturan (constraint).</li>
        <li>Mendukung efisiensi query dan performa sistem.</li>
      </ul>
      <p><b>Manfaat:</b></p>
      <ul>
        <li>Memastikan sistem database berjalan efektif dan efisien.</li>
        <li>Mempermudah pemeliharaan dan pengembangan database.</li>
        <li>Mengoptimalkan penyimpanan dan akses data.</li>
      </ul>
      <p><b>Contoh:</b> Pada sistem akademik, tabel Mahasiswa dengan atribut:
        <ul>
          <li>NIM (VARCHAR, Primary Key)</li>
          <li>Nama (VARCHAR)</li>
          <li>Tanggal_Lahir (DATE)</li>
          <li>Prodi (VARCHAR)</li>
        </ul>
        serta relasi dengan tabel Mata_Kuliah dan Nilai.
      </p>`
};

detailContent[5] = `
<h2>Instalasi Laragon (DBMS + PHP + phpMyAdmin)</h2>
<p>Berikut langkah-langkah instalasi Laragon di Windows:</p>
<ol>
  <li>Buka website resmi Laragon melalui link: 
      <a href="https://share.google/nc3cdTcWb1kCVcsWG" target="_blank">Download Laragon</a>.
  </li>
  <li>Pilih versi <b>Laragon 6.0.0</b> agar tidak berbayar.</li>
  <li>Jalankan file installer, lalu ikuti langkah Next → Next → Finish.</li>
  <li>Setelah selesai, buka aplikasi Laragon.</li>
  <li>Klik tombol <b>Start All</b> untuk menyalakan Apache & MySQL/MariaDB.</li>
  <li>Buka browser dan akses <code>http://localhost</code> untuk memastikan Laragon berjalan.</li>
  <li>Untuk mengelola database, buka <a href="http://localhost/phpmyadmin" target="_blank">http://localhost/phpmyadmin</a>.</li>
  <li>Login ke phpMyAdmin dengan username: <b>root</b> dan password: (kosong/tidak diisi).</li>
</ol>

<h3>Jika phpMyAdmin tidak bisa diakses:</h3>
<ol>
  <li>Download phpMyAdmin di sini: 
      <a href="https://www.phpmyadmin.net/downloads/" target="_blank">phpMyAdmin Official</a>.
  </li>
  <li>Ekstrak file hasil download.</li>
  <li>Pindahkan folder hasil ekstrak ke dalam <code>C:\\laragon\\www\\</code> 
      (misalnya jadi <code>C:\\laragon\\www\\phpmyadmin</code>).
  </li>
  <li>Restart Laragon.</li>
  <li>Buka kembali di browser: 
      <a href="http://localhost/phpmyadmin" target="_blank">http://localhost/phpmyadmin</a>.
  </li>
</ol>

<p>Jika berhasil login, berarti instalasi Laragon & phpMyAdmin telah selesai.</p>

  <p>Butuh contoh visual? Klik link berikut untuk lihat cara instalasi Laragon di YouTube.</p>
<p>
  <a href="https://youtu.be/Ib_RLYXaktA?si=1f1C8BuIiNK0Ioh2" target="_blank">
    Lihat Tutorial
  </a>
</p>

`;

detailContent[6] = `
  <h2>Attribute, Entitas, dan Relasi dalam ERD</h2>
  
  <p><b>1. Entitas</b><br>
  Entitas adalah objek nyata atau konsep yang ingin kita simpan datanya dalam sistem. Entitas bisa berupa orang, tempat, benda, atau kejadian yang memiliki karakteristik tertentu yang dapat diidentifikasi secara unik. 
  Setiap entitas biasanya memiliki <i>primary key</i> yang berfungsi sebagai identifikasi unik. Contoh entitas dalam sistem akademik:
  <ul>
    <li><b>Mahasiswa</b> → individu yang terdaftar di universitas</li>
    <li><b>Dosen</b> → pengajar yang mengajar mata kuliah</li>
    <li><b>MataKuliah</b> → mata kuliah yang ditawarkan universitas</li>
  </ul>
  Entitas biasanya digambarkan dalam ERD sebagai <b>persegi panjang</b>.
  </p>

  <p><b>2. Atribut</b><br>
  Atribut adalah informasi atau properti yang dimiliki oleh entitas. Atribut membantu menjelaskan karakteristik entitas secara lebih rinci. 
  Beberapa hal penting terkait atribut:
  <ul>
    <li><b>Primary Key (PK)</b> → atribut unik untuk mengidentifikasi entitas, misal NIM untuk Mahasiswa atau NIP untuk Dosen</li>
    <li><b>Simple Attribute</b> → atribut tunggal, misal Nama Mahasiswa</li>
    <li><b>Composite Attribute</b> → atribut yang terdiri dari beberapa sub-atribut, misal Alamat (Jalan, Kota, Kode Pos)</li>
    <li><b>Derived Attribute</b> → atribut yang bisa dihitung dari atribut lain, misal Umur dari Tanggal Lahir</li>
  </ul>
  Contoh atribut:
  <ul>
    <li>Mahasiswa → NIM (PK), Nama, Prodi, Tanggal Lahir</li>
    <li>Dosen → NIP (PK), Nama, Gelar, MataKuliah yang diajar</li>
    <li>MataKuliah → KodeMK (PK), NamaMK, SKS</li>
  </ul>
  Atribut biasanya digambarkan dalam ERD sebagai <b>oval</b> yang terhubung ke entitasnya.
  </p>

  <p><b>3. Relasi</b><br>
  Relasi adalah hubungan antar entitas yang menunjukkan bagaimana entitas tersebut saling berinteraksi. Setiap relasi bisa memiliki <i>cardinality</i> atau derajat keterkaitan, seperti:
  <ul>
    <li>One-to-One (1:1) → satu entitas A berhubungan dengan satu entitas B</li>
    <li>One-to-Many (1:N) → satu entitas A berhubungan dengan banyak entitas B</li>
    <li>Many-to-Many (M:N) → banyak entitas A berhubungan dengan banyak entitas B</li>
  </ul>
  Contoh relasi dalam sistem akademik:
  <ul>
    <li>Mahasiswa <b>mengambil</b> MataKuliah (Many-to-Many)</li>
    <li>Dosen <b>mengajar</b> MataKuliah (One-to-Many)</li>
  </ul>
  Relasi biasanya digambarkan dalam ERD sebagai <b>garis penghubung</b> antara entitas, dan bisa ditambahkan simbol untuk menunjukkan kardinalitasnya.
  </p>
`;



function renderPosts(containerId, posts) {
  const container = document.getElementById(containerId);
  container.innerHTML = posts.map(post => `
    <div class="post" onclick="showDetail(${post.id}, '${post.img}')">
      <img src="${post.img}" alt="${post.title}">
      <h2>${post.title}</h2>
    </div>
  `).join("");
}

function showDetail(id, imgUrl) {
  document.getElementById("detail").style.display = "block";
  document.getElementById("detail").innerHTML = `
    <a class="back-btn" onclick="goBack()">← Kembali</a>
    <img src="${imgUrl}" alt="Gambar Post">
    ${detailContent[id]}
  `;
  document.getElementById("tugas1").style.display = "none";
  document.getElementById("tugas2").style.display = "none";
  document.getElementById("profilePosts").style.display = "none";
}

function goBack() {
  showSection(lastSection);
}

let lastSection = "home";

function showSection(section) {
  document.getElementById("home").style.display = section === "home" ? "block" : "none";
  document.getElementById("tugas1").style.display = section === "tugas1" ? "block" : "none";
  document.getElementById("tugas2").style.display = section === "tugas2" ? "block" : "none";
  document.getElementById("profilePosts").style.display = section === "profilePosts" ? "block" : "none";
  document.getElementById("detail").style.display = "none";
  lastSection = section;
}

function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("show");
}

function toggleDarkMode(btn) {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  btn.textContent = isDark ? "☀️" : "🌙";
  document.getElementById("toggleMode").textContent = btn.textContent;
  document.getElementById("toggleModeMobile").textContent = btn.textContent;
}

document.getElementById("toggleMode").addEventListener("click", function() {
  toggleDarkMode(this);
});
document.getElementById("toggleModeMobile").addEventListener("click", function() {
  toggleDarkMode(this);
});


renderPosts("tugas1Posts", postsDataTugas1);
renderPosts("tugas2Posts", postsDataTugas2);
