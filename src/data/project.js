// Impor gambar secara eksplisit agar Astro bisa memprosesnya (Kompresi & WebP)
import econesiaImg from '../assets/econesia2.png';
import chlorofyImg from '../assets/chlorofy.png';
import bukuWarungImg from '../assets/buku-warung.jpg';
import certecoImg from '../assets/certeco.jpg';

export const projects = [
  { 
    title: "EcoNesia", 
    slug: "econesia",
    desc: "Sebuah proyek web bertema keberlanjutan lingkungan hidup yang dibangun menggunakan framework CSS yaitu TailwindCSS.", 
    fullDesc: "EcoNesia adalah platform inovatif yang fokus pada edukasi dan monitoring keberlanjutan lingkungan di Indonesia. Menggunakan integrasi data real-time untuk memantau deforestasi dan kualitas laut, memberikan solusi digital bagi masa depan yang lebih hijau.",
    tags: ["Tailwind", "JavaScript"],
    category: "Web Application",
    year: "2025",
    role: "Front End Dev",
    certificate: certecoImg,
    link: "https://econesia.vercel.app/",
    image: econesiaImg
  },
  { 
    title: "Chlorofy", 
    slug: "chlorofy",
    desc: "Platform masa depan hijau Indonesia yang dirancang dengan efisiensi tinggi menggunakan Astro, mengedepankan kecepatan akses dan keberlanjutan digital.", 
    fullDesc: "Chlorofy menghubungkan arsitektur modern dengan ekosistem alam. Proyek ini dibangun dengan Astro untuk memastikan performa loading yang instan (Lighthouse score 100) serta SEO yang optimal untuk kampanye infrastruktur hijau.",
    tags: ["Astro", "Tailwind CSS", "Figma"],
    category: "Landing Page",
    year: "2026",
    role: "Web Designer",
    link: "https://chlorofy.vercel.app/",
    image: chlorofyImg
  },
  {
    title: "UI Buku Warung Apps",
    slug: "ui-buku-warung",
    desc: "Eksplorasi desain antarmuka pengguna untuk manajemen keuangan UMKM, menekankan pada pengalaman pengguna yang simpel dan estetika modern.",
    fullDesc: "Redesign aplikasi Buku Warung ini bertujuan untuk menyederhanakan alur pencatatan keuangan bagi pemilik warung di Indonesia. Fokus pada tipografi yang kontras dan navigasi yang mudah diakses oleh pengguna pemula.",
    tags: ["UI/UX", "CANVA"],
    category: "Mobile Design",
    year: "2025",
    role: "UI/UX Designer",
    link: "https://canva.link/v2vvf4g2e5d26ih",
    image: bukuWarungImg // Sementara gunakan gambar lain atau masukkan path yang valid
  }
];