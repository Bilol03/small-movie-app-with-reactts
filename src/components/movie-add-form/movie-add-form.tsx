import { Component } from 'react'
import './movie-add-form.css'

export class MoviesAddForm extends Component {
    state: any
	constructor(props: any) {
		super(props)
        this.state ={
            name: '',
            view: ''
        }
	}
	onChangeInput = (e: any) => {
        this.setState({
            name: this.state.name +e.target.name.value,
            view: this.state.view + e.target.view.value
        })
    }
	onAddMovie = () =>  {
        console.log(this.state.name)
    }
	render() {
		return (
			<div className="movie-add-form">
				<h3>Yangi kino qo'shish</h3>
				<form className="add-form d-flex">
					<input
						type="text"
                        name='name'
                        onChange={this.onAddMovie}
						className="form-control new-post-label"
						placeholder="Qaysi kino"
					/>
					<input
						type="number"
                        name='view'
                        onChange={this.onAddMovie}
						className="form-control new-post-label"
						placeholder="Necha marotaba korilgan"
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
