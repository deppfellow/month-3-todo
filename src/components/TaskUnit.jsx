import { useState } from 'react';
// import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

function TaskUnit({ taskId, desc, isCompleted, taskFunction }) {
	const { toggleTask, editTask, deleteTask } = taskFunction;
	const [editTaskState, setEditTaskState] = useState(false);
	const [newTaskDesc, setNewTaskDesc] = useState(desc);

	function formHandler(e) {
		e.preventDefault();
		editTask(taskId, newTaskDesc);
		setEditTaskState(false);
	}

	return (
		<li className="my-1 flex items-center gap-2">
			<input
				type="checkbox"
				id={taskId}
				onChange={() => toggleTask(taskId, !isCompleted)}
				checked={isCompleted}
			/>
			<div className="grid flex-grow gap-1.5 leading-none">
				<label
					htmlFor={taskId}
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					{editTaskState ? (
						<form onSubmit={formHandler}>
							<Input
								value={newTaskDesc}
								onChange={(e) => setNewTaskDesc(e.target.value)}
							/>
						</form>
					) : (
						desc
					)}
				</label>
			</div>
			<Button
				variant="outline"
				size="icon"
				onClick={() => setEditTaskState(true)}
			>
				<Pencil className="m-2 h-4 w-4" />
			</Button>
			<Button
				variant="destructive"
				size="icon"
				onClick={() => {
					deleteTask(taskId);
				}}
			>
				<Trash className="m-2 h-4 w-4" />
			</Button>
		</li>
	);
}

export default TaskUnit;
