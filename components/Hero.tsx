import React, { useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import CountUp from "react-countup";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// Icons
import ReactIcon from "./icons/ReactIcon";
import TailwindIcon from "./icons/TailwindIcon";
import NextJSIcon from "./icons/NextJSIcon";
import NodeJSIcon from "./icons/NodeJSIcon";
import AWSIcon from "./icons/AWSIcon";
import FigmaIcon from "./icons/FigmaIcon";
import WordPressIcon from "./icons/WordPressIcon";
import CanvaIcon from "./icons/CanvaIcon";
import DesktopIcon from "./icons/DesktopIcon";
import LayersIcon from "./icons/LayersIcon";
import SupportIcon from "./icons/SupportIcon";
import SparklesIcon from './icons/SparklesIcon';
import CollaborationIcon from './icons/CollaborationIcon';
import BuildIcon from './icons/BuildIcon';
import { CheckCircleIcon } from "lucide-react";

// Tech stack
const techStack = [
  { icon: ReactIcon, name: "ReactJS" },
  { icon: NextJSIcon, name: "NextJS" },
  { icon: TailwindIcon, name: "TailwindCSS" },
  { icon: NodeJSIcon, name: "NodeJS" },
  { icon: AWSIcon, name: "AWS Cloud" },
  { icon: FigmaIcon, name: "Figma" },
  { icon: WordPressIcon, name: "WordPress" },
  { icon: CanvaIcon, name: "Canva" },

  // 🆕 Added Tech Stack items
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={className}
      >
        <path d="M12 2C6.48 2 2 6.48 2 12c0 3.88 2.42 7.2 5.82 8.65-.08-.69-.13-1.76.03-2.52.14-.65.92-4.12.92-4.12s-.23-.46-.23-1.13c0-1.06.62-1.86 1.39-1.86.66 0 .98.5.98 1.1 0 .67-.43 1.68-.65 2.61-.19.81.4 1.48 1.19 1.48 1.43 0 2.52-1.51 2.52-3.68 0-1.93-1.39-3.28-3.38-3.28-2.3 0-3.65 1.73-3.65 3.52 0 .7.27 1.45.61 1.86.07.08.08.15.06.23-.06.25-.19.81-.22.93-.03.1-.11.13-.25.08-1-.38-1.62-1.58-1.62-2.55 0-2.07 1.5-3.97 4.34-3.97 2.28 0 4.05 1.63 4.05 3.8 0 2.27-1.43 4.1-3.41 4.1-.67 0-1.3-.35-1.52-.76l-.41 1.57c-.15.6-.57 1.36-.85 1.82.63.19 1.3.3 2 .3 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
      </svg>
    ),
    name: "React Native",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={className}
      >
        <path d="M12 0C5.373 0 0 3.582 0 8c0 1.656 1.086 3.157 2.884 4.365C1.089 13.005 0 14.45 0 16c0 4.418 5.373 8 12 8s12-3.582 12-8c0-1.55-1.089-2.995-2.884-3.635C22.914 11.157 24 9.656 24 8c0-4.418-5.373-8-12-8z" />
      </svg>
    ),
    name: "Java",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={className}
      >
        <path d="M12 0C8.686 0 6 2.686 6 6v12c0 3.314 2.686 6 6 6s6-2.686 6-6V6c0-3.314-2.686-6-6-6zM8 6a4 4 0 1 1 8 0v12a4 4 0 1 1-8 0V6z" />
      </svg>
    ),
    name: "Spring Boot",
  },
  {
    icon: ({ className }: { className?: string }) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className={className}
      >
        <path d="M4 4h16v2H4zm0 4h10v2H4zm0 4h16v2H4zm0 4h10v2H4z" />
      </svg>
    ),
    name: "Third-Party API Integration",
  },
  
];


const whyChooseUs = [
    {
      icon: SparklesIcon,
      title: "AI-Powered Efficiency",
      desc: "We leverage cutting-edge AI to accelerate development, delivering smarter solutions faster than ever before.",
    },
    {
      icon: CollaborationIcon,
      title: "Transparent Process",
      desc: "Our process is built on clear communication and collaboration, ensuring you're a partner in the project's success.",
    },
    {
      icon: BuildIcon,
      title: "Future-Proof Technology",
      desc: "We use modern, scalable technologies to build websites and applications that are ready for tomorrow's challenges.",
    },
    {
      icon: CheckCircleIcon,
      title: "Client-Centric Approach",
      desc: "Your business goals are our top priority. We focus on delivering results that make a real impact.",
    },
];

