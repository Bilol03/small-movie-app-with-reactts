import { MovieListItem } from '../movie-list-item/movie-list-item'
import './movie-list.css'

function MovieList({ data }) {
	return (
		<div className="movie-list">
			{data.map((item) => (
				<MovieListItem movieName={item.name} rate={item.views} />
			))}
		</div>
	)
}


export default MovieList
