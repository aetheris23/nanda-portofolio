// Data for skills
const skills = [
  "Python",
  "HTML",
  "CSS3",
  "JavaScript",
  "PHP",
  "React",
  "Laravel",
  "Node.js",
  "Java",
  "Dart",
  "Flutter",
  "Golang",
  "Tailwind CSS",
  "Bootstrap",
  "Figma",
  "MySql",
  "PostgreSQL",
  "Firebase",
  "Git",
  "Github",
];

// Data for work experience
const experiences = [
  {
    company: "CV. Wahana Sukses Bersama",
    position: {
      en: "Graphic Designer (Internship)",
      id: "Desainer Grafis (Magang)",
    },
    period: {
      start: "Jun 2021",
      end: "Sep 2021",
    },
    description: {
      en: "I have experience designing user interfaces and user experiences using Figma to create intuitive, responsive, and user-centered application layouts. I collaborate with teams to transform requirements into functional designs and ensure a smooth transition from design to implementation. My understanding of UI/UX principles enables me to build applications that are not only visually consistent but also accessible, easy to use, and optimized for a seamless user experience.",
      id: "Saya memiliki pengalaman dalam merancang antarmuka pengguna (UI) dan pengalaman pengguna (UX) menggunakan Figma untuk menciptakan tata letak aplikasi yang intuitif, responsif, dan berpusat pada pengguna. Saya berkolaborasi dengan tim untuk menerjemahkan kebutuhan menjadi desain yang fungsional serta memastikan transisi yang lancar dari tahap desain ke implementasi. Pemahaman saya mengenai prinsip-prinsip UI/UX memungkinkan saya membangun aplikasi yang tidak hanya konsisten secara visual, tetapi juga aksesibel, mudah digunakan, dan dioptimalkan untuk memberikan pengalaman pengguna yang mulus.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753967022/nanda-portofolio/LOGO_WSB_blue_sj737c_mbdjn0.ico",
  },
  {
    company: "CV. Mekar Cutting Digital",
    position: {
      en: "Full-Stack Web Developer (Freelance)",
      id: "Full-Stack Pengembang Web (Freelance)",
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
      en: "Full-Stack Web Developer (Freelance)",
      id: "Full-Stack Pengembang Web (Freelance)",
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
    company: "Freelancer Full-Stack Developer",
    position: {
      en: "Full-Stack Developer",
      id: "Full-Stack Pengembang",
    },
    period: {
      start: "Jun 2021",
      end: "Saat ini",
    },
    description: {
      en: "Experienced in delivering freelance software development projects across web, mobile, and desktop platforms for clients from various industries. Involved throughout the entire software development lifecycle, from requirements gathering and system design to development, testing, deployment, and maintenance. Focused on building scalable, secure, and user-friendly applications while maintaining clear communication and providing technical consultation to ensure project success.",
      id: "Berpengalaman dalam mengerjakan proyek pengembangan perangkat lunak secara lepas (*freelance*) yang mencakup platform web, seluler, dan desktop bagi klien dari berbagai industri. Terlibat dalam seluruh siklus hidup pengembangan perangkat lunak, mulai dari pengumpulan kebutuhan dan perancangan sistem hingga pengembangan, pengujian, penerapan (*deployment*), dan pemeliharaan. Berfokus pada pembuatan aplikasi yang skalabel, aman, dan ramah pengguna, sembari menjaga komunikasi yang jelas serta memberikan konsultasi teknis demi memastikan keberhasilan proyek.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753970103/nanda-portofolio/70766138_qsttsa_yq7fhm.ico",
  },
];

// Data for education
const educations = [
  {
    institution: "Universitas Amikom Purwokerto",
    degree: {
      en: "Information Technology S1",
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

// Data for organization
const organizations = [
  {
    organization: "Forum Asisten",
    period: {
      start: "Sep 2023",
      end: "Saat ini",
    },
    description: {
      en: "**Forum Asisten (FA)** is a student organization under the Laboratory Development and Technology Unit (UPT PLT) at Universitas AMIKOM Purwokerto that supports lecturers in laboratory practical sessions while fostering students' technical and professional development. As a member and later an administrator in the Programming Division, I contributed to technical initiatives, collaborated with fellow members, and helped organize activities that enhanced programming skills and supported the organization's operations.",
      id: "**Forum Asisten (FA)** adalah organisasi mahasiswa di bawah naungan Unit Pengembangan dan Teknologi Laboratorium (UPT PLT) Universitas AMIKOM Purwokerto yang mendukung dosen dalam kegiatan praktikum laboratorium sekaligus membina pengembangan teknis dan profesional mahasiswa. Sebagai anggota dan kemudian pengurus di Divisi Pemrograman, saya berkontribusi dalam berbagai inisiatif teknis, berkolaborasi dengan sesama anggota, serta membantu menyelenggarakan kegiatan yang meningkatkan keterampilan pemrograman dan mendukung operasional organisasi.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1782802674/nanda-portofolio/forum_asisten_obibby.jpg",
  },
  {
    organization: "Desain Grafis",

    period: {
      start: "Jul 2019",
      end: "Jun 2022",
    },
    description: {
      en: "Actively participated in the Graphic Design Division of a student organization at SMKN 1 Purbalingga, contributing to the creation of visual materials for school events, publications, and promotional activities. Collaborated with team members to develop creative designs, maintain consistent visual communication, and support the organization's programs through effective graphic design solutions.",
      id: "Berpartisipasi aktif dalam Divisi Desain Grafis organisasi siswa di SMKN 1 Purbalingga, serta berkontribusi dalam pembuatan materi visual untuk acara sekolah, publikasi, dan kegiatan promosi. Bekerja sama dengan anggota tim untuk mengembangkan desain kreatif, menjaga konsistensi komunikasi visual, dan mendukung program organisasi melalui solusi desain grafis yang efektif.",
    },
    logo: "https://res.cloudinary.com/dnmkw2715/image/upload/v1753975926/nanda-portofolio/Logo_SMK_Negeri_1_Purbalingga_iheifs.png",
  },
];

// Data for projects
const projects = [
  {
    title: "Website SD QITA (Sekolah Dasar Qaryah Thayyibah)",
    description: {
      en: "Qita Elementary School (sdqita.sch.id) is a child-friendly and inclusive Islamic elementary school that combines the national curriculum with the thematic Creative Curriculum. Its official website provides comprehensive information on its vision and mission, registration, special needs programs, and activities to develop students' academics, character, and independence within a supportive Islamic environment.",
      id: "SD Qita (sdqita.sch.id) adalah sekolah dasar Islam ramah anak dan inklusif yang menggabungkan kurikulum nasional dengan Creative Curriculum tematik. Situs resminya menyajikan info lengkap tentang visi misi, pendaftaran, program ABK, dan kegiatan pengembangan akademik, karakter, serta kemandirian siswa dalam lingkungan islami yang suportif.",
    },
    imageUrl:
      "https://res.cloudinary.com/dnmkw2715/image/upload/v1753976698/nanda-portofolio/sdqita_qcqwqo.png",
    tags: [
      "Laravel",
      "Node.js",
      "MySql",
      "React.js",
      "Tailwind CSS",
      "Inertia.js",
      "Cloudinary",
    ],
    links: "https://sdqita.sch.id/",
  },
  {
    title: "Website Samase",
    description: {
      en: "This freelance website development project is for Sukses Global Mandiri, a company specializing in herbal medicines. This website was created for their flagship product, Fillah Samase (samase.id), which focuses on holistic solutions for stomach and digestive health.",
      id: "Proyek freelance pembuatan website untuk Sukses Global Mandiri, perusahaan yang bergerak di bidang obat-obatan herbal. Website ini dibuat untuk produk unggulan mereka, Fillah Samase (samase.id), yang fokus pada solusi holistik untuk kesehatan lambung dan pencernaan.",
    },
    imageUrl:
      "https://res.cloudinary.com/dnmkw2715/image/upload/v1754062667/nanda-portofolio/20240722669dbcb1c7d13_d7wsao.jpg",
    tags: [
      "Laravel",
      "Node.js",
      "React.js",
      "Tailwind CSS",
      "Inertia.js",
      "Cloudinary",
    ],
    links: "https://samase.id/",
  },
  {
    title: "Website Bima Helm",
    description: {
      en: "One of the team's projects during their freelance work at CV. Mekar Cutting Digital was the creation of the website for Bima Helm (bimahelm.com), a leading motorcycle helmet and accessories store in Purbalingga, Central Java. This website serves as an e-commerce portfolio for showcasing and selling various products such as helmets, face shields, raincoats, and other accessories.",
      id: "Salah satu proyek tim selama freelance di CV. Mekar Cutting Digital adalah pembuatan website Bima Helm (bimahelm.com), toko helm dan aksesoris motor terkemuka di Purbalingga, Jawa Tengah. Website ini berfungsi sebagai e-commerce portofolio untuk menampilkan dan menjual berbagai produk seperti helm, faceshield, jas hujan, dan aksesoris lainnya.",
    },
    imageUrl:
      "https://res.cloudinary.com/dnmkw2715/image/upload/v1754062119/nanda-portofolio/bimahelm_elnswl_r4t7ma.png",
    tags: ["Laravel", "Node.js", "Tailwind CSS", "Cloudinary"],
    links: "https://bimahelm.com/",
  },
  {
    title: "Website Mekar Laser",
    description: {
      en: "A company profile website development project for CV. Mekar Cutting Digital, an advertising and digital marketing company in Purbalingga with over 5 years of experience. The website includes common features such as a Homepage, About Us, and Portfolio. Built using Laravel, Bootstrap, JavaScript, AOS.js, and other supporting technologies.",
      id: "Proyek pembuatan website company profile untuk CV. Mekar Cutting Digital, perusahaan advertising dan digital marketing di Purbalingga dengan pengalaman lebih dari 5 tahun. Website mencakup fitur umum seperti Beranda, Tentang Kami, dan Portofolio. Dibangun menggunakan Laravel, Bootstrap, JavaScript, AOS.js, dan teknologi pendukung lainnya.",
    },
    imageUrl:
      "https://res.cloudinary.com/dnmkw2715/image/upload/v1754062118/nanda-portofolio/akrilik_k3qlg8_oq2q3l.png",
    tags: ["Laravel", "AOS.js", "Javascript", "Bootstrap", "Cloudinary"],
    links: "https://mekarlaser.com/",
  },
  {
    title: "Website Smega Mart",
    description: {
      en: "A project by the Smega Mart website development team (newsmegamart.com), a retail store owned by SMKN 1 Purbalingga. This website is an e-commerce platform integrated with a cashier system. It was built using Laravel, React.js, Tailwind CSS, AOS.js, and other technologies.",
      id: "Proyek tim pembuatan website Smega Mart (newsmegamart.com), toko retail milik SMKN 1 Purbalingga. Website ini merupakan platform e-commerce yang terintegrasi dengan sistem kasir. Dibangun menggunakan Laravel, React.js, Tailwind CSS, AOS.js, dan teknologi lainnya.",
    },
    imageUrl:
      "https://res.cloudinary.com/dnmkw2715/image/upload/v1754062119/nanda-portofolio/smegamart_dtvtkr_ebsxek.png",
    tags: ["Laravel", "AOS.js", "React.js", "Tailwind CSS", "Cloudinary"],
    links: "https://newsmegamart.com/",
  },
  {
    title: "Website Bina Cipta",
    description: {
      en: "A web store and company profile project for Bina Cipta, a wig buying and selling company. The website was built using Laravel 8, PHP 7.4, Tailwind CSS, and JavaScript. It features an admin login feature and a CRUD system for content management, along with various other functional features.",
      id: "Proyek pembuatan web store sekaligus company profile untuk Bina Cipta, perusahaan jual beli rambut palsu. Website dibangun menggunakan Laravel 8, PHP 7.4, Tailwind CSS, dan JavaScript. Terdapat fitur login admin serta sistem CRUD untuk mengelola konten, ditambah berbagai fitur fungsional lainnya.",
    },
    imageUrl:
      "https://res.cloudinary.com/dnmkw2715/image/upload/v1754062119/nanda-portofolio/Screenshot_92_q7dy8a_b5ksan_k0bqzj.png",
    tags: ["Laravel", "AOS.js", "Javascript", "Bootstrap", "Cloudinary"],
    links: "https://binacipta.com/",
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
  { threshold: 0.1 },
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

// Render organizations
const organizationContainer = document.getElementById("organization-container");
organizations.forEach((orga) => {
  const orgaElement = document.createElement("div");
  orgaElement.className = "organization-card";

  orgaElement.innerHTML = `
    <div class="flex items-start gap-4">
      <img src="${orga.logo}" alt="${orga.organization}" class="education-logo">
      <div>
        <h3 class="text-lg font-bold">${orga.organization}</h3>
        <p class="text-gray-500 text-sm mb-2">${orga.period.start} - ${orga.period.end}</p>
        <p class="text-gray-600 en-lang">${orga.description.en}</p>
        <p class="text-gray-600 id-lang hidden">${orga.description.id}</p>
      </div>
    </div>
  `;

  organizationContainer.appendChild(orgaElement);
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
            <p class="mb-4"><a href="${project.links}" class="text-blue-600" target="_blank">${project.links}</a></p>
            <div class="flex flex-wrap gap-2">
              ${project.tags
                .map(
                  (tag) =>
                    `<span class="px-2 py-1 bg-gray-100 rounded-full text-xs">${tag}</span>`,
                )
                .join("")}
            </div>
          </div>
        `;

  projectsContainer.appendChild(projectElement);
});

// Horizontal scroll with mouse wheel
const projectsScrollContainer = document.querySelector(
  ".projects-scroll-container",
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

document.getElementById("downloadCvEn").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/pdf/cv-tresnanda-agsifa-english.pdf";
  link.target = "_blank";
  link.download = "Tresnanda-Agsifa-CV-English.pdf";
  link.click();
});

document.getElementById("downloadCvId").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "/pdf/cv-tresnanda-agsifa-indonesia.pdf";
  link.target = "_blank";
  link.download = "Tresnanda-Agsifa-CV-Indonesia.pdf";
  link.click();
});

document.getElementById("emailMe").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "mailto:tresnanda56@gmail.com";
  link.target = "_blank";
  link.click();
});

document.getElementById("emailSaya").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "mailto:tresnanda56@gmail.com";
  link.target = "_blank";
  link.click();
});

document.getElementById("linkedinMe").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://linkedin.com/in/tresnanda23";
  link.target = "_blank";
  link.click();
});

document.getElementById("linkedinSaya").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://linkedin.com/in/tresnanda23";
  link.target = "_blank";
  link.click();
});

document.getElementById("githubMe").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://github.com/aetheris23";
  link.target = "_blank";
  link.click();
});

document.getElementById("githubSaya").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://github.com/aetheris23";
  link.target = "_blank";
  link.click();
});

document.getElementById("waMe").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://wa.me/6287821931730";
  link.target = "_blank";
  link.click();
});

document.getElementById("waSaya").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "https://wa.me/6287821931730";
  link.target = "_blank";
  link.click();
});
