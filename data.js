const profileData = {
    name: "M Yafi Ray",
    role: "Web & Mobile Developer | IS Student",
    bio: "Mahasiswa Sistem Informasi semester 6 di UIN Imam Bonjol Padang. Saya memiliki minat besar pada titik temu antara teknologi dan efisiensi bisnis. Selama masa kuliah dan magang, saya aktif merancang dan mengembangkan aplikasi fungsional—mulai dari sistem pencatatan penjualan, kas, hingga tools operasional siap pakai. Saya selalu antusias menerjemahkan kebutuhan bisnis sehari-hari menjadi solusi perangkat lunak yang andal, praktis, dan mudah digunakan.",
    location: "Padang & Pasaman Barat",
    email: "email.kamu@gmail.com", 
    linkedin: "https://www.linkedin.com/in/m-yafi-ray-1a0704415/", 
    github: "https://github.com/MYAFIRAY", 
    avatar: "./profilku.jpeg" 
};

// Teknologi inti yang sering digunakan
const skillsData = [
    { name: "Flutter", icon: "devicon-flutter-plain color" },
    { name: "Laravel", icon: "devicon-laravel-original color" },
    { name: "PHP", icon: "devicon-php-plain color" },
    { name: "MySQL", icon: "devicon-mysql-original color" },
    { name: "JavaScript", icon: "devicon-javascript-plain color" },
    { name: "Python", icon: "devicon-python-plain color" },
    { name: "Git", icon: "devicon-git-plain color" },
    { name: "Figma", icon: "devicon-figma-plain color" }
];

// Keahlian Analitik & Pendekatan Bisnis
const analyticalSkills = [
    "Web & Mobile Development", "Business Logic Integration", "Project Management", 
    "Digital Marketing (CDMP)", "UI/UX Design Thinking", "Database & IT Infrastructure"
];

// Pengalaman Magang & Sertifikasi Profesional
const experienceData = [
    {
        role: "IT Intern (Operational System)",
        company: "Bank Syariah Indonesia (BSI) KCP Pasaman Barat",
        period: "Feb 2026 - Mei 2026",
        description: "Membantu mendigitalisasi alur kerja cabang melalui pengembangan sistem fungsional untuk monitoring operasional dan pencatatan finansial internal sebagai inisiatif proyek magang."
    },
    {
        role: "Project Management Certification",
        company: "Dicoding Academy",
        period: "Februari 2026",
        description: "Memvalidasi kompetensi dalam merencanakan, mengeksekusi, dan mengelola siklus hidup sebuah proyek teknologi informasi secara terstruktur."
    },
    {
        role: "Certified Digital Marketing Practitioner",
        company: "LKP Syntax Training Centre",
        period: "Oktober 2025",
        description: "Sertifikasi keahlian dalam riset pasar, perancangan produk, dan strategi pemasaran digital untuk mengoptimalkan konversi bisnis."
    },
    {
        role: "Programming & Web Fundamentals",
        company: "Codepolitan",
        period: "Jan - Feb 2026",
        description: "Penyelesaian komprehensif untuk jalur pembelajaran dasar logika pemrograman menggunakan JavaScript, Python, serta fundamental HTML & CSS."
    },
    {
        role: "IT Infrastructure Certifications",
        company: "Cisco Networking Academy",
        period: "2023 - 2024",
        description: "Sertifikasi resmi dari Cisco mencakup pemahaman mendalam mengenai Operating Systems Basics, Networking Basics, dan Computer Hardware."
    }
];

