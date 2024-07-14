import { useState, useEffect } from 'react';
import { Trash, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

import Sidebar from '@/components/Sidebar';
import EditProjectUnit from '@/components/EditProjectUnit';
import TaskForm from '@/components/TaskForm';
import TaskUnit from '@/components/TaskUnit';

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
			isCompleted: true,
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

	function editProject(projectTitle) {
		setProjects((allProjects) => {
			return allProjects.map((project) => {
				if (project.id === currentProject.id) {
					return { ...project, title: projectTitle };
				}
				return project; // Else, just return the project as is
			});
		});
	}

	function deleteProject(projectToDelete) {
		setActiveId(projects[0].id);
		setProjects((allProject) => {
			return allProject.filter((project) => {
				if (project.id !== projectToDelete) return project;
			});
		});
		setTasks((allTasks) => {
			return allTasks.filter((task) => {
				if (task.whichProject !== projectToDelete) return task;
			});
		});
	}

	function addNewTask(taskDesc) {
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

	function toggleTask(taskToToggle, isCompleted) {
		setTasks((allTasks) => {
			return allTasks.map((task) => {
				if (task.taskId === taskToToggle) {
					return { ...task, isCompleted };
				}
				return task;
			});
		});
	}

	function deleteTask(taskToDelete) {
		setTasks((allTasks) => {
			return allTasks.filter((task) => {
				if (task.taskId !== taskToDelete) return task;
			});
		});
	}

	return (
		<div className="app-root flex h-screen min-h-screen">
			<Sidebar
				addNewProject={addNewProject}
				value={[activeId, setActiveId]}
				projects={projects}
			/>

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
					<Button
						variant="outline"
						onClick={() => setEditProjectState(true)}
					>
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
									taskId={task.taskId}
									desc={task.desc}
									isCompleted={task.isCompleted}
									key={task.taskId}
									toggleTask={toggleTask}
									deleteTask={deleteTask}
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
