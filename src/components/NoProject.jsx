const NoProject = ({ onStartAddProject }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-8">
      <div className="max-w-sm w-full text-center">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-[#1a1a1a] border border-[#262626] flex items-center justify-center mx-auto mb-6">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#525252" strokeWidth="1.5"/>
            <rect x="13" y="3" width="8" height="8" rx="1.5" stroke="#525252" strokeWidth="1.5"/>
            <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#525252" strokeWidth="1.5"/>
            <rect x="13" y="13" width="8" height="8" rx="1.5" stroke="#525252" strokeWidth="1.5"/>
          </svg>
        </div>

        <h2 className="text-[#ededed] text-xl font-semibold mb-2 text-balance">
          No projects yet
        </h2>
        <p className="text-[#737373] text-sm leading-relaxed mb-8 text-pretty">
          Get started by creating your first project. Organize your work and track progress all in one place.
        </p>

        <button
          onClick={onStartAddProject}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium transition-colors duration-150"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          Create a Project
        </button>
      </div>
    </div>
  );
};

export default NoProject;
