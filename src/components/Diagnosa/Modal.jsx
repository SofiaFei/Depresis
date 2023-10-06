// Modal.js
import React from 'react';

function Modal({ isOpen, title, content, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md w-2/3">
                <button onClick={onClose} className="float-right text-lg font-bold">×</button>
                <h2 className="text-lg font-bold mb-4">{title}</h2>
                <pre>{content}</pre>
            </div>
        </div>
    );
}

export default Modal;
