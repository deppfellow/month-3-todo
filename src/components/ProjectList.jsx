import ProjectUnit from './ProjectUnit';

function ProjectList({ projects }) {
    return (
        <div className="m-4">
            <h2 className="my-2 text-2xl font-semibold">Project List</h2>
            <ul>
                {projects.map((project) => {
                    return (
                        <ProjectUnit
                            id={project.id}
                            title={project.title}
                            taskList={project.taskList}
                            key={project.id}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default ProjectList;