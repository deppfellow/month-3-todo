import { useState, useEffect } from 'react';

function useLocalStorage({}) {
	const [projects, setProjects] = useState(() => {
		const localProjects = localStorage.getItem('PROJECT_ITEMS');

		if (localProjects == null)
			return [
				{
					id: 'initial-project',
					title: 'Home',
				},
			];

		return JSON.parse(localProjects);
	});

	const [tasks, setTasks] = useState(() => {
		const localTasks = localStorage.getItem('TASK_ITEMS');

		if (localTasks == null)
			return [
				{
					taskId: crypto.randomUUID(),
					desc: 'Something',
					isCompleted: true,
					dueDate: new Date(),
					whichProject: 'initial-project',
				},
			];

		return JSON.parse(localTasks);
	});

	useEffect(() => {
		localStorage.setItem('PROJECT_ITEMS', JSON.stringify(projects));
	}, [projects]);

	useEffect(() => {
		localStorage.setItem('TASK_ITEMS', JSON.stringify(tasks));
	}, [tasks]);

	return [projects, setProjects, tasks, setTasks];
}

export default useLocalStorage;
