import { Component } from 'react'
import './movie-list-item.css'


export class MovieListItem extends Component {
    state: any
	constructor(props: any) {
		super(props)
		this.state = {
			favourite: false,
            like: false
		}
	}
	onFavourite = () => {
		const { favourite }: any = this.state
		this.setState({
			favourite: !favourite,
		})
	}
	onLike = () => {
		const { like }: any = this.state
		this.setState({
			like: !like,
		})
	}



	render() {
		const { name, views, id }: any = this.props
		const { favourite, like }: any = this.state

		return (
			<li
				className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'} ${like && 'like'}`}>
				<span onClick={this.onLike} className="list-group-item-label">{name}</span>
				<input
					id={id}
					type="number"
					className="list-group-item-input"
					defaultValue={views}
				/>
				<div className="d-flex justify-content-center align-items-center">
					<button
						type="button"
						className="btn-cookie btn-sm"
						onClick={this.onFavourite}>
						<i className="fas fa-cookie"></i>
					</button>
					<button type="button" className="btn-trash btn-sm">
						<i className="fas fa-trash"></i>
					</button>
					<i className="fas fa-star"></i>
				</div>
			</li>
		)
	}
}
