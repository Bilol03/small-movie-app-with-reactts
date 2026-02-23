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

	render() {
		const { name, view }: any = this.state
		const { addForm }: any = this.props

		return (
			<div className="movie-add-form">
				<h3>Yangi kino qo'shish</h3>
				<form className="add-form d-flex" onSubmit={(e) => addForm(e, {name, view})}>
					<input
						type="text"
						name="name"
						className="form-control new-post-label"
						placeholder="Qaysi kino"

					/>
					<input
						type="number"
						name="view"
						className="form-control new-post-label"
						placeholder="Necha marotaba korilgan"

					/>
					<button
						type="submit"

						className="btn btn-outline-dark">
						Qo'shish
					</button>
				</form>
			</div>
		)
	}
}
