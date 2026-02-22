import { AppFilter } from '../app-filter/app-filter'
import { AppInfo } from '../app-info/app-info'
import { MoviesAddForm } from '../movie-add-form/movie-add-form'
import MovieList from '../movie-list/movie-list'
import { SearchPanel } from '../search-panel/search-panel'

import { Component } from 'react'
import './app.css'

export class App extends Component {
	state: any
	constructor(props: any) {
		super(props)
		this.state = {
			data: [
				{
					id: 1,
					name: 'Terminator',
					views: 102,
					favourite: true,
				},
				{
					id: 2,
					name: 'The Godfather',
					views: 98,
					favourite: false,
				},
				{
					id: 3,
					name: 'The Dark Knight',
					views: 120,
					favourite: false,
				},
				{
					id: 4,
					name: 'Pulp Fiction',
					views: 110,
					favourite: true,
				},
			],
		}
	}
	onDelete = (id: number) => {
		const { data } = this.state

		data.filter((el:any) => el.id != id)
		console.log(data)
	}
	render() {
		const { data } = this.state
		return (
			<div className="app font-monospace">
				<div className="content">
					<AppInfo />
					<div className="search-panel">
						<SearchPanel />
						<AppFilter />
					</div>
					<MovieList data={data} onDelete={this.onDelete} />
					<MoviesAddForm />
				</div>
			</div>
		)
	}
}
