export default function Home() {
  return (
    <div className="page">
      <div className="header">
        <a href="#home" className="brand">Aditya</a>
        <div className="menu">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div id="home" className="hero">
        <h1>Hi I Am Aditya</h1>
        <p>Am a C/C++ Developer</p>
        <a href="#contact" className="button">Get in touch</a>
      </div>

      <div id="about" className="block">
        <h2>About</h2>
        <p>
          I am a passionate developer with experience in building web applications using modern technologies. I enjoy solving complex problems and continuously learning new skills to improve my craft.
        </p>
      </div>

      <div id="skills" className="block">
        <h2>Skills</h2>
        <div className="pill">C</div>
        <div className="pill">C++</div>
        <div className="pill">Rust</div>
        <div className="pill">Python</div>
        <div className="pill">Git and GitHub</div>
      </div>

      <div id="projects" className="block">
        <h2>Projects</h2>
        <div className="project">
          <h3>Aria</h3>
          <p>Built a Voice Assistant that Can Control Applications</p>
          <a href="https://github.com/aditya-munday/Aria">View project</a>
        </div>
        <div className="project">
          <h3>Directioner OS</h3>
          <p>Built A Operating System On Rust Based On Fedora</p>
          <a href="https://github.com/aditya-munday/Directioner-OS">View project</a>
        </div>
      </div>

      <div id="contact" className="block">
        <h2>Contact</h2>
        <p>If U Have Any Query Or Want to Collab I'd Love to Help</p>
        <a href="mailto:adityamunday@yahoo.com" className="button">Email me</a>
      </div>

      <div className="footer">
        <p>Built By Aditya Munday</p>
      </div>
    </div>
  );
}
