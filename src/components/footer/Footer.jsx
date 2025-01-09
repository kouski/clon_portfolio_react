import React from 'react'

export default function Footer() {
  return (
    <footer className="container-fluid d-flex bg-light mt-5">

    <ul className="logo_list d-flex mb-4 mt-3">
      <li className="ms-3 me-3 list-unstyled">
        <a href="https://github.com" id="profile-link" target="_blank"><img id="github"
            src="/src/images/GitHub-Mark-32px.png" alt="Github mark" /></a>
      </li>
      <li className="ms-3 list-unstyled">
        <a href="mailto:info@gamarrawebdesign.com"><img id="email" src="/src/images/email.png" alt="logo email" /></a>
      </li>


    </ul>
  </footer>
  )
}
