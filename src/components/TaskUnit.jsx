import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

function TaskUnit({ taskId, desc, isCompleted, toggleTask, deleteTask }) {
	return (
		<li className="my-1 flex items-center gap-2">
			{/* <Checkbox
				id={taskId}
				onChange={() => toggleTask(taskId, !isCompleted)}
				checked={isCompleted}
			/> */}
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
					{desc}
				</label>
			</div>
			<Button variant="outline" size="icon">
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
