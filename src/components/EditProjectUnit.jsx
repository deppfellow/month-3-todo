import { useState } from 'react';
import { Input } from '@/components/ui/input';

function EditProjectUnit({ editProject, activeTitle, setEditProjectState }) {
	const [newProjectTitle, setNewProjectTitle] = useState(activeTitle);

	function inputHandler(e) {
		e.preventDefault();
		editProject();
		setEditProjectState(false);
	}

	return (
		<form onSubmit={inputHandler}>
			<Input
				value={newProjectTitle}
				onChange={(e) => setNewProjectTitle(e.target.value)}
			/>
		</form>
	);
}

export default EditProjectUnit;
