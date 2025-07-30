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
  "CorelDraw",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Clip Studio Paint"
];

// Data for work experience
const experiences = [
  {
    company: "Tech Solutions Inc.",
    position: {
      en: "Senior Full Stack Developer",
      id: "Pengembang Full Stack Senior",
    },
    period: {
      start: "Jan 2022",
      end: "Present",
    },
    description: {
      en: "Led a team of 5 developers to build scalable web applications. Implemented CI/CD pipelines and improved deployment processes.",
      id: "Memimpin tim 5 pengembang untuk membangun aplikasi web yang scalable. Menerapkan pipeline CI/CD dan meningkatkan proses deployment.",
    },
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    company: "Digital Innovations Ltd.",
    position: {
      en: "Frontend Developer",
      id: "Pengembang Frontend",
    },
    period: {
      start: "Mar 2020",
      end: "Dec 2021",
    },
    description: {
      en: "Developed responsive user interfaces using React and Redux. Collaborated with UX designers to implement pixel-perfect designs.",
      id: "Mengembangkan antarmuka pengguna responsif menggunakan React dan Redux. Berkolaborasi dengan desainer UX untuk mengimplementasikan desain pixel-perfect.",
    },
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
  {
    company: "WebCraft Studio",
    position: {
      en: "Junior Web Developer",
      id: "Pengembang Web Junior",
    },
    period: {
      start: "Jun 2018",
      end: "Feb 2020",
    },
    description: {
      en: "Built and maintained client websites using WordPress and custom HTML/CSS/JavaScript solutions.",
      id: "Membangun dan memelihara website klien menggunakan WordPress dan solusi HTML/CSS/JavaScript kustom.",
    },
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
];

// Data for education
const educations = [
  {
    institution: "University of Technology",
    degree: {
      en: "Master of Computer Science",
      id: "Magister Ilmu Komputer",
    },
    period: {
      start: "Sep 2016",
      end: "May 2018",
    },
    description: {
      en: "Specialized in Artificial Intelligence and Web Technologies. Thesis on Machine Learning applications in web development.",
      id: "Spesialisasi dalam Kecerdasan Buatan dan Teknologi Web. Tesis tentang aplikasi Machine Learning dalam pengembangan web.",
    },
    logo: "https://images.unsplash.com/photo-1541178735493-479c1a27ed24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80",
  },
  {
    institution: "State University",
    degree: {
      en: "Bachelor of Software Engineering",
      id: "Sarjana Teknik Perangkat Lunak",
    },
    period: {
      start: "Aug 2012",
      end: "Jun 2016",
    },
    description: {
      en: "Graduated with honors. Active in student organizations and programming competitions.",
      id: "Lulus dengan pujian. Aktif dalam organisasi mahasiswa dan kompetisi pemrograman.",
    },
    logo: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
  },
];

// Data for projects
const projects = [
  {
    title: "E-commerce Platform",
    description: {
      en: "A modern e-commerce platform with React and Node.js",
      id: "Platform e-commerce modern dengan React dan Node.js",
    },
    imageUrl:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
    tags: ["React", "Node.js", "MongoDB", "Redux"],
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
