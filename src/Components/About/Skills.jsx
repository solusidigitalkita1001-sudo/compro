// import React from "react";
// import personalInfothumb from "../../assets/img/about/personal-infothumb.png";
// import figma from "../../assets/img/about/figma.png";
// import word from "../../assets/img/about/word.png";
// import html from "../../assets/img/about/html.png";
// import boot from "../../assets/img/about/boot.png";

// const skillsList = [
//   {
//     id: 1,
//     skill: "Figma",
//     percentage: "90%",
//     image: figma,
//   },
//   {
//     id: 2,
//     skill: "Wordpress",
//     percentage: "95%",
//     image: word,
//   },
//   {
//     id: 3,
//     skill: "Figma",
//     percentage: "85%",
//     image: html,
//   },
//   {
//     id: 4,
//     skill: "Bootstrap",
//     percentage: "97%",
//     image: boot,
//   },
// ];
// const Skills = ({ isTabActive }) => {
//   return (
//     <div className={`tabitem ${isTabActive === "skills" ? "active" : ""} `}>
//       <div className="about__v1wrap">
//         <div className="row g-4 align-items-lg-start align-items-center">
//           <div className="col-lg-5">
//             <div className="about__onethumb">
//               <img src={personalInfothumb} alt="img" />
//             </div>
//           </div>
//           <div className="col-lg-7">
//             <div className="about__onecontent">
//               <h2>Kompetensi & Keahlian Kami</h2>
//               <p>
//                 Kami menghadirkan solusi digital yang dirancang secara strategis untuk membantu bisnis berkembang, beradaptasi, dan unggul di era transformasi digital. Didukung oleh tim berpengalaman, kami berkomitmen memberikan hasil yang terukur dan berkelanjutan.
//               </p>
//               <div className="about__contactwrap">
//                 <div className="row g-4">
//                   {skillsList.map(({id, skill, image, percentage}) => {
//                     return (
//                       <div key={id} className="col-xxl-6 col-xl-6 col-lg-12 col-md-6">
//                         <div className="abox myskill__item">
//                           <div className="thumb">
//                             <img src={image} alt="img" />
//                           </div>
//                           <div className="mys">
//                             <span className="ptext fz-18 mb-15 d-block">{skill}</span>
//                             <h1 className="fw-600">{percentage}</h1>
//                           </div>
//                         </div>
//                       </div>
//                     );
//                   })}

//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
import React from "react";
import personalInfothumb from "../../assets/img/about/personal-infothumb.png";

const skillsList = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "Kami merancang antarmuka yang modern, responsif, dan berorientasi pada pengalaman pengguna untuk meningkatkan engagement dan konversi.",
  },
  {
    id: 2,
    title: "Website Development",
    description:
      "Pengembangan website profesional menggunakan teknologi modern yang cepat, aman, dan scalable sesuai kebutuhan bisnis.",
  },
  {
    id: 3,
    title: "Web Application Development",
    description:
      "Membangun sistem dan dashboard berbasis web untuk mendukung operasional perusahaan secara efisien dan terintegrasi.",
  },
  {
    id: 4,
    title: "Maintenance & Support",
    description:
      "Layanan pemeliharaan, optimasi performa, keamanan, dan pengembangan berkelanjutan untuk menjaga stabilitas sistem.",
  },
];

const Skills = ({ isTabActive }) => {
  return (
    <div className={`tabitem ${isTabActive === "skills" ? "active" : ""}`}>
      <div className="about__v1wrap">
        <div className="row g-4 align-items-lg-start align-items-center">

          {/* Image Thumb Tetap */}
          <div className="col-lg-5">
            <div className="about__onethumb">
              <img src={personalInfothumb} alt="Kompetensi SDK" />
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-7">
            <div className="about__onecontent">
              <h2>Kompetensi & Keahlian Kami</h2>
              <p>
                Kami menghadirkan solusi digital yang dirancang secara strategis
                untuk membantu bisnis berkembang, beradaptasi, dan unggul di era
                transformasi digital. Didukung oleh tim berpengalaman, kami
                berkomitmen memberikan hasil yang terukur dan berkelanjutan.
              </p>

              <div className="about__contactwrap mt-4">
                <div className="row g-4">
                  {skillsList.map(({ id, title, description }) => (
                    <div
                      key={id}
                      className="col-xxl-6 col-xl-6 col-lg-12 col-md-6"
                    >
                      <div className="abox service__item p-4 h-100">
                        <h5 className="mb-3">{title}</h5>
                        <p className="mb-0">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;