// Daftar Karya Aplikasi Nyata
const projectsData = [
    {
        title: "Aplikasi Manajemen Kas KKN",
        category: "Mobile Application",
        description: "Aplikasi mobile siap pakai yang dirancang khusus untuk mencatat, mengelola, dan memonitoring iuran kas mahasiswa KKN secara transparan dan efisien.",
        techStack: ["Flutter", "Dart", "Mobile UI"],
        link: "https://youtube.com/shorts/cKJ4rBhp3H8?si=0fuF2H-bICHeGNf9", 
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600" 
    },
    {
        title: "Aplikasi Devisi Acara KKN",
        category: "Mobile Application",
        description: "Aplikasi penunjang operasional divisi acara KKN untuk membantu merencanakan jadwal, mengelola agenda kegiatan, dan memastikan eksekusi program berjalan sesuai timeline.",
        techStack: ["Flutter", "Dart", "Event Management"],
        link: "https://youtube.com/shorts/Uzvhwvye20s?si=gy5YPG3AIS_9MRjr", 
        image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=600" 
    },
    {
        title: "BSI Opex Monitoring (Internship Project)",
        category: "Web Development",
        description: "Dashboard operasional fungsional yang dibangun selama masa magang. Berfungsi sebagai sistem pemantauan aktivitas logistik yang menyajikan indikator kinerja (KPI) tingkat cabang secara otomatis.",
        techStack: ["PHP", "Laravel", "MySQL"],
        link: "https://youtu.be/9j54_WBzYwA?si=U6P9cYurBL1FDq7r", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
    },
    {
        title: "Neraca Pribadi Pegawai (Internship Project)",
        category: "Web Development",
        description: "Sistem pencatatan berbasis web yang dirancang sebagai inisiatif tugas magang. Digunakan sebagai alat bantu (tools) praktis bagi pegawai untuk mendata arus kas dan neraca keuangan pribadi.",
        techStack: ["PHP", "MySQL", "Financial Logic"],
        link: "https://youtu.be/2YPea2UEsaA", 
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600" 
    },
    {
        title: "Sunrise Coffee Mobile",
        category: "Mobile & Web App",
        description: "Aplikasi operasional penjualan harian untuk kedai kopi. Berfungsi khusus untuk merekam riwayat pembelian secara lokal dengan fitur pelaporan data yang terstruktur.",
        techStack: ["Flutter", "Dart", "Data Logging"],
        link: "https://youtube.com/shorts/memQ_Y_YZf4?si=GnefQEOTX22IAgEF", 
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600" 
    },
    {
        title: "Sales Force Automation (SFA)",
        category: "Mobile Development",
        description: "Aplikasi mobile SFA yang dirancang untuk mengotomatisasi proses lapangan. Sistem ini membantu pencatatan pesanan secara langsung dan pemantauan kinerja harian.",
        techStack: ["Mobile App", "Business Logic", "UI/UX"],
        link: "https://youtube.com/shorts/IcqYRaLlXTM?si=L4HLUInS7pucDEfi", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600"
    }
];

// Data Studi Kasus & Analisis Bisnis (Spesialisasi Sistem Informasi)
const caseStudiesData = [
    {
        title: "Analisis & Rekomendasi Operasional BSI",
        category: "Business Process Improvement",
        description: "Rangkuman kesimpulan dan rekomendasi strategis dari observasi magang untuk optimalisasi alur kerja, pelaporan, dan manajemen logistik di tingkat cabang.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
        link: "https://drive.google.com/file/d/1NTz2rw2LlVBHJwwvh6W1ECgGhz1ceryi/view?usp=sharing" 
    },
    {
        title: "Rancang Bangun Arsitektur Sistem",
        category: "System Design & Modeling",
        description: "Pemodelan alur sistem terstruktur menggunakan Activity Diagram dan algoritma hibrida AHP-SAW untuk mendukung rancangan manajemen persediaan farmasi.",
        icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z",
        link: "https://drive.google.com/file/d/1_-Kn-7y63aqEkOCaNn5Y2p2euFjz3oQ_/view?usp=sharing" 
    },
    {
        title: "Kajian Inovasi Solusi Digital",
        category: "Product Strategy",
        description: "Analisis identifikasi masalah digital sehari-hari (pain points) dari perspektif technopreneurship, beserta rumusan ide produk teknologi sebagai solusi fungsional.",
        icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
        link: "https://drive.google.com/file/d/18pON_4cBDnDvOb44fX8w3gOSl1bAFgiJ/view?usp=sharing" 
    }
];