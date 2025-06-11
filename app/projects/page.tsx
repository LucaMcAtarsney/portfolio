import ProjectsCarousel from "@/components/ProjectsCarousel";

export default function Projects() {
    return (

        <main>
            <section>
            <div className="text-center max-w-2xl mx-auto space-y-6 p-10">
            <h2 className="text-4xl md:text-7xl font-bold ">Projects</h2>
            </div>
                <div className="pt-20 scale-110">
                    <ProjectsCarousel />
                </div>
                
            </section>
        </main>
        
    );
}