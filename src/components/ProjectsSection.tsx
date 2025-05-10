// src/components/ProjectsSection.tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const ProjectsSection = () => {
    const projects = [
        {
            id: 1,
            title: "PrivGuard",
            description: "A Digital Privacy Manager",
            tags: ["React", "GO (FIBER)", "REST API's","REDIS", "PostgreSQL", "AWS","WebAuthn","TOTP","Tailwind"],
            image: "/project_privguard.png",
            url: "https://privguard.netlify.app" 
        },
        {
            id: 2,
            title: "PLATFORMER ADVENTURE",
            description: "A communtiy Platform to People to Interact using Audio, Video and Text channels",
            tags: ["NextJS", "LiveKit", "PostgreSQL", "Prisma ORM","Socket.io"],
            image: "/project_community.png",
            url: "https://community-4vvl.onrender.com" 
        },
        {
            id: 3,
            title: "GRAM",
            description: "A Social Media App",
            tags: ["React", "Express", "Socket.io","MongoDB","Redis","AI"],
            image: "/project_gram.png",
            url: "https://gram-ll0f.onrender.com" 
        }
    ];

    const viewProject = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="
      my-12 p-6
      bg-[#1a1a2e]
      border-4 border-[#6a0dad]
      [box-shadow:0_0_0_4px_#ff00ff,0_0_0_8px_#00ffff]
      relative
      before:content-[''] before:absolute before:top-2 before:left-2 before:right-2 before:bottom-2
      before:border-2 before:border-dashed before:border-[#ff00ff] before:pointer-events-none
    ">
            {/* Scanlines overlay */}
            <div className="
        fixed inset-0 pointer-events-none
        bg-[repeating-linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_50%,rgba(0,0,0,0)_100%)]
        bg-[length:100%_4px]
        z-50
      "></div>

            <h2 className="
        font-['Press_Start_2P'] text-[#ff00ff]
        [text-shadow:3px_3px_0_#00ffff,-1px_-1px_0_#00ffff]
        tracking-wider
        text-center mb-8
        text-xl md:text-2xl
      ">
                MY PROJECTS
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <Card key={project.id} className="
            h-full flex flex-col
            bg-[#1a1a2e]
            border-3 border-[#00ffff]
            [box-shadow:4px_4px_0_#ff00ff]
            transition-all duration-200 ease-in-out
            hover:translate-x-[-4px] hover:translate-y-[-4px]
            hover:[box-shadow:8px_8px_0_#ff00ff]
          ">
                        <CardHeader>
                            <CardTitle className="
                font-['Press_Start_2P'] text-[#ff00ff]
                [text-shadow:2px_2px_0_#00ffff]
                tracking-wider
                text-lg
              ">
                                {project.title}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="
                  w-full h-52 object-contain mb-4
                  border-4 border-solid
                  [border-image:linear-gradient(to_bottom,#ff00ff,#00ffff)_1]
                "
                            />
                            <CardDescription className="
                font-mono text-[#00ffff]
                mb-4
                leading-relaxed
              ">
                                {project.description}
                            </CardDescription>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span key={tag} className="
                    font-mono text-[#00ffff] bg-[#6a0dad]
                    px-2 py-1 text-xs
                  ">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </CardContent>
                        <div className="p-4">
                            <Button 
                                onClick={() => viewProject(project.url)}
                                className="
                                    w-full
                                    font-['Press_Start_2P']
                                    bg-[#6a0dad] text-white
                                    border-none
                                    py-3 px-6
                                    cursor-pointer
                                    uppercase
                                    text-sm
                                    relative
                                    hover:bg-[#ff00ff] hover:text-black
                                    active:translate-x-[2px] active:translate-y-[2px]
                                "
                            >
                                VIEW PROJECT
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;