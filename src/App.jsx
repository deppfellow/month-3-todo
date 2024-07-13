import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Trash, Pencil } from 'lucide-react';
import ProjectForm from '@/components/ProjectForm';
import ProjectList from '@/components/ProjectList';
import TaskForm from '@/components/TaskForm';
import TaskUnit from '@/components/TaskUnit';
// import useActive from '@/hooks/useActive';

export const Context = React.createContext();

function App() {
	// localStorage.removeItem('PROJECT_ITEMS');
	// const [projects, setProjects] = useState(() => {
	// 	const localProjects = localStorage.getItem('PROJECT_ITEMS');
	// 	if (localProjects == null) return [];
	// 	return JSON.parse(localProjects);
	// });
	const [projects, setProjects] = useState([
		{
			id: 'initial-project',
			title: 'Init Project',
			taskList: ['Something'],
		},
	]);
	const [activeId, setActiveId] = useState(projects[0].id);
	const [activeTitle, setActiveTitle] = useState(projects[0].title);
	const [activeTaskList, setActiveTaskList] = useState(projects[0].taskList);

	let currentProject;

	// useEffect(() => {
	// 	localStorage.setItem('PROJECT_ITEMS', JSON.stringify(projects));
	// }, [projects]);

	/* useEffect to change the content displayed and show task of active project */
	useEffect(() => {
		currentProject = projects.find((project) => {
			if (project.id === activeId) return project;
		});

		setActiveTitle(currentProject.title);
		setActiveTaskList(currentProject.taskList);
	}, [activeId]);

	function addNewProject(title) {
		setProjects(() => {
			return [
				...projects,
				{ id: crypto.randomUUID(), title: title, taskList: [] },
			];
		});
	}

	function addNewTask(taskDesc) {
		// Get current active project
		// Add task to the active project
		const newTask = {
			id: crypto.randomUUID(),
			desc: taskDesc,
			isCompleted: false,
		}
		currentProject.taskList.push(newTask);
		
		setActiveTaskList(currentProject.taskList);
	}

	// TODO: Render task list to content

	return (
		<div className="app-root flex h-screen min-h-screen">
			<div className="sidebar w-3/12 min-w-48 border border-gray-700 bg-gray-300">
				<h1 className="text-bold mx-4 my-3 text-4xl">SEPIK</h1>
				<ProjectForm addNewProject={addNewProject} />
				<Context.Provider value={[activeId, setActiveId]}>
					<ProjectList projects={projects} />
				</Context.Provider>
			</div>

			<div className="content max-w-3/4 flex-grow">
				<div className="mx-4 my-2 mb-6 flex items-center gap-2 text-2xl font-semibold">
					<h2 className="my-2 flex-grow">{activeTitle}</h2>
					<Button variant="outline">
						<Pencil className="mr-2 h-4 w-4" /> Edit
					</Button>
					<Button variant="destructive" className="font-medium">
						<Trash className="mr-2 h-4 w-4" /> Delete
					</Button>
				</div>

				<div className="mx-4 my-2">
					<TaskForm addNewTask={addNewTask} />
					<ul className="flex flex-col gap-1">
						<TaskUnit />
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