const HomePage: React.FC<{ setActiveRoute: (route: string) => void }> = ({
  setActiveRoute,
}) => {
  const heroRef = useRef<HTMLDivElement>(null);

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setActiveRoute(href.slice(1));
  };

  return (
    <>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center bg-indigo-950/90 overflow-hidden py-12"
      >
        <div className="container max-w-7xl mx-auto px-6">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-12 pt-20 md:pt-16">
              
              {/* Left Side: Heading + Paragraph + Button */}
              <AnimatedSection className="w-full md:w-1/2 lg:w-3/5">
                <div className="relative z-10 text-center md:text-left">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 md:mb-6 leading-tight">
                    Transforming Ideas into{" "}
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-400 text-transparent bg-clip-text animate-[gradient-pan_4s_ease-in-out_infinite]">
                      Digital Reality
                    </span>
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-zinc-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
                    We deliver top-quality <span className="text-white font-semibold">Web</span> and{" "}
                    <span className="text-white font-semibold">App Development</span> solutions, powered by innovation and our{" "}
                    <span className="text-indigo-400 font-medium">AI-driven vision</span>, helping your business grow smarter and faster.
                  </p>
                  <a
                    href="#/contact"
                    onClick={(e) => handleNavClick(e, "#/contact")}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 sm:py-3 md:py-4 px-8 sm:px-8 md:px-10 rounded-lg shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105 inline-block text-sm sm:text-base"
                  >
                    Get Your Project Started
                  </a>
                </div>
              </AnimatedSection>

              {/* Right Side: Image */}
              <AnimatedSection delay="delay-400" className="w-full md:w-1/2 lg:w-2/5 flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-all duration-500">
                    <img
                      src="https://www.pngplay.com/wp-content/uploads/5/Graphic-Web-Design-Vector-PNG.png"
                      alt="Web and App Development"
                      className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/10 to-transparent rounded-2xl blur-2xl pointer-events-none"></div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
        </div>
      </section>


      {/* OUR CORE FEATURES */}
      <section className="relative py-24 bg-zinc-900 text-white overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Core Features</h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto">
            We provide a complete suite of services to power your online growth.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Web Design",
                desc: "Beautiful user-centric layouts that boost conversions.",
                img: "https://5.imimg.com/data5/SELLER/Default/2024/6/428618412/UG/XU/MZ/130879460/website-landing-page-design.jpeg",
              },
              {
                title: "Web Development",
                desc: "Powerful, fast and scalable web apps using modern stacks.",
                img: "https://www.creative-tim.com/blog/content/images/2022/01/which-development-job-is-right-for-you.jpg",
              },
              {
                title: "24×7 Support",
                desc: "Dedicated team always available via phone, chat, or email.",
                img: "https://www.helpshift.com/wp-content/uploads/2024/05/Omni-channel-Home.png",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-indigo-500/40 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/30 transition-all duration-300"
              >
                <img
                  src={f.img}
                  alt={f.title}
                  className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                  <p className="text-zinc-400">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SAINETIX ADVANTAGE */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://cdn.dribbble.com/users/2064699/screenshots/14544318/media/3ef49f6d5a503eb147acb67b662dd0b0.png')] bg-cover bg-center" />
        <div className="container max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Sainetix Advantage</h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto">
            Blending AI precision with human creativity.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: DesktopIcon,
                title: "AI Integration",
                desc: "Automation and smart systems that save time.",
              },
              {
                icon: FigmaIcon,
                title: "Pixel-Perfect Design",
                desc: "Every element crafted with detail and emotion.",
              },
              {
                icon: LayersIcon,
                title: "Scalable Architecture",
                desc: "Grow your business on solid foundations.",
              },
              {
                icon: SupportIcon,
                title: "Dedicated Support",
                desc: "Always there when you need help or improvements.",
              },
            ].map((adv, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 rounded-2xl border border-indigo-500/40 hover:border-indigo-400 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-indigo-900/30"
              >
                <adv.icon className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{adv.title}</h3>
                <p className="text-zinc-400">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR WEB SOLUTIONS */}
      <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Web Solutions</h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto">
            From startups to enterprises, we deliver scalable web experiences.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Business Websites",
                desc: "Showcase your brand with a modern, high-converting site.",
                img: "https://colorlib.com/wp/wp-content/uploads/sites/2/consultingbiz-free-template.jpeg",
              },
              {
                title: "E-commerce Platforms",
                desc: "Sell online with secure and lightning-fast stores.",
                img: "https://www.addwebsolution.com/wp-content/uploads/2024/03/building-an-ecommerce-website-cost.png",
              },
              {
                title: "School Management Systems",
                desc: "Automate student, fee, and result management.",
                img: "https://5.imimg.com/data5/SELLER/Default/2024/12/471870325/RF/XG/BG/159233823/school-management-website-development-500x500.png",
              },
              {
                title: "Portfolio Websites",
                desc: "Present your work beautifully with responsive design.",
                img: "https://themewagon.com/wp-content/uploads/2025/08/Picto.webp",
              },
              {
                title: "AI-Powered Apps",
                desc: "Integrate automation, chatbots, and analytics.",
                img: "https://www.addevice.io/storage/ckeditor/uploads/images/64d0d134548fa_building.ai.powered.chatbots.1920.1080.1.png",
              },
              {
                title: "Custom Web Solutions",
                desc: "Tailored applications built for your goals.",
                img: "https://www.bu.edu/lernet/artemis/years/2020/projects/FinalPresentations/HTML/webdesign.jpg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-indigo-500/40 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/30 transition-all duration-300"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition-all"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-zinc-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-24 bg-indigo-900 text-white">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Tech Stack We Use</h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto">
            Industry-leading tools and frameworks for top-notch performance.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-xl border border-indigo-500/50 hover:border-indigo-400 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-900/20 transition-all"
              >
                <tech.icon className="w-12 h-12 text-indigo-400 mb-4" />
                <p className="text-white font-semibold">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR SUCCESS STORIES */}
      <section className="py-24 bg-zinc-800 text-white relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Success Stories</h2>
          <p className="text-lg text-zinc-400 mb-16">Real results for real businesses.</p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Retail E-commerce Boost",
                result: 100,
                metric: "% Increase in Sales",
                desc: "We built a lightning-fast eCommerce store using Next.js and Node.js that boosted conversions by 180%.",
                img: "https://digitology.co/wp-content/uploads/2023/03/e-commerce-wb.png",
              },
              {
                title: "School ERP Automation",
                result: 97,
                metric: "Schools Onboarded",
                desc: "Our School Management ERP automated student, fee, and results for 400+ institutes.",
                img: "https://www.skoolbeep.com/blog/wp-content/uploads/2021/01/SCHOOL-ERP-MODULES.png",
              },
              {
                title: "Portfolio Builder SaaS",
                result: 5000,
                metric: "+ Active Users",
                desc: "Developed a SaaS platform for creators to design and host portfolios — now used by 5K+ professionals.",
                img: "https://cdn.prod.website-files.com/62c5836076839ad95e36215d/64fb2b64316862df3d2e099a_rcQYosTUaQ6hiJSAk7JphBXJCcZpPSAnq6u8U_3pnj0UVcHM5niGdGNBZ625bnZmRDTg4UQFOjd8tuczIfNSZ7JQeRBtnY4NHvGyGjRBe_DVE4QiDsVy9vcllRT7B1Ut7wx9CBDr945F26Um1hF4xM4.png",
              },
            ].map((cs, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-indigo-500/40 rounded-2xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-900/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cs.img}
                    alt={cs.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70"></div>
                  <div className="absolute bottom-4 left-4 text-left">
                    <h3 className="text-lg font-semibold text-white">{cs.title}</h3>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <p className="text-indigo-400 text-3xl font-bold mb-2">
                    <CountUp end={cs.result} duration={2} /> {cs.metric}
                  </p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{cs.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE SAINETIX */}
      <section className="py-24 bg-purple-950 text-white">
        <div className="container max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Sainetix</h2>
          <p className="text-lg text-zinc-400 mb-12 max-w-3xl mx-auto">
            We're more than just developers; we're your dedicated partners in digital innovation and success.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white/5 rounded-2xl border border-purple-500/40 hover:border-purple-400 transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-purple-900/30"
              >
                <item.icon className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-zinc-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
