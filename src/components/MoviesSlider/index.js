import Slider from 'react-slick'
import MovieItem from '../MovieItem'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MoviesSlider = props => {
  const {moviesList} = props
  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  const renderActionMovie = movieItem => {
    if (movieItem.categoryId === 'ACTION') {
      return <MovieItem movieDetails={movieItem} key={movieItem.id} />
    }
    return null
  }

  const renderComedyMovie = movieItem => {
    if (movieItem.categoryId === 'COMEDY') {
      return <MovieItem movieDetails={movieItem} key={movieItem.id} />
    }
    return null
  }

  return (
    <div className="slider-container">
      <h1 className="heading">Action Movies</h1>
      <Slider {...settings}>
        {moviesList.map(eachItem => renderActionMovie(eachItem))}
      </Slider>
      <h1 className="heading">Comedy Movies</h1>
      <Slider {...settings}>
        {moviesList.map(eachItem => renderComedyMovie(eachItem))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
