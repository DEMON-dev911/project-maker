const SideBar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-64 flex-shrink-0 flex flex-col bg-[#111111] border-r border-[#262626] h-full">
      {/* Header */}
      <div className="px-5 pt-6 pb-4 border-b border-[#1f1f1f]">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-7 h-7 rounded-md bg-[#3b82f6] flex items-center justify-center flex-shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 7h18M3 12h18M3 17h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[#ededed] font-semibold text-sm tracking-tight">ProjectFlow</span>
        </div>

        <button
          onClick={onStartAddProject}
          className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium transition-colors duration-150"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          New Project
        </button>
      </div>

      {/* Project List */}
      <div className="flex-1 overflow-y-auto px-3 py-3">
        <p className="text-[#525252] text-xs font-medium uppercase tracking-widest mb-2 px-2">
          Projects
        </p>

        {projects.length === 0 ? (
          <p className="text-[#525252] text-xs px-2 py-3">No projects yet.</p>
        ) : (
          <ul className="space-y-0.5">
            {projects.map((project) => {
              const isActive = project.id === selectedProjectId;
              return (
                <li key={project.id}>
                  <button
                    onClick={() => onSelectProject(project.id)}
                    className={`w-full flex items-center gap-2.5 px-2 py-2 rounded-md text-left text-sm transition-colors duration-150 group ${
                      isActive
                        ? "bg-[#1a1a1a] text-[#ededed]"
                        : "text-[#737373] hover:bg-[#1a1a1a] hover:text-[#ededed]"
                    }`}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        isActive ? "bg-[#3b82f6]" : "bg-[#404040] group-hover:bg-[#525252]"
                      }`}
                    />
                    <span className="truncate font-medium">{project.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-4 border-t border-[#1f1f1f]">
        <p className="text-[#404040] text-xs">{projects.length} project{projects.length !== 1 ? "s" : ""}</p>
      </div>
    </aside>
  );
};

export default SideBar;
