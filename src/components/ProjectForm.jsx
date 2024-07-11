import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function NewProjectForm({ addNewProject }) {
    const [newProject, setNewProject] = useState('');

    function formHandler(e) {
        e.preventDefault();
        addNewProject(newProject);
        setNewProject('');
    }

    return (
        <form className="m-4" onSubmit={formHandler}>
            {/* <div className="flex flex-col text-base">
                <label className="text-lg font-medium" htmlFor="new-project">
                    Title
                </label>
                <input
                    className="my-2 flex-grow rounded border border-gray-300 bg-white px-4 py-3"
                    onChange={(e) => setNewProject(e.target.value)}
                    type="text"
                    id="new-project"
                    value={newProject}
                    placeholder="Project Title"
                    autoComplete="off"
                />
            </div> */}
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="project-title" className="font-semibold mb-1">Title</Label>
                <Input type="text" id="project-title" placeholder="Title" className="rounded" />
                <Button>Add Project</Button>
            </div>
        </form>
    );
}

export default NewProjectForm;