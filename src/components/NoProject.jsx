import noProjectIMG from "../assets/no-projects.png";
import Button from "./Button";

const NoProject = ({ onStartAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img
        src={noProjectIMG}
        alt="no-project"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4  ">
        No Projects Added
      </h2>
      <p className="text-stone-400 mb-4">Add a new project to get started.</p>
      <p>
        <Button onClick={onStartAddProject}>
          Create New PROJECT
        </Button>
      </p>
    </div>
  );
};

export default NoProject;
