import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
      <a className="navbar-brand" href="/#">
  <img src="https://png.pngtree.com/template/20210709/ourmid/pngtree-shopping-logo-design-image_545854.jpg" style={{ width: '50px', height: '50px', borderRadius: '50%' }} alt="Logo" />
</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Features</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
