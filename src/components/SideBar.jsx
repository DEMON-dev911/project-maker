import Button from "./Button";

const SideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 rounded-r-2xl md:w-72 ">
      <h2 className="mb-8  font-bold uppercase md:text-xl text-stone-200">
        YOUR PROJECTS
      </h2>
      <div>
        <Button onClick={onStartAddProject}>ADD PROJECT</Button>
      </div>
      <ul className="mt-8">
        {projects.map((projects) => {
          let cssClasses = "text-xl w-full text-left px-4 py-2 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 hover:border-l-4";

          if (projects.id === selectedProjectId) {
            cssClasses += "bg-stone-800 text-stone-200"
          } else {
            cssClasses += " text-stone-400 "
          }

          return (
            <li key={projects.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(projects.id)}
              >
                {projects.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default SideBar;
