import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Github,
} from 'lucide-react';

export const navLinks = [
  {
    label: 'Home',
    url: '/',
  },
  {
    label: 'About',
    url: '/about',
  },
  {
    label: 'Portfolio',
    url: '/portfolio',
  },
  {
    label: 'Contact',
    url: '/contact',
  },
];
export const skills = [
  {
    id: 1,
    name: 'Desarrollo Front-end',
    description:
      'Competencia en codificar los aspectos visuales de los sitios web usando HTML, CSS y JavaScript para garantizar una interfaz de usuario atractiva y sin interrupciones.',
    icon: '/icons/service-1.svg',
  },
  {
    id: 2,
    name: 'Desarrollo de Interfaz de Usuario - UI',
    description:
      'Capacidad para crear interfaces visualmente atractivas y fáciles de usar mediante código para mejorar el compromiso e interacción del usuario.',
    icon: '/icons/service-2.svg',
  },
  {
    id: 3,
    name: 'Desarrollo de Experiencia de Usuario - UX',
    description:
      'Comprensión del comportamiento del usuario y principios de experiencia aplicados a través de la codificación para crear interacciones de usuario fluidas y satisfactorias.',
    icon: '/icons/service-3.svg',
  },
  {
    id: 4,
    name: 'Desarrollo Web Responsive',
    description:
      'Capacidad para desarrollar sitios web que se adaptan y funcionan perfectamente en diversos dispositivos y tamaños de pantalla mediante técnicas de codificación.',
    icon: '/icons/service-4.svg',
  },
  {
    id: 5,
    name: 'Prototipado y Pruebas de Desarrollo',
    description:
      'Habilidad para codificar prototipos y realizar pruebas exhaustivas para visualizar y perfeccionar las funcionalidades del sitio web.',
    icon: '/icons/service-5.svg',
  },
  {
    id: 6,
    name: 'Codificación Compatible con Móviles',
    description:
      'Competencia en prácticas de codificación que aseguran que los sitios web funcionen sin problemas en dispositivos móviles.',
    icon: '/icons/service-6.svg',
  },
];
export const benefits = [
  {
    id: 1,
    name: 'Customized Development Aligned with Your Brand',
    description:
      "I recognize the importance of translating your brand identity into a unique website. By closely collaborating with you, I ensure that your website embodies your brand's personality, values, and objectives. The result is a custom-developed platform that distinguishes you from competitors and resonates with your target audience.",
  },
  {
    id: 2,
    name: 'Creative Coding for Visitor Engagement',
    description:
      "With a strong sense of aesthetics and a creative drive, I specialize in coding visually stunning and engaging websites. By integrating elegant code structures, interactive elements, and strategic design principles, I craft an immersive and impactful user experience. Your website will captivate visitors, enhancing your brand's credibility and professionalism.",
  },
  {
    id: 3,
    name: 'User-Centric Development for Enhanced Experience',
    description:
      'I prioritize user experience (UX) development, focusing on your visitors throughout the coding process. Through extensive research and user testing methodologies, I ensure that your website is intuitive, easy to navigate, and guides users effectively. The outcome is a gratifying user journey that boosts engagement and conversions.',
  },
  {
    id: 4,
    name: 'Mobile-Optimized Coding for Widespread Accessibility',
    description:
      "In today's mobile-driven landscape, a responsive website is essential. I specialize in coding mobile-friendly designs that seamlessly adapt to various devices and screen sizes. Your website will maintain its appearance and functionality across desktops, smartphones, and tablets, allowing you to reach and engage your audience effectively.",
  },
  {
    id: 5,
    name: 'Proficiency in Advanced Coding Technologies',
    description:
      'With expertise in HTML, CSS, JavaScript, and cutting-edge front-end technologies, I possess the technical prowess to execute your design concepts. From seamless animations to interactive features, I leverage the latest coding technologies to elevate user engagement and deliver a dynamic user experience.',
  },
];
export const portfolios = [
  {
    id: 1,
    title: 'Z - Aura Perfume Website',
    link: '#',
    images: [
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
      '/images/portfolio-3.png',
    ],
  },
  {
    id: 2,
    title: 'Forhelp Charity Website',
    link: '#',
    images: [
      '/images/portfolio-2.png',
      '/images/portfolio-3.png',
      '/images/portfolio-1.png',
    ],
  },
  {
    id: 3,
    title: 'Skill Bridge Website',
    link: '#',
    images: [
      '/images/portfolio-3.png',
      '/images/portfolio-1.png',
      '/images/portfolio-2.png',
    ],
  },
  {
    id: 4,
    title: 'Current Vandi Website',
    link: '#',
    images: [
      '/images/portfolio-4.png',
      '/images/portfolio-5.png',
      '/images/portfolio-6.png',
    ],
  },
  {
    id: 5,
    title: 'Fit Fusion Gym Website',
    link: '#',
    images: [
      '/images/portfolio-5.png',
      '/images/portfolio-6.png',
      '/images/portfolio-7.png',
    ],
  },
  {
    id: 6,
    title: 'DX Digital Agency Website',
    link: '#',
    images: [
      '/images/portfolio-6.png',
      '/images/portfolio-7.png',
      '/images/portfolio-8.png',
    ],
  },
  {
    id: 7,
    title: 'Little Learners Website',
    link: '#',
    images: [
      '/images/portfolio-7.png',
      '/images/portfolio-8.png',
      '/images/portfolio-9.png',
    ],
  },
  {
    id: 8,
    title: 'StreamVibe Website',
    link: '#',
    images: [
      '/images/portfolio-8.png',
      '/images/portfolio-9.png',
      '/images/portfolio-4.png',
    ],
  },
  {
    id: 9,
    title: 'YourBank Website',
    link: '#',
    images: [
      '/images/portfolio-9.png',
      '/images/portfolio-4.png',
      '/images/portfolio-5.png',
    ],
  },
];
export const reviews = [
  {
    id: 1,
    name: 'Sarah Thompson',
    designation: 'CEO Texo',
    review:
      'Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.',
    stars: 5,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: '#',
      },
      {
        id: 2,
        icon: Linkedin,
        url: '#',
      },
      {
        id: 3,
        icon: Twitter,
        url: '#',
      },
    ],
  },
  {
    id: 2,
    name: 'Emily Roberts',
    designation: 'CEO Texo',
    review:
      'Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.',
    stars: 3,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: '#',
      },
      {
        id: 2,
        icon: Linkedin,
        url: '#',
      },
      {
        id: 3,
        icon: Twitter,
        url: '#',
      },
    ],
  },
  {
    id: 3,
    name: 'Emily Roberts',
    designation: 'CEO Texo',
    review:
      'Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.',
    stars: 5,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: '#',
      },
      {
        id: 2,
        icon: Linkedin,
        url: '#',
      },
      {
        id: 3,
        icon: Twitter,
        url: '#',
      },
    ],
  },
  {
    id: 4,
    name: 'Emily Roberts',
    designation: 'CEO Texo',
    review:
      'Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.',
    stars: 4,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: '#',
      },
      {
        id: 2,
        icon: Linkedin,
        url: '#',
      },
      {
        id: 3,
        icon: Twitter,
        url: '#',
      },
    ],
  },
  {
    id: 5,
    name: 'Emily Roberts',
    designation: 'CEO Texo',
    review:
      'Waseem Anjum is an incredibly talented web develioper. His attention to detail and creative flair are unmatched. He took my website from ordinary to extraordinary, capturing the essence of my brand perfectly. Working with Waseem was a breeze, as he listened to my needs and provided expert guidance throughout the design process. I highly recommend Waseem for anyone looking to elevate their online presence.',
    stars: 4,
    socialLinks: [
      {
        id: 1,
        icon: Facebook,
        url: '#',
      },
      {
        id: 2,
        icon: Linkedin,
        url: '#',
      },
      {
        id: 3,
        icon: Twitter,
        url: '#',
      },
    ],
  },
];
export const faqs = [
  {
    id: 1,
    question: 'Can you work with clients remotely?',
    answer:
      'Absolutely! I have experience working with clients from all around the world. Through effective communication channels such as email, video calls, and project management tools, I ensure seamless collaboration regardless of geographical location.',
  },
  {
    id: 2,
    question: 'Do you offer website maintenance services?',
    answer:
      'Yes, I offer website maintenance services. I will ensure that your website is up-to-date and running smoothly.',
  },
  {
    id: 3,
    question: 'Do you offer website maintenance services?',
    answer:
      'Yes, I offer website maintenance services. I will ensure that your website is up-to-date and running smoothly.',
  },
  {
    id: 4,
    question: 'Do you offer website maintenance services?',
    answer:
      'Yes, I offer website maintenance services. I will ensure that your website is up-to-date and running smoothly.',
  },
  {
    id: 5,
    question: 'Do you offer website maintenance services?',
    answer:
      'Yes, I offer website maintenance services. I will ensure that your website is up-to-date and running smoothly.',
  },
];
export const socialLinks = [
  {
    id: 1,
    label: 'Github',
    icon: Github,
    url: 'https://github.com/m4lucen4',
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: Linkedin,
    url: '#',
  },
];
export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: '+34 637 005 693',
  },
  {
    id: 2,
    icon: Mail,
    text: 'hi@malucena.dev',
  },
  {
    id: 3,
    icon: MapPin,
    text: 'Sevilla, España',
  },
];
export const timeline = [
  {
    id: 1,
    title: 'Senior Web Developer',
    duration: '2018 - Present',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    id: 2,
    title: 'Web Developer',
    duration: '2015 - 2018',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    duration: '2013 - 2015',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
  {
    id: 4,
    title: 'Degree in Computer Science',
    duration: '2010 - 2013',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  },
];
