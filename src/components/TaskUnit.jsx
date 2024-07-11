import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Pencil, Trash } from 'lucide-react';

function TaskUnit() {
	return (
		<li className="my-1 flex items-center gap-2">
			<Checkbox id="terms1" />
			<div className="grid flex-grow gap-1.5 leading-none">
				<label
					htmlFor="terms1"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Error dolor asperiores nesciunt sunt vero explicabo incidunt
					animi fuga eaque alias, sed, minus veritatis natus?
					Similique optio modi enim repellendus et?
				</label>
			</div>
			<Button variant="outline" size="icon">
				<Pencil className="m-2 h-4 w-4" />
			</Button>
			<Button variant="destructive" size="icon">
				<Trash className="m-2 h-4 w-4" />
			</Button>
		</li>
	);
}

export default TaskUnit;
