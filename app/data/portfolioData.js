export const portfolioData = {
  hero: {
    name: "Brian Ochieng'",
    title: "Python Developer and Cybersecurity Engineer",
    description: "Passionate about creating innovative ways to get your money out of your pockets into mine.",
    image: "/brian.jpg",
  },
  about: {
    description: "I am a dedicated python developer with experience in modern technologies. I also specialise in CyberSecurity",
    skills: ["JavaScript", "React", "Next.js", "Node.js", "Python", "MongoDB"],
  },
  projects: [ //add actual projects and their links, and do i have to host projects first to provide their link??? 
    {
      id: 1,
      title: "HotSpot Cyber",
      description: "A full-stack e-commerce site built with Next.js and Stripe.",
      image: "/projects/hotspot.jpg",
      link: "https://hot-spot-cyber.vercel.app",
    },
    {
      id: 2,
      title: "Besa E-commerce App",
      description: "A React-based task manager with real-time updates.",
      image: "/projects/besa.jpg",
      link: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "This dynamic portfolio built with Next.js.",
      image: "/projects/median.jpg",
      link: "#",
    },
  ],
  skills: [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 80 },
    { name: "Node.js", level: 50 },
    { name: "Python", level: 60 },
    { name: "MongoDB", level: 85 },
    { name: "C", level: 70},
  ],
  contact: {
    email: "buraochibo@gmail.com",
    linkedin: "https://www.linkedin.com/in/bura-chibo-b2253232a?trk=contact-info",
    github: "https://github.com/cod3-dev",
  },
};
