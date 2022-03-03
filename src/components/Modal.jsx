import React, { useEffect } from 'react';
import User from '../User';

export default function Modal({ selectedUser, setSelectedUser }) {
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = selectedUser ? 'hidden' : 'auto';
  }, [{ selectedUser }]);

  if (!selectedUser) return <></>;

  return (
    <div className="modal-container" onClick={() => setSelectedUser(null)}>
      <div className="modal-window">
        <a
          className="btn btn-icon btn-close"
          onClick={() => setSelectedUser(null)}
        >
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </a>
        <h2 className="author-name">{selectedUser.username}</h2>
        <p className="author-about">
          {selectedUser.about
            ? selectedUser.about
            : 'This user prefers to keep an air of anonymity about them.'}
        </p>
        <div className="author-karma">
          <i className="fa-solid fa-thumbs-up"></i>
          <p>Karma: {selectedUser.karma}</p>
        </div>
      </div>
    </div>
  );
}
