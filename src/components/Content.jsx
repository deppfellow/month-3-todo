import { Trash, Pencil } from 'lucide-react';
import { Button } from '@/components/ui/button';

import EditProjectUnit from '@/components/EditProjectUnit';
import TaskForm from '@/components/TaskForm';
import TaskUnit from '@/components/TaskUnit';

function Content({ projectProps, taskProps }) {
	const {
		editProject,
		deleteProject,
		setEditProjectState,
		editProjectState,
		currentProject,
		activeTitle,
	} = projectProps;

	const { addNewTask, toggleTask, editTask, deleteTask, activeTaskList } =
		taskProps;

	return (
		<div className="content flex grow flex-col">
			<div className="mx-4 my-2 mb-6 flex items-center gap-2 text-2xl font-semibold">
				<h2 className="my-2 flex-grow">
					{editProjectState ? (
						<EditProjectUnit
							editProject={editProject}
							setEditProjectState={setEditProjectState}
							activeTitle={activeTitle}
						/>
					) : (
						activeTitle
					)}
				</h2>
				<Button
					variant="outline"
					onClick={() => setEditProjectState(true)}
				>
					<Pencil className="mr-2 h-4 w-4" /> Edit
				</Button>
				{currentProject.id === 'initial-project' ? (
					<Button
						disabled
						variant="default"
						onClick={() => {
							deleteProject(currentProject.id);
						}}
					>
						<Trash className="mr-2 h-4 w-4" /> Delete
					</Button>
				) : (
					<Button
						variant="destructive"
						onClick={() => {
							deleteProject(currentProject.id);
						}}
					>
						<Trash className="mr-2 h-4 w-4" /> Delete
					</Button>
				)}
			</div>

			<div className="mx-4 my-2 flex grow flex-col">
				<TaskForm addNewTask={addNewTask} />
				<ul className="grow gap-1">
					{activeTaskList.length === 0 ? (
						<div className="text-medium flex h-full items-center justify-center text-lg">
							No task yet
						</div>
					) : (
						activeTaskList.map((task) => {
							return (
								<TaskUnit
									taskId={task.taskId}
									desc={task.desc}
									isCompleted={task.isCompleted}
									key={task.taskId}
									taskFunction={{
										toggleTask,
										editTask,
										deleteTask,
									}}
								/>
							);
						})
					)}
				</ul>
			</div>
		</div>
	);
}

export default Content;
