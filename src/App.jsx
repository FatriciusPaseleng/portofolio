import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import CircularGallery from "./components/CircularGallery/CircularGallery";
// import Lanyard from "./components/Lanyard/Lanyard";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import Folder from "./components/Folder/Folder";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const aboutRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // AOS hanya sekali jalan
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // Reset URL saat reload
  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  // Intersection Observer untuk About
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Background Aurora */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#FF7E5F", "#FEB47B", "#9B5DE5"]}
          blend={0.7}
          amplitude={1.2}
          speed={0.6}
        />
      </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Hero Section */}
        <div className="hero grid md:grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-wide text-center 
              whitespace-normal md:whitespace-nowrap leading-tight">
              <ShinyText
                text="Fatricius Paseleng"
                disabled={false}
                speed={3}
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 
                  bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] animate-pulse"
              />
            </h1>
            <BlurText
              text="A passionate student with skills in UI/UX development and digital marketing, combining creativity and strategy to design user-friendly experiences and drive business growth."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-6"
            />
            <div className="flex items-center sm:gap-4 gap-2">
              <a
                href="./assets/CV-Fatricius Paseleng.pdf"
                download="CV-Fatricius Paseleng.pdf"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Download CV" disabled={false} speed={3} />
              </a>

              <a
                href="#project"
                className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors"
              >
                <ShinyText text="Explore My Projects" disabled={false} speed={3} />
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
           <ProfileCard
            name="Patrick"
            title="UI/UX Design"
            handle="kingptrck"
            status="Online"
            contactText="Contact Me"
            avatarUrl="./assets/Patrick.png"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              document.getElementById("contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }}
          />

          </div>
        </div>

        {/* About Section */}
        <div
          ref={aboutRef}
          className="mt-16 mx-auto w-full max-w-[1600px] rounded-3xl border-[2px] border-[#2a2a2a]/60 shadow-[0_0_25px_rgba(255,182,193,0.15)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-8">
            <div className="basis-full md:basis-7/12 pr-0 md:pr-8 border-b md:border-b-0 md:border-r border-violet-500/30">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                  About Me
                </h2>
                <BlurText
                  text="I am a Bachelor of Informatics graduate from Satya Wacana Christian University (UKSW). I have a strong interest in UI/UX Design, Data Analysis, and Digital Marketing, and I am passionate about learning new things. I possess strong analytical, communication, and networking skills, and I adapt quickly to new environments."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-6 text-gray-300"
                />
                <BlurText
                  text="These abilities have been further developed through my active involvement in various campus committees and organizations. With my skills and enthusiasm, I am committed to contributing effectively while continuously growing to face new challenges and opportunities."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      5<span className="text-violet-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3<span className="text-violet-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl mb-1">
                      3.42<span className="text-violet-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>

                <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm md:text-base text-violet-400"
                />
              </div>
            </div>

            <div className="basis-full md:basis-5/12 pl-0 md:pl-8 overflow-hidden max-w-full flex justify-center">
              <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
            </div> 
          </div>
        </div>

        {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4">Tools & Technologies</h1>
          <p className="w-2/5 text-base/loose opacity-50">My Professional Skills</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-delay={tool.dad}
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="text-lg font-semibold block"
                    />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project */}
        <div className="proyek mt-32 py-10" id="project">
          <h1 className="text-center text-4xl font-bold mb-2">Project</h1>
          <p className="text-base/loose text-center opacity-50">
            Showcasing a selection of projects that reflect my skills, creativity,
            and passion for building meaningful digital experiences.
          </p>
          <div className="proyek-box mt-14">
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        {/* Contact */}
      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1 className="text-4xl mb-2 font-bold text-center">Contact Me</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
          Get in touch with me or chat in real-time
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Folder di kiri */}
          <div className="flex-1 flex justify-center items-center">
            <Folder size={3} color="#5227FF" className="custom-folder" />
          </div>

          {/* Form di kanan */}
          <div className="flex-1">
            <form
              action="https://formsubmit.co/fatricusp@gmail.com"
              method="POST"
              className="bg-zinc-800 p-10 w-full rounded-md"
              autoComplete="off"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Full Name</label>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Input Name..."
                    className="border border-zinc-500 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-semibold">Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Input Email..."
                    className="border border-zinc-500 p-2 rounded-md"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-semibold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="45"
                    rows="7"
                    placeholder="Message..."
                    className="border border-zinc-500 p-2 rounded-md"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                  >
                    <ShinyText text="Send" disabled={false} speed={3} />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      </main>

      {/* Modal Project */}
      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
}

export default App;
