import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ReflectiveJournal from './components/ReflectiveJournal';
import CareerPlan from './components/CareerPlan';
import CV from './components/CV';
import Certificates from './components/Certificates';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-darkerBlue min-h-screen text-lightGrey font-sans selection:bg-accentCyan/30 selection:text-white relative overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-accentPurple/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35vw] h-[35vw] bg-accentCyan/20 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-accentPurple/10 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ReflectiveJournal />
        <CareerPlan />
        <CV />
        <Certificates />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
