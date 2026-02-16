import { MovieListItem } from '../movie-list-item/movie-list-item'
import './movie-list.css'

function MovieList({ data }: any) {
	return (
		<div className="movie-list">
			{data.map((item: any) => (
				<MovieListItem  {...item} />
			))}
		</div>
	)
}


export default MovieList
