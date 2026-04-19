const SelectedProject = ({ project, onDelete }) => {
  if (!project) return null;

  const formattedDate = new Date(project.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Generate a colour accent based on first char
  const colors = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899"];
  const colorIndex =
    project.title.charCodeAt(0) % colors.length;
  const accentColor = colors[colorIndex];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="px-8 py-5 border-b border-[#1f1f1f] flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
            style={{ backgroundColor: accentColor }}
          >
            {project.title.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-[#ededed] font-semibold text-lg leading-tight">
              {project.title}
            </h1>
            <p className="text-[#525252] text-xs mt-0.5">
              Due {formattedDate}
            </p>
          </div>
        </div>

        <button
          onClick={onDelete}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[#737373] hover:text-[#ef4444] hover:bg-[#ef4444]/5 border border-transparent hover:border-[#ef4444]/20 text-sm font-medium transition-all duration-150"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M19 6l-1 14H6L5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M9 6V4h6v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Delete
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-8 py-7">
        <div className="max-w-2xl space-y-6">
          {/* Description card */}
          <div className="rounded-lg bg-[#111111] border border-[#262626] p-5">
            <h3 className="text-[#525252] text-xs font-medium uppercase tracking-wider mb-3">
              Description
            </h3>
            <p className="text-[#a3a3a3] text-sm leading-relaxed whitespace-pre-wrap">
              {project.description}
            </p>
          </div>

          {/* Meta row */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-lg bg-[#111111] border border-[#262626] p-4">
              <p className="text-[#525252] text-xs font-medium uppercase tracking-wider mb-1.5">
                Due Date
              </p>
              <p className="text-[#ededed] text-sm font-medium">{formattedDate}</p>
            </div>
            <div className="rounded-lg bg-[#111111] border border-[#262626] p-4">
              <p className="text-[#525252] text-xs font-medium uppercase tracking-wider mb-1.5">
                Status
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#10b981]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]" />
                Active
              </span>
            </div>
          </div>

          {/* Tasks placeholder */}
          <div className="rounded-lg bg-[#111111] border border-[#262626] p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#525252] text-xs font-medium uppercase tracking-wider">
                Tasks
              </h3>
              <button className="text-[#3b82f6] hover:text-[#2563eb] text-xs font-medium transition-colors">
                + Add task
              </button>
            </div>
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="mb-3 text-[#404040]" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p className="text-[#525252] text-sm">No tasks yet</p>
              <p className="text-[#404040] text-xs mt-1">Tasks will appear here once added.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedProject;
