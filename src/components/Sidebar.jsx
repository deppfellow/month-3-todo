import React from 'react';
import ProjectForm from '@/components/ProjectForm';
import ProjectList from '@/components/ProjectList';

export const Context = React.createContext();

function Sidebar({ addNewProject, value, projects }) {
	return (
		<div className="sidebar w-3/12 min-w-48 border border-gray-700 bg-gray-300">
			<h1 className="text-bold mx-4 my-3 text-4xl">SEPIK</h1>
			<ProjectForm addNewProject={addNewProject} />
			<Context.Provider value={value}>
				<ProjectList projects={projects} />
			</Context.Provider>
		</div>
	);
}

export default Sidebar;
