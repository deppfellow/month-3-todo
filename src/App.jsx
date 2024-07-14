import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Trash, Pencil } from 'lucide-react';
import ProjectForm from '@/components/ProjectForm';
import ProjectList from '@/components/ProjectList';
import TaskForm from '@/components/TaskForm';
import TaskUnit from '@/components/TaskUnit';
import { Input } from './components/ui/input';
import EditProjectUnit from './components/EditProjectUnit';
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
			title: 'Home',
		},
	]);

	// useEffect(() => {
	// 	localStorage.setItem('PROJECT_ITEMS', JSON.stringify(projects));
	// }, [projects]);

	const [activeId, setActiveId] = useState(projects[0].id);
	const [tasks, setTasks] = useState([
		{
			taskId: crypto.randomUUID(),
			desc: 'Something',
			isCompleted: false,
			whichProject: 'initial-project',
		},
	]);
	const [editProjectState, setEditProjectState] = useState(false);

	const currentProject = projects.find((project) => {
		if (project.id === activeId) return project;
	});

	const activeTitle = currentProject.title;
	const activeTaskList = tasks.filter((task) => {
		if (task.whichProject === currentProject.id) return task;
	});

	function addNewProject(title) {
		setProjects(() => {
			return [...projects, { id: crypto.randomUUID(), title: title }];
		});
	}

	function deleteProject(projectToDelete) {
		setActiveId(projects[0].id);

		setProjects((allProject) => {
			return allProject.filter((project) => {
				if (project.id !== projectToDelete) return project;
			});
		});
	}

	function editProject() {
		setEditProjectState(true);
	}

	function addNewTask(taskDesc) {
		// Get current active project
		// Add task to the active project
		setTasks(() => {
			return [
				...tasks,
				{
					taskId: crypto.randomUUID(),
					desc: taskDesc,
					isCompleted: false,
					whichProject: currentProject.id,
				},
			];
		});
	}

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
					<h2 className="my-2 flex-grow">
						{editProjectState ? (
							<EditProjectUnit
								editProject={editProject}
								setEditProjectState={setEditProjectState}
								activeTitle={activeTitle}
							/>
						) : (
							activeTitle
						)}
					</h2>
					<Button variant="outline" onClick={() => editProject()}>
						<Pencil className="mr-2 h-4 w-4" /> Edit
					</Button>
					<Button
						variant="destructive"
						onClick={() => {
							deleteProject(currentProject.id);
						}}
					>
						<Trash className="mr-2 h-4 w-4" /> Delete
					</Button>
				</div>

				<div className="mx-4 my-2">
					<TaskForm addNewTask={addNewTask} />
					<ul className="flex flex-col gap-1">
						{activeTaskList.map((task) => {
							return (
								<TaskUnit
									isCompleted={task.isCompleted}
									desc={task.desc}
									key={task.taskId}
								/>
							);
						})}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default App;
