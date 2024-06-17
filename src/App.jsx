import NewProject from "./components/NewProject";
import ProjectsSidebard from "./components/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebard />
      <NewProject />
    </main>
  );
}

export default App;
