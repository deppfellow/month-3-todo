import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Trash, Pencil } from 'lucide-react';
import ProjectForm from '@/components/ProjectForm';
import ProjectList from '@/components/ProjectList';
import TaskForm from '@/components/TaskForm';
import TaskUnit from '@/components/TaskUnit';

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
				<h1 className="text-bold mx-4 my-3 text-4xl">SEPIK</h1>
				<ProjectForm addNewProject={addNewProject} />
				<ProjectList projects={projects} />
			</div>

			<div className="content max-w-3/4 flex-grow">
				<div className="mx-4 my-2 mb-6 flex items-center gap-2 text-2xl font-semibold">
					<h2 className="my-2 flex-grow">PROJECT TITLE</h2>
					<Button variant="outline">
						<Pencil className="mr-2 h-4 w-4" /> Edit
					</Button>
					<Button variant="destructive" className="font-medium">
						<Trash className="mr-2 h-4 w-4" /> Delete
					</Button>
				</div>

				<div className="mx-4 my-2">
					<TaskForm />
					<ul className="flex flex-col gap-1">
						<TaskUnit />
						<TaskUnit />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
