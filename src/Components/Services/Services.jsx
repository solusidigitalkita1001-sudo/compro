import React from "react";
import Service from "./Service";
import Title from "../Shared/Title/Title";

const serviceList = [
  {
    id: "01",
    heading: "Employee Management",
    subHeading: "Manajemen Karyawan",
    para: "Kelola data karyawan secara terpusat, termasuk profil pribadi, informasi kontak, riwayat pekerjaan, dan dokumen penting lainnya dengan sistem yang aman dan terorganisir.",
  },
  {
    id: "02",
    heading: "Payroll Management",
    subHeading: "Manajemen Penggajian",
    para: "Proses penggajian otomatis dengan perhitungan pajak akurat, slip gaji digital, dan integrasi dengan sistem perbankan untuk transfer gaji yang efisien.",
  },
  {
    id: "03",
    heading: "Attendance & Leave",
    subHeading: "Kehadiran & Cuti",
    para: "Kelola absensi karyawan secara real-time, tracking kehadiran masuk/keluar, manajemen permintaan cuti, dan laporan kehadiran yang komprehensif.",
  },
  {
    id: "04",
    heading: "Recruitment & Hiring",
    subHeading: "Rekrutmen & Perekrutan",
    para: "Streamline proses rekrutmen dari posting lowongan, screening pelamar, hingga onboarding karyawan baru dengan workflow yang terstruktur.",
  },
  {
    id: "05",
    heading: "Performance & Analytics",
    subHeading: "Performa & Analitik",
    para: "Monitor kinerja karyawan, kelola evaluasi berkala, analisis tren SDM, dan buat keputusan strategis berbasis data untuk pengembangan bisnis.",
  },
];
const Services = ({ isHeading }) => {
  return (
    <section
      id="services"
      className={`service__section overhid ${isHeading && "pt-120"}  pb-120`}
    >
      <div className="container">
        {isHeading && (
          <Title
            mainTitle="Layanan Khusus Kami untuk Pengembangan Bisnis Anda"
            sortTitle="Layanan yang Kami sediakan"
          />
        )}

        <div className={`service__uniquewrap `}>
          {serviceList.map(({ id, heading, subHeading, para }) => (
            <Service
              key={id}
              id={id}
              heading={heading}
              subHeading={subHeading}
              para={para}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
