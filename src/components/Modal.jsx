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
          <i className="fa-solid fa-xmark"></i>
        </a>
        <h2 className="author-name">{selectedUser.username}</h2>
        <p
          className="author-about"
          dangerouslySetInnerHTML={{ __html: selectedUser.about }}
        ></p>
        <div className="author-karma">
          <p>Karma: {selectedUser.karma}</p>
        </div>
      </div>
    </div>
  );
}
