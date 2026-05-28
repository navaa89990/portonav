import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const prerender = false;

// Pastikan variabel lingkungan ini sudah diatur di .env
// Contoh:
// EMAIL_USER="emailkamu@gmail.com"
// EMAIL_PASS="app_password_gmail_kamu" // Gunakan App Password, bukan password akun Gmail
const EMAIL_USER = import.meta.env.EMAIL_USER;
const EMAIL_PASS = import.meta.env.EMAIL_PASS;

export const POST: APIRoute = async ({ request }) => {
  if (!EMAIL_USER || !EMAIL_PASS) {
    return new Response(JSON.stringify({
      message: "Server email credentials not configured."
    }), { status: 500 });
  }

  // Mengambil data dari body request yang berformat JSON
  const { name, email, message } = await request.json() as { name: string; email: string; message: string };

  // Validasi sederhana
  if (!name || !email || !message) {
    return new Response(JSON.stringify({
      message: "Nama, Email, dan Pesan tidak boleh kosong."
    }), { status: 400 });
  }

  // Konfigurasi transporter Nodemailer (contoh untuk Gmail)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // Nama pengirim dan emailnya
      to: EMAIL_USER, // Email kamu yang akan menerima pesan
      subject: `Pesan dari Portofolio: ${name}`,
      html: `<p><strong>Nama:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Pesan:</strong><br>${message}</p>`,
    });

    return new Response(JSON.stringify({
      message: "Pesan berhasil terkirim!"
    }), { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return new Response(JSON.stringify({
      message: "Gagal mengirim pesan. Silakan coba lagi nanti."
    }), { status: 500 });
  }
};
