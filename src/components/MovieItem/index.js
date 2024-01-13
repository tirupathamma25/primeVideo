import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div>
      <Popup
        modal
        trigger={<img src={thumbnailUrl} alt="thumbnail" />}
        className="popup-content"
      >
        {close => (
          <div className="popup-card">
            <div>
              <ReactPlayer url={videoUrl} />
            </div>
            <button
              type="button"
              data-testid="closeButton"
              className="trigger-button"
              onClick={() => close()}
            >
              <IoMdClose />
              <p className="close-text">close</p>
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
