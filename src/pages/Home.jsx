import { useState } from 'react';
import useLocalStorage from '@/hooks/useLocalStorage';

import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';

function Home() {
	const [projects, setProjects, tasks, setTasks] = useLocalStorage({});
	const [activeId, setActiveId] = useState(projects[0].id);
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

	function editTask(taskToEdit, newDesc) {
		setTasks((allTasks) => {
			return allTasks.map((task) => {
				if (task.taskId === taskToEdit) {
					return { ...task, desc: newDesc };
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

			<Content
				projectProps={{
					editProject,
					deleteProject,
					setEditProjectState,
					editProjectState,
					currentProject,
					activeTitle,
				}}
				taskProps={{
					addNewTask,
					toggleTask,
					editTask,
					deleteTask,
					activeTaskList,
				}}
			/>
		</div>
	);
}

export default Home;
