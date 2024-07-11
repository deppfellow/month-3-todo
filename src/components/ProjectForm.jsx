import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function NewProjectForm({ addNewProject }) {
	const [newProject, setNewProject] = useState('');

	function formHandler(e) {
		e.preventDefault();
		addNewProject(newProject);
		setNewProject('');
	}

	return (
		<form className="m-4" onSubmit={formHandler}>
			<div className="grid w-full max-w-sm items-center gap-1.5">
				<Label htmlFor="project-title" className="mb-1 font-semibold">
					Title
				</Label>
				<Input
					type="text"
					id="project-title"
					onChange={(e) => setNewProject(e.target.value)}
					placeholder="Title"
					autoComplete="off"
					className="rounded"
				/>
				<Button>Add Project</Button>
			</div>
		</form>
	);
}

export default NewProjectForm;
