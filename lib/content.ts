export const NAV = [
  { label: "Programs", href: "#programs" },
  { label: "Universities", href: "#partners" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const HIGHLIGHTS = ["Business Administration", "MBBS", "Software Engineering"];

export type MajorIcon =
  | "building"
  | "heart"
  | "pill"
  | "zap"
  | "languages"
  | "settings"
  | "code"
  | "briefcase"
  | "landmark"
  | "stethoscope"
  | "cpu";

export const MAJORS: { name: string; icon: MajorIcon }[] = [
  { name: "Civil Engineering", icon: "building" },
  { name: "MBBS", icon: "heart" },
  { name: "Dental Surgery", icon: "heart" },
  { name: "Pharmacy", icon: "pill" },
  { name: "Electrical Engineering", icon: "zap" },
  { name: "Chinese Language", icon: "languages" },
  { name: "Mechanical Engineering", icon: "settings" },
  { name: "Software Engineering", icon: "code" },
  { name: "Business Administration", icon: "briefcase" },
  { name: "International Trade and Economics", icon: "landmark" },
  { name: "Nursing", icon: "stethoscope" },
  { name: "Computer Science and Technology", icon: "cpu" },
];

export const STEPS = [
  {
    title: "Consultation",
    text: "We guide you in choosing the right major, city, and university that best suit your goals.",
  },
  {
    title: "Scholarships",
    text: "We help students apply to Chinese universities and find the most suitable scholarships available.",
  },
  {
    title: "University Admission",
    text: "We prepare and submit your application and follow it up until you receive your offer.",
  },
  {
    title: "University Dormitory",
    text: "Pre-booking accommodation for the student on the university campus.",
  },
];

export const VALUES = [
  {
    title: "Credibility",
    text: "We provide complete, reliable support to ensure a smooth and stable academic experience in China.",
  },
  {
    title: "Quality",
    text: "We deliver high-quality services that give students access to top Chinese universities.",
  },
  {
    title: "Integrity",
    text: "We build relationships founded on transparency and trust throughout every step of the journey.",
  },
];

export const TEAM = [
  { name: "Dr. Ameen Zubaid", role: "CEO & Founder", img: "/assets/team/IMG_0408.JPG" },
  {
    name: "Aslam Afreedi",
    role: "Marketing Executive & Accountant",
    img: "/assets/team/IMG_0407.JPG",
  },
];

export type ServiceIcon = "headphones" | "file" | "cap" | "filecheck" | "plane" | "message";

export const SERVICES: { icon: ServiceIcon; title: string; text: string }[] = [
  {
    icon: "headphones",
    title: "Consultation & Guidance for Studying in China",
    text: "Personalized academic guidance to choose the right major, city, and university for your career goals.",
  },
  {
    icon: "file",
    title: "Preparing Application Files for Chinese Universities",
    text: "We prepare every required document accurately to support a faster university acceptance.",
  },
  {
    icon: "cap",
    title: "University Admission Support",
    text: "We secure official university admission, scholarship opportunities, and university dorms.",
  },
  {
    icon: "filecheck",
    title: "Preparing the China Visa Application",
    text: "Complete guidance for a correct, confident China visa application.",
  },
  {
    icon: "plane",
    title: "Booking China Flight Ticket & Group Travel Assistance",
    text: "We arrange flights so students heading to the same university can travel together.",
  },
  {
    icon: "message",
    title: "Student Airport Reception & Registration Support",
    text: "Airport welcome, private transfer, campus tour, registration, and housing support.",
  },
];

export const STATS = [
  { value: 550, prefix: "+", suffix: "", label: "Enrolled Students" },
  { value: 100, prefix: "", suffix: "%", label: "University Admission" },
  { value: 90, prefix: "+", suffix: "", label: "Partner Universities" },
  { value: 5000, prefix: "+", suffix: "", label: "Scholarships Available" },
];

export const INSIGHTS = [
  {
    tag: "Guide",
    title: "Top 5 Things Malayali Students Should Know Before Studying in China",
    img: "/assets/insight-1.svg",
    date: "Oct 2026",
  },
  {
    tag: "Scholarships",
    title: "How to Apply for Chinese Government and University Scholarships",
    img: "/assets/insight-2.svg",
    date: "Sep 2026",
  },
  {
    tag: "Visa",
    title: "China X1 Student Visa: Documents Checklist, Step by Step",
    img: "/assets/insight-3.svg",
    date: "Sep 2026",
  },
];

export const FAQ = [
  {
    q: "What are the benefits of studying in China?",
    a: "China offers high-quality education, advanced research facilities, affordable tuition, rich cultural exposure, and scholarship opportunities at internationally recognised universities.",
  },
  {
    q: "Can I study in English in China?",
    a: "Yes. Many Chinese universities offer bachelor's, master's, and doctoral programs taught entirely in English.",
  },
  {
    q: "Do I need to know Chinese before applying?",
    a: "No. Chinese language proficiency is generally not required for English-taught programs. However, learning basic Chinese can help with daily life and cultural integration.",
  },
  {
    q: "How much does it cost to study in China?",
    a: "The cost depends on the university, city, degree program, and scholarship availability. Explore our program listings and filters to compare tuition fees.",
  },
  {
    q: "Can I get a scholarship?",
    a: "Yes. Many universities offer scholarships to eligible international students. Our team can help you explore suitable scholarship opportunities based on your academic profile.",
  },
  {
    q: "How do I apply to study in China through your platform?",
    a: "Browse available programs, select your preferred course, and submit your application. Our team will guide you through documentation, admission, visa, and arrival processes.",
  },
  {
    q: "What documents are required for application?",
    a: "Common requirements include a valid passport, academic certificates, transcripts, a recent photograph, a medical examination form, and a study plan. Requirements may vary by university and program.",
  },
  {
    q: "How long does the application process take?",
    a: "Admission decisions typically take around 10–20 days after a complete application is submitted, depending on the university and program.",
  },
  {
    q: "Is the registration fee refundable?",
    a: "Refund policies depend on the selected service and application stage. Please confirm the applicable terms and conditions with our team before making a payment.",
  },
];

export const SEARCH_SUGGESTIONS = [
  "Computer Science",
  "Computer Science and Technology",
  "Artificial Intelligence",
  "Software Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Business Administration",
  "International Trade and Economics",
  "Pharmacy",
  "MBBS",
  "Bachelor",
  "Master",
  "Northwestern Polytechnical University",
  "Harbin Institute of Technology-Shenzhen",
  "Nanjing Tech University",
  "South China University of Technology",
  "Ocean University of China",
  "China University of Mining and Technology",
  "Nantong University",
  "Nanjing",
  "Shanghai",
  "Beijing",
  "Jiangsu",
];

export const SUCCESS_STORIES = [
  {
    image: "/assets/student-success-profile0.jpeg",
    title: "A new beginning in China",
    description:
      "Celebrating a student’s journey toward a global education and new opportunities.",
    alt: "MandarinMallu student profile and China university promotion",
  },
  {
    image: "/assets/student-admission-success1.jpeg",
    title: "Admission secured",
    description:
      "A proud milestone as a student receives an admission letter for study in China.",
    alt: "Student success story featuring a university admission letter",
  },
  {
    image: "/assets/student-admission-success2.jpeg",
    title: "One step closer to the dream",
    description:
      "Celebrating the visa milestone on the way to an international study experience.",
    alt: "China study visa success announcement",
  },
  {
    image: "/assets/student-admission-success3.jpeg",
    title: "Dreams turning into plans",
    description: "Every document marks progress toward a student’s future in China.",
    alt: "Admission and student documentation success collage",
  },
  {
    image: "/assets/student-admission-success4.jpeg",
    title: "Another milestone achieved",
    description: "Another proud step toward achieving the dream of studying in China.",
    alt: "MandarinMallu student celebrating study abroad success",
  },
];

export const FALLBACK_PARTNERS = [
  { id: "nwpu", name: "Northwestern Polytechnical University", logo: "", count: 25 },
  { id: "hitsz", name: "Harbin Institute of Technology-Shenzhen", logo: "", count: 25 },
  { id: "njtech", name: "Nanjing Tech University", logo: "", count: 17 },
  { id: "scut", name: "South China University of Technology", logo: "", count: 16 },
  { id: "ouc", name: "Ocean University of China", logo: "", count: 14 },
  { id: "cumt", name: "China University of Mining and Technology", logo: "", count: 14 },
  { id: "ntu", name: "Nantong University", logo: "", count: 13 },
];
