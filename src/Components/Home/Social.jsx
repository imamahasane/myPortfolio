import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/imamahasane"
        className="home__social-icon"
        target="_blank"
        rel='noreferrer'
      >
        <i class="uil uil-github-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/imamahasane/"
        className="home__social-icon"
        target="_blank"
        rel='noreferrer'
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://www.facebook.com/imamahasane"
        className="home__social-icon"
        target="_blank"
        rel='noreferrer'
      >
        <i class="uil uil-facebook-f"></i>
      </a>
    </div>
  );
};

export default Social;
