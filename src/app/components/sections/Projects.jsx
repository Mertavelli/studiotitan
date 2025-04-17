import { mockProjects } from "../mockProjects"

export default function Projects({ projectName, setProjectName }) {

    const handleClick = (project) => {
        setProjectName(project.name)
    }

    return (
        <div className="mx-5 px-10 border-x border-white/50">
            <h2 className="subtitle">PROJECTS</h2>
            {mockProjects.map((project, index) => {
                const isActive = projectName === project.name;

                return (
                    <button
                        onClick={() => handleClick(project)}
                        key={index}
                        className={`border-b border-white/50 flex justify-between items-center py-5 w-full transition-all duration-300 ease-in-out transform ${isActive ? "translate-x-1" : "translate-x-0"}`}>
                        {isActive ? (
                            <div className="flex items-center gap-2">
                                <div className="bg-blue w-5 h-5 rounded-full p-2.5 blur-[2.5px]" />
                                <h2 className="text-xl font-black text-blue">{project.name}</h2>
                            </div>
                        ) : (
                            <h2 className="text-xl font-black">{project.name}</h2>
                        )}
                        <p className={isActive ? "text-blue" : ""}>{project.category}</p>
                    </button>
                );
            })}
        </div>
    )
}
