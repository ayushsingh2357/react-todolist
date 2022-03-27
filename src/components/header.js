import React from 'react'
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          {props.title}
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
          {props.searchbar ? <form class="d-flex position-absolute end-0">
            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form> : " "}
        </div>
      </div>
    </nav>
  )
}
Header.defaultProps = {
  title: "Your title here",
  searchbar: false
}


Header.propTypes = {
  title: PropTypes.string,
  searchbar: PropTypes.bool.isRequired
}