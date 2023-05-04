import projects from '../data/projects.json'
import { useState } from 'react';


export default function About() {
    const [state, setState] = useState({
        project_selection: 0
    });
    
    const selectProject = (index) => {
        setState({project_selection: index});
    }
    return (
        <div className="about">
            <div className="grid grid-cols-3">
            <div className="hidden col-span-1 md:block section-text justify-self-start text-white">
                <div className="pink"> 02/03 </div> <div className="subtext"> Projects </div>
            </div>
            <div className="relative flex-shrink-0">
                <div className="w-screen max-w-xl max-h-full overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                <nav className="items-center justify-center w-full p-6" aria-label="Global">
                    <div className="flex flex-col lg:flex-row lg:gap-x-12">
                        {
                            projects.map((project, index) => ( 
                                <button
                                    key={index}
                                    className={`text-sm font-semibold leading-6 ${
                                        state.project_selection === index
                                        ? "pink underline"
                                        : "text-gray-900"
                                    }`}
                                    onClick={() => selectProject(index)}
                                > 
                                    {project.title} 
                                </button>
                            ))
                        }
                    </div>
                </nav>
                    <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div className="about">
                        <span href="#" className="about font-semibold text-gray-900">
                        Description
                        <span className="absolute inset-0"></span>
                        </span>
                        {
                            projects[state.project_selection].description.split('#').map((item, i) => (
                                <p key={i} className="mt-1 text-gray-600">{item}</p>
                            )
                            // <p class="mt-1 text-gray-600">{projects[state.project_selection].description}</p>
                        )}
                    </div>
                    </div>
                    <div className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50">
                    <div>
                        <span href="#" className="font-semibold text-gray-900">
                        Tech
                        <span className="absolute inset-0"></span>
                        </span>
                        <div className="flex flex-wrap">
                            {projects[state.project_selection].tech
                            .split(",")
                            .map((tech, index) => (
                                <div key={index} className="w-1/2">
                                <p className="mt-1 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="arrow" className="inline-block w-4 h-4">
                                    <path fill="#134563" d="m-210.9-289-2-2 11.8-11.7-11.8-11.7 2-2 13.8 13.7-13.8 13.7" transform="translate(237 335)"></path>
                                </svg>
                                {tech.split(",").map((t, i) => <span key={i}>{t.trim()}{i < tech.split(",").length-1 ? ', ' : ''}</span>)}
                                </p>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div>
                    </div>
                    <div>
                    </div>
                    </div>
                    <div className="flex justify-end"> 
                        {
                            //only render the link if it != N/A
                            projects[state.project_selection].link != "N/A" ? 
                            <a href={projects[state.project_selection].link} className="mt-1 text-gray-600">
                                <img src="/url.svg" className="h-8 w-8 svg mr-2" aria-hidden="true" />
                            </a>
                            : null
                        }
                        {
                            <a href={projects[state.project_selection].github} className="mt-1 text-gray-600">
                                <img src="/github.svg" className="h-6 w-6 svg mr-2" aria-hidden="true" style={{filter: 'invert(1)'}} />
                            </a>
                        }
                    </div>
                </div>

                </div>
                
            </div>
            
        </div>
        </div>
    )
}