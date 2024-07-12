import { useContext } from 'react';
import { Context } from '@/App';

function ProjectUnit({ id, title }) {
	const [activeProject, setActiveProject] = useContext(Context);

	return (
		<li className="text-base">
			<button onClick={() => setActiveProject(id)}>{title}</button>
		</li>
	);
}

export default ProjectUnit;
