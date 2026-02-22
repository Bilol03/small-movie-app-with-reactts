import { MovieListItem } from '../movie-list-item/movie-list-item'
import './movie-list.css'

function MovieList({ data, onDelete}: any) {
	return (
		<div className="movie-list">
			{data.map((item: any) => (
				<MovieListItem {...item} onDelete={() => onDelete(item.id)} />
			))}
		</div>
	)
}

export default MovieList
