import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Concept",
    info: "Tahap awal untuk memahami kebutuhan dan menentukan arah pengembangan website.",
    list: [
      "Meninjau kebutuhan dan tujuan pembuatan website",
      "Analisis target pengguna dan kompetitor",
      "Menyusun konsep dan strategi pengembangan",
    ],
  },
  {
    id: 2,
    title: "Design",
    info: "Membuat tampilan website yang menarik, rapi, dan mudah digunakan.",
    list: [
      "Membuat wireframe dan mockup desain",
      "Menentukan warna, typography, dan style visual",
      "Menyempurnakan desain sebelum tahap development",
    ],
  },
  {
    id: 3,
    title: "Development",
    info: "Tahap implementasi desain menjadi website yang siap digunakan.",
    list: [
      "Membangun website sesuai desain yang telah dibuat",
      "Mengintegrasikan fitur dan kebutuhan sistem",
      "Melakukan testing dan memastikan website siap digunakan",
    ],
  },
];
const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Website Impian Anda Hanya dalam Beberapa Langkah"
          sortTitle="Proses Kerja Kami"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
