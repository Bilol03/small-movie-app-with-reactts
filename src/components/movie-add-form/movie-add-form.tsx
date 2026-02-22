import { Component } from 'react'
import './movie-add-form.css'

export class MoviesAddForm extends Component {
	state: any
	constructor(props: any) {
		super(props)
		this.state = {
			name: '',
			view: '',
		}
	}
	onChangeInput = (e: any) => {
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.view]: e.target.value,
		})
	}
	onAddMovie = () => {
		console.log(this.state.name)
	}
	render() {
		const {name, view}:any = this.state
		return (
			<div className="movie-add-form">
				<h3>Yangi kino qo'shish</h3>
				<form className="add-form d-flex">
					<input
						type="text"
						name="name"
						onChange={this.onAddMovie}
						className="form-control new-post-label"
						placeholder="Qaysi kino"
						value={name}
					/>
					<input
						type="number"
						name="view"
						onChange={this.onAddMovie}
						className="form-control new-post-label"
						placeholder="Necha marotaba korilgan"
						value={view}

					/>
					<button
						type="submit"
						onSubmit={this.onAddMovie}
						className="btn btn-outline-dark">
						Qo'shish
					</button>
				</form>
			</div>
		)
	}
}
