import { useState, useEffect } from "react";
import { PiTrash } from 'react-icons/pi';
import { SlPlus } from 'react-icons/sl';
import ProjectForm from "@/components/ProjectForm";
import ProjectList from "@/components/ProjectList";
import TaskForm from "@/components/TaskForm";
import TaskUnit from "@/components/TaskUnit";

function App() {
    const [projects, setProjects] = useState(() => {
        const localProjects = localStorage.getItem('PROJECTS_ITEMS');
        if (localProjects == null) return [];
        return JSON.parse(localProjects);
    });

    const [activeProject, setActiveProject] = useState(() => {
        const initProject = {
            id: 'initial-project',
            title: 'Init Project',
            taskList: [],
        };

        if (projects.length === 0) {
            setProjects(() => {
                return [initProject];
            });
        }

        return projects[0];
    });

    useEffect(() => {
        localStorage.setItem('PROJECTS_ITEMS', JSON.stringify(projects));
    }, [projects]);

    function addNewProject(title) {
        setProjects(() => {
            return [
                ...projects,
                { id: crypto.randomUUID(), title: title, taskList: [] },
            ];
        });
    }

    // localStorage.removeItem('PROJECTS_ITEMS');

    return (
        <div className="app-root flex h-screen min-h-screen">
            <div className="sidebar w-3/12 min-w-48 border border-gray-700 bg-gray-300">
                <h1 className="mx-4 my-3 text-4xl">SEPIK</h1>
                <ProjectForm addNewProject={addNewProject} />
                <ProjectList projects={projects} />
            </div>

            <div className="content max-w-3/4 flex-grow">
                {/* <SearchBar /> */}
                {/* <div className="mx-4 my-2">
                    <div className="flex items-center gap-2 text-2xl">
                        <button className="my-2">
                            <SlPlus size={28} />
                        </button>
                        <h2 className="flex-grow">PROJECT TITLE</h2>
                        <button>
                            <PiTrash style={{ color: 'red' }} size={32} />
                        </button>
                    </div>

                    <ul className="flex flex-col gap-1">
                        <TaskUnit />
                        <TaskUnit />
                    </ul>
                </div> */}
                    <TaskForm />
                    <div className="mx-4 my-2">
                        <div className="flex items-center gap-2 text-2xl font-semibold">
                            <h2 className="flex-grow">PROJECT TITLE</h2>
                            <button>
                                <PiTrash style={{ color: 'red' }} size={32} />
                            </button>
                        </div>

                        <ul className="flex flex-col gap-1">
                            <TaskUnit />
                            <TaskUnit />
                        </ul>
                    </div>
            </div>
        </div>
    )
}

export default App
