// Data for skills
const skills = [
  "JavaScript",
  "React",
  "PHP",
  "Laravel",
  "Java",
  "Python",
  "Node.js",
  "Tailwind CSS",
  "Bootstrap",
  "PostgreSQL",
  "Firebase",
  "Git",
  "Dart",
  "Flutter",
  "Figma",
  "CorelDraw",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Clip Studio Paint"
];

// Data for work experience
const experiences = [
  {
    company: "CV. Wahana Sukses Bersama",
    position: {
      en: "Graphic Designer (Apprenticeship)",
      id: "Desainer Grafis (Magang)",
    },
    period: {
      start: "Jun 2021",
      end: "Sep 2021",
    },
    description: {
      en: "I have experience creating visual designs for promotional purposes, such as banners, flyers, and social media content. I collaborate with the marketing team to produce materials tailored to business needs, and make revisions based on feedback from superiors or internal clients. I also participate in UI/UX design to ensure a user-friendly and responsive website. I am also familiar with various design software such as Adobe Illustrator, Photoshop, Figma, and CorelDRAW, and maintain the consistency of the company's visual identity across all graphic assets.",
      id: "Saya berpengalaman dalam membuat desain visual untuk keperluan promosi seperti banner, flyer, dan konten media sosial. Saya bekerja sama dengan tim marketing untuk menghasilkan materi yang sesuai dengan kebutuhan bisnis, serta melakukan revisi berdasarkan masukan dari atasan atau klien internal. Selain itu, saya terlibat dalam perancangan desain UI/UX agar tampilan situs ramah pengguna dan responsif. Saya juga terbiasa menggunakan berbagai software desain seperti Adobe Illustrator, Photoshop, Figma, dan CorelDRAW, serta menjaga konsistensi identitas visual perusahaan dalam setiap aset grafis.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753967022/nanda-portofolio/LOGO_WSB_blue_sj737c_mbdjn0.ico",
  },
  {
    company: "CV. Mekar Cutting Digital",
    position: {
      en: "Full-Stack Web Developer (Freelancer)",
      id: "Full-Stack Pengembang Web (Freelancer)",
    },
    period: {
      start: "Jun 2022",
      end: "Des 2023",
    },
    description: {
      en: "Experienced in both front-end and back-end website development using HTML, CSS, JavaScript, PHP, and MySQL. Familiar with frameworks like Laravel and React.js to build dynamic web applications. Capable of creating custom CMSs based on client requirements, designing responsive UI/UX, and optimizing performance and cross-browser compatibility. Also provides technical documentation and post-deployment training.",
      id: "Berpengalaman dalam pengembangan website baik frontend maupun backend menggunakan HTML, CSS, JavaScript, PHP, dan MySQL. Terbiasa menggunakan framework seperti Laravel dan React.js untuk membangun aplikasi web yang dinamis. Mampu membuat CMS kustom sesuai kebutuhan klien, merancang UI/UX yang responsif, serta mengoptimalkan performa dan kompatibilitas lintas browser. Juga menyediakan dokumentasi teknis dan pelatihan setelah deployment.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753967433/nanda-portofolio/icon_fedg3c_nhg2nt.ico",
  },
  {
    company: "CV. Sukses Global Mandiri",
    position: {
      en: "Full-Stack Web Developer (Freelancer)",
      id: "Full-Stack Pengembang Web (Freelancer)",
    },
    period: {
      start: "Mar 2024",
      end: "Mei 2024",
    },
    description: {
      en: "I built a product portfolio website for CV. Sukses Global Mandiri's Samase brand as a digital showcase platform. The frontend was developed using React.js with a modular component approach, while the backend used Laravel as a RESTful API for product data management. I designed a full-stack architecture that separated the frontend and backend for ease of management and scalability. Throughout the process, I collaborated with the internal team to design navigation, content structure, and visuals in line with the brand identity, implemented basic security practices, and conducted deployment and training for staff.",
      id: "Saya membangun website portofolio produk untuk brand Samase milik CV. Sukses Global Mandiri sebagai platform digital showcase. Frontend dikembangkan menggunakan React.js dengan pendekatan komponen modular, sementara backend menggunakan Laravel sebagai RESTful API untuk pengelolaan data produk. Saya merancang arsitektur full-stack yang terpisah antara frontend dan backend demi kemudahan pengelolaan dan skalabilitas. Dalam prosesnya, saya bekerja sama dengan tim internal untuk menyusun navigasi, struktur konten, dan visual sesuai identitas brand, menerapkan praktik keamanan dasar, serta melakukan deployment dan pelatihan penggunaan bagi staf.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753968110/nanda-portofolio/Fillah_Samase_hm3t1p.ico",
  },
  {
    company: "Freelance Full-Stack Developer & Graphic Designer",
    position: {
      en: "Full-Stack Developer & Graphic Designer (Freelancer)",
      id: "Full-Stack Pengembang & Desainer Grafis (Freelancer)",
    },
    period: {
      start: "Jun 2021",
      end: "Saat ini",
    },
    description: {
      en: "Experienced in handling various freelance projects, ranging from web, desktop, and mobile application development, to graphic design for clients from various sectors. Involved in the entire project process, from planning to deployment, as well as creating visual identities such as logos and promotional materials. Actively providing creative technology-based solutions for the needs of MSMEs and individuals, while maintaining good communication and technical consultation throughout the project.",
      id: "Berpengalaman menangani berbagai proyek freelance, mulai dari pengembangan aplikasi web, desktop, dan mobile, hingga desain grafis untuk klien dari berbagai sektor. Terlibat dalam seluruh proses proyek, dari perencanaan hingga deployment, serta menciptakan identitas visual seperti logo dan materi promosi. Aktif memberikan solusi kreatif berbasis teknologi untuk kebutuhan UMKM dan individu, serta menjaga komunikasi dan konsultasi teknis yang baik sepanjang proyek.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753970103/nanda-portofolio/70766138_qsttsa_yq7fhm.ico",
  },
];

// Data for education
const educations = [
  {
    institution: "Universitas Amikom Purwokerto",
    degree: {
      en: "Bachelor of Information Technology",
      id: "S1 Teknologi Informasi",
    },
    period: {
      start: "Sep 2022",
      end: "Saat ini",
    },
    description: {
      en: "-",
      id: "-",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753975638/nanda-portofolio/1676306765719_aus1gl.jpg",
  },
  {
    institution: "SMK Negeri 1 Purbalingga",
    degree: {
      en: "Software engineering",
      id: "Rekayasa Perangkat Lunak",
    },
    period: {
      start: "Jul 2019",
      end: "Jun 2022",
    },
    description: {
      en: "Graduated with honors, active in school organizations, and participated in various competitions, including in the field of programming.",
      id: "Lulus dengan predikat memuaskan, aktif dalam organisasi sekolah, serta berpartisipasi dalam berbagai lomba, termasuk di bidang pemrograman.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753975926/nanda-portofolio/Logo_SMK_Negeri_1_Purbalingga_iheifs.png",
  },
];

// Data for projects
const projects = [
  {
    title: "Website SD QITA (Sekolah Dasar Qaryah Thayyibah)",
    description: {
      en: "Qita Elementary School (sdqita.sch.id) is the official website of Qita Elementary School, an Islamic educational institution that promotes a child-friendly and inclusive approach, combining the national curriculum with an integrative thematic 'Creative Curriculum' method. This website provides comprehensive information about the school's vision and mission, online registration, special programs for children with special needs, and various activities that support the academic development, character, and independence of students in an Islamic and supportive environment.",
      id: "SD Qita (sdqita.sch.id) adalah situs resmi Sekolah Dasar Qita, lembaga pendidikan Islam yang mengusung pendekatan ramah anak dan inklusif, dengan menggabungkan kurikulum nasional dan metode 'Creative Curriculum' tematik integratif. Website ini menyajikan informasi lengkap tentang visi misi sekolah, pendaftaran online, program khusus bagi anak berkebutuhan khusus, serta berbagai kegiatan yang mendukung perkembangan akademik, karakter, dan kemandirian siswa dalam lingkungan yang islami dan suportif.",
    },
    imageUrl:
      "https://res.cloudinary.com/dnmkw2715/image/upload/v1753976698/nanda-portofolio/sdqita_qcqwqo.png",
    tags: ["Laravel", "Node.js", "MySql", "React.js", "Tailwind CSS", "Inertia.js", "Cloudinary"],
  },
  {
    title: "Mobile Dashboard",
    description: {
      en: "Analytics dashboard for mobile applications",
      id: "Dasbor analitik untuk aplikasi mobile",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1715&q=80",
    tags: ["Vue.js", "Tailwind CSS", "Firebase", "Chart.js"],
  },
  {
    title: "Task Management App",
    description: {
      en: "Productivity app for managing tasks and projects",
      id: "Aplikasi produktivitas untuk mengelola tugas dan proyek",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    title: "Social Media Platform",
    description: {
      en: "Social network for connecting professionals",
      id: "Jaringan sosial untuk menghubungkan profesional",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    tags: ["React", "GraphQL", "Node.js", "MongoDB"],
  },
  {
    title: "Weather Application",
    description: {
      en: "Real-time weather forecasting application",
      id: "Aplikasi prakiraan cuaca real-time",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1675&q=80",
    tags: ["JavaScript", "API Integration", "CSS3", "HTML5"],
  },
];

// Language toggle functionality
const languageToggle = document.getElementById("language-toggle");
const currentLanguage = localStorage.getItem("language") || "en";

// Set initial language
if (currentLanguage === "id") {
  toggleLanguage();
}

languageToggle.addEventListener("click", toggleLanguage);

function toggleLanguage() {
  document.querySelectorAll(".en-lang").forEach((el) => {
    el.classList.toggle("hidden");
  });
  document.querySelectorAll(".id-lang").forEach((el) => {
    el.classList.toggle("hidden");
  });

  const isIndonesian = document
    .querySelector(".en-lang")
    .classList.contains("hidden");
  localStorage.setItem("language", isIndonesian ? "id" : "en");
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add fade-in animation to sections as they come into view
const fadeElements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
      }
    });
  },
  { threshold: 0.1 }
);

fadeElements.forEach((el) => {
  el.style.opacity = 0;
  observer.observe(el);
});

// Render skills
const skillsContainer = document.getElementById("skills-container");
skills.forEach((skill) => {
  const skillElement = document.createElement("span");
  skillElement.className = "px-3 py-1 skill-badge rounded-full text-sm";
  skillElement.textContent = skill;
  skillsContainer.appendChild(skillElement);
});

// Render experiences
const experienceContainer = document.getElementById("experience-container");
experiences.forEach((exp) => {
  const expElement = document.createElement("div");
  expElement.className = "experience-card";

  expElement.innerHTML = `
    <div class="flex items-start gap-4">
      <img src="${exp.logo}" alt="${exp.company}" class="experience-logo">
      <div>
        <h3 class="text-lg font-bold">${exp.company}</h3>
        <p class="text-blue-600 font-medium mb-1 en-lang">${exp.position.en}</p>
        <p class="text-blue-600 font-medium mb-1 id-lang hidden">${exp.position.id}</p>
        <p class="text-gray-500 text-sm mb-2">${exp.period.start} - ${exp.period.end}</p>
        <p class="text-gray-600 en-lang">${exp.description.en}</p>
        <p class="text-gray-600 id-lang hidden">${exp.description.id}</p>
      </div>
    </div>
  `;

  experienceContainer.appendChild(expElement);
});

// Render educations
const educationContainer = document.getElementById("education-container");
educations.forEach((edu) => {
  const eduElement = document.createElement("div");
  eduElement.className = "education-card";

  eduElement.innerHTML = `
    <div class="flex items-start gap-4">
      <img src="${edu.logo}" alt="${edu.institution}" class="education-logo">
      <div>
        <h3 class="text-lg font-bold">${edu.institution}</h3>
        <p class="text-blue-600 font-medium mb-1 en-lang">${edu.degree.en}</p>
        <p class="text-blue-600 font-medium mb-1 id-lang hidden">${edu.degree.id}</p>
        <p class="text-gray-500 text-sm mb-2">${edu.period.start} - ${edu.period.end}</p>
        <p class="text-gray-600 en-lang">${edu.description.en}</p>
        <p class="text-gray-600 id-lang hidden">${edu.description.id}</p>
      </div>
    </div>
  `;

  educationContainer.appendChild(eduElement);
});

// Render projects
const projectsContainer = document.getElementById("projects-container");
projects.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.className =
    "project-card rounded-xl overflow-hidden hover:shadow-lg transition-shadow";

  projectElement.innerHTML = `
          <div class="h-48 overflow-hidden">
            <img 
              src="${project.imageUrl}" 
              alt="${project.title}"
              class="w-full h-full object-cover"
            >
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
            <p class="text-gray-600 mb-4 en-lang">${project.description.en}</p>
            <p class="text-gray-600 mb-4 id-lang hidden">${
              project.description.id
            }</p>
            <div class="flex flex-wrap gap-2">
              ${project.tags
                .map(
                  (tag) =>
                    `<span class="px-2 py-1 bg-gray-100 rounded-full text-xs">${tag}</span>`
                )
                .join("")}
            </div>
          </div>
        `;

  projectsContainer.appendChild(projectElement);
});

// Horizontal scroll with mouse wheel
const projectsScrollContainer = document.querySelector(
  ".projects-scroll-container"
);
let isDown = false;
let startX;
let scrollLeft;

projectsScrollContainer.addEventListener("mousedown", (e) => {
  isDown = true;
  projectsScrollContainer.style.cursor = "grabbing";
  startX = e.pageX - projectsScrollContainer.offsetLeft;
  scrollLeft = projectsScrollContainer.scrollLeft;
});

projectsScrollContainer.addEventListener("mouseleave", () => {
  isDown = false;
  projectsScrollContainer.style.cursor = "grab";
});

projectsScrollContainer.addEventListener("mouseup", () => {
  isDown = false;
  projectsScrollContainer.style.cursor = "grab";
});

projectsScrollContainer.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - projectsScrollContainer.offsetLeft;
  const walk = (x - startX) * 2; //scroll-fast
  projectsScrollContainer.scrollLeft = scrollLeft - walk;
});

// Mouse wheel horizontal scrolling
projectsScrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  projectsScrollContainer.scrollLeft += e.deltaY;
});
