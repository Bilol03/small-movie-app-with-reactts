import { Component } from 'react'
import './movie-add-form.css'

export class MoviesAddForm extends Component {
	state: any
	constructor(props: any) {
		super(props)
		this.state = {
			name: '',
			views: '',
		}
	}
	onChangeInput = (e: any) => {
		this.setState({
			[e.target.name]: e.target.value,
			[e.target.views]: +e.target.value,
		})
	}

	addFormHandler = (e: any) => {
		e.preventDefault()
		const { name, views } = this.state

		this.props.addForm({ name, views })

		this.setState({
			name: '',
			views: '',
		})
	}
	render() {
		const { name, views } = this.state

		return (
			<div className="movie-add-form">
				<h3>Yangi kino qo'shish</h3>
				<form
					className="add-form d-flex"
					onSubmit={(e) => this.addFormHandler(e)}>
					<input
						type="text"
						name="name"
						className="form-control new-post-label"
						placeholder="Qaysi kino"
						onChange={this.onChangeInput}
						value={name}
					/>
					<input
						type="number"
						name="views"
						className="form-control new-post-label"
						placeholder="Necha marotaba korilgan"
						onChange={this.onChangeInput}
						value={views}
					/>
					<button type="submit" className="btn btn-outline-dark">
						Qo'shish
					</button>
				</form>
			</div>
		)
	}
}
