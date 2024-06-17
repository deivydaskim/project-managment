import { useState } from 'react';

import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebard from './components/ProjectsSidebar';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
  });

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebard />
      <NoProjectSelected />
    </main>
  );
}

export default App;
