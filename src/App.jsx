import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";



export default function App() {
  // FORM STATES
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("⚠ Please fill all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      setStatus("⚠ Please enter a valid email.");
      return;
    }

    emailjs
      .send(
        "dcpatel9102001@gmail.com",
        "template_ino3xfq",
        form,
        "DhpaUgH-CzoO-bYpJ"
      )
      .then(() => {
        setStatus("✅ Message Sent Successfully!");

        setTimeout(() => {
          setStatus("");
        }, 10000);

        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("❌ Failed to send. Try again.");
      });
  };

  return (
    <div className="bg-[#0c0f1a] text-white">


      {/* ================= NAVBAR ================= */}
      <nav className="w-full flex justify-between items-center px-30 py-5 border-b border-gray-700/40">
        <h1 className="text-3xl font-extrabold text-blue-400">Dileep...</h1>

        <p className="px-4 py-1 text-sm rounded-full bg-green-600/30 text-green-400 border border-green-700">
          Available to Work
        </p>

        <div className="flex space-x-8 text-lg font-medium">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </nav>



      {/* ================= HERO SECTION ================= */}
      <section data-aos="fade-up" className="min-h-screen flex flex-col md:flex-row justify-center items-center px-10 md:px-20 py-20 text-center">

        <div className="md:w-1/2 space-y-6 animate-[fadeIn_1s_forwards]">
          <h2 className="text-4xl sm:text-6xl font-extrabold">
            Hi, I'm <span className="text-blue-500">Dileepchand Patel</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-xl mx-auto">
            Software Developer | MERN Stack | Java & SQL | MCA @ MANIT Bhopal
          </p>

          <a href="#contact" className="inline-block px-8 py-3 border-1 hover:bg-gray-600 rounded-lg text-lg font-semibold shadow-lg">
            Hire Me
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center mt-12 md:mt-0 animate-[slideUp_1.3s_ease-out_0.4s_forwards]">
          <img
            src="image.png"
            className="w-80 h-80 rounded-2xl object-cover object-top shadow-[0_0_40px_rgba(0,140,255,0.45)] animate-[float_4s_infinite]"
          />
        </div>
      </section>



      {/* ================= ABOUT ================= */}
      <section id="about" data-aos="fade-right" className="px-10 md:px-20 py-24 ">
        <h3 className="text-4xl font-bold mb-8 text-blue-400 text-center">About Me</h3>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Hi, I’m Dileepchand Patel. I’m someone who enjoys learning, building things,
          and understanding how technology works. I’m currently pursuing my MCA from
          MANIT Bhopal, and over time I’ve developed a genuine interest in software
          development.

          I like solving problems, exploring new ideas, and improving my skills step by step.
          I enjoy working with Java, Python, and web technologies, and I try to build things
          that are simple, useful, and meaningful.....
        </p>
      </section>



      {/* ================= SKILLS ================= */}
      <section id="skills" data-aos="fade-up" className="px-10 md:px-20 py-24 bg-[#0f1320] text-center">
        <h3 className="text-4xl font-bold mb-12 text-blue-400">Skills</h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "SQL", "Java", "DSA", "Tailwind", "Git", "Oracle DB"]
            .map((skill) => (
              <div className="p-5 bg-[#141a2c] rounded-xl text-lg hover:scale-105 transition">
                {skill}
              </div>
            ))}
        </div>
      </section>



      {/* ================= PROJECTS ================= */}
      <section id="projects" data-aos="fade-up" className="flex flex-col px-10 md:px-20 py-24 ">
        <h3 className="text-4xl font-bold mb-12 text-blue-400 text-center">Projects</h3>

        {/* Project 1 */}
        <div className="bg-[#0c0f1a] flex flex-col md:flex-row items-center md:items-start justify-around p-8 rounded-xl shadow-xl transition gap-6">
          <img
            src="shesecure.png"
            alt="SheSecure Project"
            className="w-full md:w-[30%] object-cover rounded-lg mb-4"
          />
          <div className="flex flex-col pl-0 md:pl-40 text-center md:text-left">
            <h4 className="text-2xl font-bold text-center">SheSecure – Women Safety App</h4>
            <p className="text-gray-300 mt-3">
              To help women in India respond quickly during unsafe situations by sending instant SOS alerts, sharing live location, and notifying trusted contacts—especially in areas with delayed police response, low public visibility, or when immediate help is hard to reach.
            </p>
            <div className="flex m-3">
              <div className="px-5 py-1 bg-gray-600 rounded-full">React</div>
              <div className="px-5 py-1 bg-gray-600 rounded-full">NodeJs</div>
              <div className="px-5 py-1 bg-gray-600 rounded-full">Socket.io</div>
              <div className="px-5 py-1 bg-gray-600 rounded-full">MongoDB</div>
              <div className="px-5 py-1 bg-gray-600 rounded-full">Google Map API</div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">

              {/* Vercel Logo */}
              <a href="https://shesecure.vercel.app/" target="_blank">
                <img
                  src="https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png"
                  className="w-7 hover:scale-110 transition"
                  alt="Vercel"
                />
              </a>

              {/* GitHub Logo */}
              <a href="https://github.com/patel304/SheSecure.git" target="_blank">
                <svg className="w-7 hover:scale-110 transition" fill="white" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.45 7.9 10.98.6.1.82-.26.82-.58v-2.1c-3.22.7-3.9-1.37-3.9-1.37-.55-1.4-1.34-1.77-1.34-1.77-1.1-.77.08-.76.08-.76 1.22.08 1.87 1.26 1.87 1.26 1.08 1.86 2.84 1.32 3.54 1 .1-.8.42-1.32.76-1.62-2.57-.3-5.27-1.28-5.27-5.7 0-1.26.45-2.3 1.2-3.12-.12-.3-.52-1.52.12-3.16 0 0 .97-.32 3.18 1.2a11.1 11.1 0 0 1 2.9-.4c.98 0 1.98.14 2.9.4 2.2-1.52 3.17-1.2 3.17-1.2.64 1.64.24 2.86.12 3.16.75.82 1.2 1.86 1.2 3.12 0 4.44-2.7 5.4-5.28 5.7.44.36.82 1.08.82 2.2v3.26c0 .32.22.7.82.58A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div data-aos="zoom-in" className="bg-[#0c0f1a] flex flex-col md:flex-row items-center md:items-start justify-around p-8 rounded-xl shadow-xl transition gap-6">
          <img
            src="classlinker.png"
            alt="Classlinker"
            className="w-full md:w-[30%] object-cover rounded-lg mb-4"
          />

          <div className="flex flex-col pl-0 md:pl-40 text-center md:text-left">
            <h4 className="text-2xl font-bold text-center">Classlinker - Student Manager</h4>
            <p className="text-gray-300 mt-3">
              To streamline academic management by automating daily attendance and
              organizing assignments, making it easier for students and teachers to
              track, manage, and maintain academic records efficiently.
            </p>
            <div className="flex m-2">
              <div className="px-6 py-1 bg-gray-600 rounded-full">React</div>
              <div className="px-6 py-1 bg-gray-600 rounded-full">NodeJs</div>
              <div className="px-6 py-1 bg-gray-600 rounded-full">Socket.io</div>
              <div className="px-6 py-1 bg-gray-600 rounded-full">OracleDB</div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-4">

              {/* GitHub Logo */}
              <a href="https://github.com/patel304/classlinker.git" target="_blank">
                <svg className="w-7 hover:scale-110 transition" fill="white" viewBox="0 0 24 24">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.45 7.9 10.98.6.1.82-.26.82-.58v-2.1c-3.22.7-3.9-1.37-3.9-1.37-.55-1.4-1.34-1.77-1.34-1.77-1.1-.77.08-.76.08-.76 1.22.08 1.87 1.26 1.87 1.26 1.08 1.86 2.84 1.32 3.54 1 .1-.8.42-1.32.76-1.62-2.57-.3-5.27-1.28-5.27-5.7 0-1.26.45-2.3 1.2-3.12-.12-.3-.52-1.52.12-3.16 0 0 .97-.32 3.18 1.2a11.1 11.1 0 0 1 2.9-.4c.98 0 1.98.14 2.9.4 2.2-1.52 3.17-1.2 3.17-1.2.64 1.64.24 2.86.12 3.16.75.82 1.2 1.86 1.2 3.12 0 4.44-2.7 5.4-5.28 5.7.44.36.82 1.08.82 2.2v3.26c0 .32.22.7.82.58A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ================= ACHIEVEMENTS ================= */}
      <section id="achievements" data-aos="fade-up" className="px-10 md:px-20 py-24 text-center">
        <h3 className="text-4xl font-bold mb-12 text-blue-400">Achievement</h3>

        <div className="max-w-3xl mx-auto">

          <div className="bg-[#141a2c] p-6 rounded-xl hover:scale-[1.02] transition shadow-lg">
            <h4 className="text-2xl font-bold text-white">🏆 Secured AIR 304 in NIMCET 2023</h4>
            <p className="text-gray-300 mt-3">
              Achieved an All India Rank of 304 in the highly competitive NIMCET exam,
              earning admission to MANIT Bhopal among top NITs.
            </p>
          </div>

        </div>
      </section>





      {/* ================= CONTACT FORM ================= */}
      <section id="contact" data-aos="fade-up" className="px-10 md:px-20 py-24 bg-[#0f1320] text-center">
        <h3 className="text-4xl font-bold mb-10 text-blue-400">Send Me a Message</h3>

        <form onSubmit={sendEmail} className="max-w-xl mx-auto space-y-5">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-4 bg-[#141a2c] rounded-lg"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-4 bg-[#141a2c] rounded-lg"
            required
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 bg-[#141a2c] rounded-lg"
            required
          />

          <button className="w-auto px-4 py-2 border-1 hover:bg-gray-600 rounded-lg font-semibold text-">
            Send
          </button>

          <p className="text-gray-300 mt-3">{status}</p>
        </form>
      </section>



      {/* ================= FOOTER ================= */}
      <footer data-aos="fade-up" className="w-full bg-[#0a0d14] border-t border-gray-700/40 py-10 px-10 md:px-20 flex flex-col md:flex-row justify-between items-center">

        {/* RESUME */}
        <a
          href="https://drive.google.com/file/d/11NRGb5VGeYpsmDUDayF5M_q5gTx7KOlB/view"
          target="_blank"
          className="px-6 py-3 border-1 hover:bg-gray-700 rounded-lg text-lg font-semibold"
        >
          My Resume
        </a>

        {/* RIGHT — SOCIAL ICONS */}
        <div className="flex space-x-6">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/dileep-patel-3ba825287/" target="_blank">
            <svg className="w-7 hover:scale-110 transition" fill="white" viewBox="0 0 24 24">
              <path d="M4.984 3.5C4.984 4.604 4.1 5.5 3 5.5C1.9 5.5 1 4.604 1 3.5C1 2.396 1.9 1.5 3 1.5C4.1 1.5 4.984 2.396 4.984 3.5ZM5 8V22H1V8H5ZM9 8H13V10.109C13.746 8.826 15.452 7.75 17.786 7.75C22.102 7.75 23 10.276 23 14.244V22H19V15.326C19 13.226 18.964 10.75 16.5 10.75C14 10.75 13.5 12.9 13.5 15.176V22H9V8Z" />
            </svg>
          </a>

          {/* GitHub */}
          <a href="https://github.com/patel304" target="_blank">
            <svg className="w-7 hover:scale-110 transition" fill="white" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.45 7.9 10.98.6.1.82-.26.82-.58v-2.1c-3.22.7-3.9-1.37-3.9-1.37-.55-1.4-1.34-1.77-1.34-1.77-1.1-.77.08-.76.08-.76 1.22.08 1.87 1.26 1.87 1.26 1.08 1.86 2.84 1.32 3.54 1 .1-.8.42-1.32.76-1.62-2.57-.3-5.27-1.28-5.27-5.7 0-1.26.45-2.3 1.2-3.12-.12-.3-.52-1.52.12-3.16 0 0 .97-.32 3.18 1.2a11.1 11.1 0 0 1 2.9-.4c.98 0 1.98.14 2.9.4 2.2-1.52 3.17-1.2 3.17-1.2.64 1.64.24 2.86.12 3.16.75.82 1.2 1.86 1.2 3.12 0 4.44-2.7 5.4-5.28 5.7.44.36.82 1.08.82 2.2v3.26c0 .32.22.7.82.58A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
            </svg>
          </a>


          {/* WhatsApp */}
          <a href="https://wa.me/918878727672" target="_blank">
            <svg className="w-7 hover:scale-110 transition" fill="white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.964-.273-.099-.472-.148-.67.148-.198.297-.768.964-.94 1.162-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.058-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.173.198-.297.298-.496.099-.198.05-.371-.025-.52-.075-.148-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.007-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zM12.004 2C6.49 2 2 6.49 2 12.004a9.93 9.93 0 001.337 5.007L2 22l5.114-1.327A9.96 9.96 0 0012.004 22C17.51 22 22 17.51 22 12.004A10.01 10.01 0 0012.004 2z" />
            </svg>
          </a>

        </div>
      </footer>


    </div>
  );
}
