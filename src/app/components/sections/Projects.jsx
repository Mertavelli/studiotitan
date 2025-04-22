import { mockProjects } from "../mockProjects"

export default function Projects({ projectName, setProjectName }) {

    const handleClick = (project) => {
        setProjectName(project.name)
    }

    return (
        <div className="md:m-3 lg:m-5 md:px-3 lg:px-8 border-x border-white/50 h-full overflow-y-auto">
            <h2 className="mb-8">PROJECTS</h2>
            {mockProjects.map((project, index) => {
                const isActive = projectName === project.name;

                return (
                    <button
                        onClick={() => handleClick(project)}
                        key={index}
                        className={`border-b border-white/50 flex justify-between items-center md:py-2 lg:py-5 w-full transition-all duration-300 ease-in-out transform ${isActive ? "translate-x-1" : "translate-x-0"}`}>
                        {isActive ? (
                            <div className="flex items-center gap-2">
                                <div className="bg-accent w-2 h-2 lg:w-5 lg:h-5 rounded-full blur-[2.5px]" />
                                <h3 className="text-left whitespace-nowrap">{project.name}</h3>
                            </div>
                        ) : (
                            <h3 className="text-left whitespace-nowrap">{project.name}</h3>
                        )}
                        <label className={isActive ? "text-accent" : ""}>{project.category}</label>
                    </button>
                );
            })}
        </div>
    )
}
