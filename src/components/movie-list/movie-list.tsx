import { Component } from 'react'
import { MovieListItem } from '../movie-list-item/movie-list-item'
import './movie-list.css'

class MovieList extends Component {
	constructor(props: any) {
		super(props)
	}

	render() {
		const { data, onDelete, onLike, onFavourite}: any = this.props
		return (
			<div className="movie-list">
				{data.map((item: any) => (
					<MovieListItem
						{...item}
						onDelete={() => onDelete(item.id)}
						onLike={() => onLike(item.id)}
						onFavourite={() => onFavourite(item.id)}
					/>
				))}
			</div>
		)
	}
}

export default MovieList
