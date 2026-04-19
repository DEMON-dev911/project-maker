import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

const NewProject = ({ onAdd, onCancel }) => {
  const modalRef = useRef(null);
  const title = useRef(null);
  const description = useRef(null);
  const date = useRef(null);

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Got it">
        <div className="flex items-start gap-3 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#ef4444]/10 border border-[#ef4444]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h2 className="text-[#ededed] font-semibold text-base mb-1">Missing fields</h2>
            <p className="text-[#737373] text-sm leading-relaxed">
              Please fill in all fields before saving the project.
            </p>
          </div>
        </div>
      </Modal>

      <div className="h-full flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-8 py-4 border-b border-[#1f1f1f]">
          <div>
            <h1 className="text-[#ededed] font-semibold text-base">New Project</h1>
            <p className="text-[#525252] text-xs mt-0.5">Fill in the details below to create your project.</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onCancel}
              className="px-3 py-1.5 rounded-md text-[#737373] hover:text-[#ededed] hover:bg-[#1a1a1a] text-sm font-medium transition-colors duration-150"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-1.5 rounded-md bg-[#3b82f6] hover:bg-[#2563eb] text-white text-sm font-medium transition-colors duration-150"
            >
              Save Project
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto px-8 py-8">
          <div className="max-w-xl">
            <Input ref={title} label="Project Title" type="text" placeholder="e.g. Website Redesign" />
            <Input ref={description} label="Description" isTextArea placeholder="Describe what this project is about..." />
            <Input type="date" ref={date} label="Due Date" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProject;
