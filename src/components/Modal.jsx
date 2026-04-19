import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-black/70 backdrop:backdrop-blur-sm bg-[#111111] border border-[#262626] rounded-xl shadow-2xl p-6 max-w-sm w-full text-[#ededed]"
    >
      {children}
      <form method="dialog" className="mt-5 flex justify-end">
        <button className="px-4 py-2 rounded-md bg-[#1a1a1a] hover:bg-[#262626] border border-[#262626] text-[#ededed] text-sm font-medium transition-colors duration-150">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.querySelector("#modal-root")
  );
});

export default Modal;
