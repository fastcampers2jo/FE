import { RefObject, useEffect } from "react";

interface IuseClose {
  ref: RefObject<HTMLElement>;
  onClose: () => void;
}

const useClose = ({ ref, onClose }: IuseClose) => {
  useEffect(() => {
    const onCloseHandler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", onCloseHandler);
    return () => {
      document.removeEventListener("mousedown", onCloseHandler);
    };
  }, [ref, onClose]);
};

export default useClose;
