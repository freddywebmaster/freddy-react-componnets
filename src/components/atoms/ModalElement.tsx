import React, { useState } from "react";

export interface ModalElementProps {
  children: JSX.Element;
  modal: (close: () => void) => JSX.Element;
  cardClass?: string;
}

const ModalElement: React.FC<ModalElementProps> = ({ children, modal }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      {showModal && (
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-900/75">
          <div className="w-full bg-white">
            {modal(() => setShowModal(false))}
          </div>
        </div>
      )}
      <div onClick={() => setShowModal(true)}>{children}</div>
    </>
  );
};

export default ModalElement;
