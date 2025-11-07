import Intro from "./components/Intro";
import WorkSection from "./components/WorkSection";
import WorkSvg from "./components/WorkSvg";
import ProjectsGrid from "./components/ProjectsGrid";
import Services from "./components/Services";
import ImageCollage from "./components/ImageCollage";

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      <Intro />
      <WorkSection />
      <WorkSvg />
      <ProjectsGrid />
      <Services />
      <ImageCollage />
      
      {/* Footer Copyright */}
      <footer className="w-full bg-white py-6 border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-zinc-600 text-xs md:text-sm text-center">
            ©Oddpartikle
          </p>
        </div>
      </footer>
    </main>
  );
}
