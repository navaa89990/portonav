// Impor gambar secara eksplisit agar Astro bisa memprosesnya (Kompresi & WebP)
import econesiaImg from '../assets/econesia2.png';
import chlorofyImg from '../assets/chlorofy.png';
import bukuWarungImg from '../assets/buku-warung.jpg';
import certecoImg from '../assets/certeco.jpg';

export const projects = [
  { 
    title: "EcoNesia", 
    slug: "econesia",
    desc: "Platform keberlanjutan lingkungan dengan arsitektur Tailwind CSS yang teroptimasi untuk memangkas build size, dirancang untuk integrasi performa tinggi masa depan.", 
    desc_en: "Sustainability platform with Tailwind CSS architecture optimized to reduce build size, designed for future high-performance integration.",
    fullDesc: "EcoNesia adalah platform inovatif yang fokus pada edukasi dan monitoring keberlanjutan lingkungan di Indonesia. Menggunakan integrasi data real-time untuk memantau deforestasi dan kualitas laut, memberikan solusi digital bagi masa depan yang lebih hijau.",
    fullDesc_en: "EcoNesia is an innovative platform focused on education and monitoring environmental sustainability in Indonesia. Using real-time data integration to monitor deforestation and ocean quality.",
    tags: ["Tailwind", "JavaScript"],
    category_id: "Aplikasi Web",
    category_en: "Web Application",
    year: "2025",
    role_id: "Pengembang Front End",
    role_en: "Front End Dev",
    certificate: certecoImg,
    link: "https://econesia.vercel.app/",
    image: econesiaImg
  },
  { 
    title: "Chlorofy", 
    slug: "chlorofy",
    desc: "Web performa tinggi memanfaatkan Astro Island Architecture dan Static Site Generation (SSG) untuk memangkas JavaScript runtime demi skor SEO & Lighthouse maksimal.", 
    desc_en: "High-performance web utilizing Astro Island Architecture and Static Site Generation (SSG) to cut JavaScript runtime for maximum SEO & Lighthouse scores.",
    fullDesc: "Chlorofy menghubungkan arsitektur modern dengan ekosistem alam. Proyek ini dibangun dengan Astro untuk memastikan performa loading yang instan (Lighthouse score 100) serta SEO yang optimal untuk kampanye infrastruktur hijau.",
    fullDesc_en: "Chlorofy bridges modern architecture with natural ecosystems. This project was built with Astro to ensure instant loading performance (Lighthouse score 100).",
    tags: ["Astro", "Tailwind CSS", "Figma"],
    category_id: "Halaman Landas",
    category_en: "Landing Page",
    year: "2026",
    role_id: "Desainer Web",
    role_en: "Web Designer",
    link: "https://chlorofy.vercel.app/",
    image: chlorofyImg
  },
  {
    title: "UI Buku Warung Apps",
    slug: "ui-buku-warung",
    desc: "Studi kasus UI/UX komprehensif untuk manajemen keuangan UMKM dari draf Figma, siap ditranslasikan ke dalam logika state management Flutter.",
    desc_en: "Comprehensive UI/UX case study for MSME financial management from Figma drafts, ready to be translated into Flutter state management logic.",
    fullDesc: "Redesign aplikasi Buku Warung ini bertujuan untuk menyederhanakan alur pencatatan keuangan bagi pemilik warung di Indonesia. Fokus pada tipografi yang kontras dan navigasi yang mudah diakses oleh pengguna pemula.",
    fullDesc_en: "This Buku Warung app redesign aims to simplify the financial recording flow for shop owners in Indonesia. Focusing on high-contrast typography.",
    tags: ["UI/UX", "CANVA", "Figma"],
    category_id: "Desain Mobile",
    category_en: "Mobile Design",
    year: "2025",
    role_id: "Desainer UI/UX",
    role_en: "UI/UX Designer",
    link: "https://canva.link/v2vvf4g2e5d26ih",
    image: bukuWarungImg // Sementara gunakan gambar lain atau masukkan path yang valid
  }
];