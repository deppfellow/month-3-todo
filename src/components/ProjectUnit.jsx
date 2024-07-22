import { useContext } from 'react';
import { Context } from '@/components/Sidebar';
import { Button } from '@/components/ui/button';

function ProjectUnit({ id, title }) {
	const [activeProject, setActiveProject] = useContext(Context);

	return (
		<li className="flex flex-col text-base">
			{activeProject === id ? (
				<Button size="xs" disabled>
					{title}
				</Button>
			) : (
				<Button size="xs" onClick={() => setActiveProject(id)}>
					{title}
				</Button>
			)}
			{/* <Button size="xs" onClick={() => setActiveProject(id)}>
				{title}
			</Button> */}
		</li>
	);
}

export default ProjectUnit;
