import NewTask from './NewTask';

export default function Tasks({
  tasks,
  onAddTask,
  onRemoveTask,
  selectedProjectId,
}) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 ? (
        <p className="text-stone-800 my-4">
          This project dose not have any tasks
        </p>
      ) : (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => {
            if (task.projectId === selectedProjectId) {
              return (
                <li key={task.id} className="flex justify-between my-4">
                  <span>{task.text}</span>
                  <button
                    onClick={() => onRemoveTask(task.id)}
                    className="text-stone-700 hover:text-red-500"
                  >
                    Remove Task
                  </button>
                </li>
              );
            }
          })}
        </ul>
      )}
    </section>
  );
}
