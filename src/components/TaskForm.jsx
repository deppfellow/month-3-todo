import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function TaskForm({ addNewTask }) {
	const [taskDesc, setTaskDesc] = useState('');

	function formHandler() {
		e.preventDefault();
		addNewTask(taskDesc);
		setTaskDesc('');
	}

	return (
		<form onSubmit={formHandler}>
			<div className="mb-2 flex flex-grow gap-2">
				<Button className="text-lg font-extrabold">+</Button>
				<Input
					type="text"
					placeholder="Task Description"
					autoComplete="off"
					onChange={(e) => setTaskDesc(e.target.value)}
				/>
			</div>
		</form>
	);
}

export default TaskForm;
