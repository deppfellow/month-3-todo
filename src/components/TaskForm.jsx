import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function TaskForm() {
	return (
		<div className="mb-2 flex flex-grow gap-2">
			<Button className="text-lg font-extrabold">+</Button>
			<Input type="text" placeholder="Task Description" />
		</div>
	);
}

export default TaskForm;
