import { useState } from "react";

// useModal now supports an optional payload (generic data) and exposes a setter
// so consumers can store form state or any data associated with the modal.
const useModal = (initialIsOpen = false, initialPayload = null) => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);
  const [payload, setPayload] = useState(initialPayload);

  // open can optionally accept a payload to set when opening
  const open = (data) => {
    console.log("Opening modal with data:", data);
    if (data !== undefined) setPayload(data);
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    open,
    close,
    payload,
    setPayload,
  };
};

export default useModal;
