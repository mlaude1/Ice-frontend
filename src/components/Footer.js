import React from 'react'
import { HiMusicNote } from 'react-icons/hi'

const Footer = () => {
  return (
    <div>
      <footer class="footer">
      <div class="content has-text-centered">
        <h2 className='title is-size-5'>Ice Cream Tunes <HiMusicNote color='pink' /> </h2>
        <audio src={"https://res.cloudinary.com/asianboymandude/video/upload/v1640178358/Ice-cream-truck-music_wknlwf.mp3"} controls>
          Your browser is unsupported
        </audio>
        <p>
          <strong>Mott & Jerry's</strong> is a thriving business along with its sister company <strong>Häagen Mottzs.</strong> <br /> <br />
          Follow <a href="https://mlaude-portolfio.netlify.app/" target={"_blank"}>Matthew Laude</a> on his mission to disrupt the ice cream industry.
        </p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
