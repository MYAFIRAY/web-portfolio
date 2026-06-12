const profileData = {
    name: "M Yafi Ray",
    role: "Web & Mobile Developer | Business Enthusiast",
    bio: "Mahasiswa Sistem Informasi semester 6 di UIN Imam Bonjol Padang. Saya memiliki ketertarikan yang besar pada integrasi antara teknologi dan proses bisnis. Berbekal pengalaman praktis, saya sering merancang dan membangun aplikasi web maupun mobile untuk berbagai kebutuhan operasional—mulai dari sistem Point of Sales (POS), Sales Force Automation (SFA), hingga platform pemesanan. Saya selalu antusias untuk belajar hal baru dan menerjemahkan alur bisnis yang kompleks menjadi solusi aplikasi yang efisien dan mudah digunakan.",
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
        description: "Merancang dan mengembangkan sistem monitoring operasional perbankan untuk melacak efisiensi alur kerja dan manajemen logistik di tingkat cabang."
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
        title: "Sunrise Coffee POS",
        category: "Mobile & Web App",
        description: "Sistem Point of Sales (POS) komprehensif untuk kedai kopi. Mobile app dibangun dengan Flutter untuk kasir, dan Laravel untuk dashboard admin. Memiliki fitur pelaporan transaksi otomatis secara harian untuk memantau omzet bisnis.",
        techStack: ["Flutter", "Laravel", "MySQL"],
        link: "#", 
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600" 
    },
    {
        title: "Sales Force Automation (SFA)",
        category: "Mobile Development",
        description: "Aplikasi mobile SFA yang dirancang untuk mengotomatisasi proses penjualan lapangan. Sistem ini membantu pencatatan pesanan (order) secara langsung dan pemantauan kinerja sales untuk mempercepat siklus distribusi produk.",
        techStack: ["Mobile App", "Business Logic", "UI/UX"],
        link: "#", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600"
    },
    {
        title: "Food Ordering System",
        category: "Mobile Application",
        description: "Prototype (prototype) aplikasi pemesanan makanan digital. Proyek ini berfokus pada pengalaman pengguna (UX) yang mulus saat menelusuri menu, mengelola keranjang, hingga alur *checkout* pemesanan.",
        techStack: ["Flutter", "Dart", "UI Implementation"],
        link: "#", 
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=600"
    },
    {
        title: "BSI Opex Monitoring",
        category: "Web Development",
        description: "Dashboard berbasis web untuk memantau aktivitas operasional perbankan. Menganalisis data logistik menjadi indikator kinerja utama (KPI) yang memberikan *insight* bagi manajemen.",
        techStack: ["PHP", "Laravel", "MySQL"],
        link: "#", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
    }
];