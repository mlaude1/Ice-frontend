import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
      <div class="content has-text-centered">
        <h2 className='title is-size-5'>Ice Cream Tunes</h2>
        <audio src={"https://res.cloudinary.com/asianboymandude/video/upload/v1640178358/Ice-cream-truck-music_wknlwf.mp3"} controls>
          Your browser is unsupported
        </audio>
        <p>
          <strong>Bulma</strong> by <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
          is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
