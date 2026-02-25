import { v4 as uuid4v } from 'uuid'
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
					like: true,
				},
				{
					id: 2,
					name: 'The Godfather',
					views: 98,
					favourite: false,
					like: true,
				},
				{
					id: 3,
					name: 'The Dark Knight',
					views: 120,
					favourite: false,
					like: true,
				},
				{
					id: 4,
					name: 'Pulp Fiction',
					views: 110,
					favourite: true,
					like: true,
				},
			],
			term: ''
		}
	}
	onDelete = (id: any) => {
		this.setState(({ data }: any) => ({
			data: data.filter((el: any) => el.id != id),
		}))
	}

	addForm = (item: any) => {
		const { name, views } = item
		this.setState(({ data }: any) => ({
			data: [...data, { name, views: views, id: uuid4v() }],
		}))
	}

	onLike = (id: any) => {
		this.setState(({ data }: any) => {
			return {
				data: data.map((el: any) =>
					el.id == id ? { ...el, like: !el.like } : el,
				),
			}
		})
	}

	onFavourite = (id: any) => {
			this.setState(({ data }: any) => {
			return {
				data: data.map((el: any) =>
					el.id == id ? { ...el, favourite: !el.favourite } : el,
				),
			}
		})
	}

	onSearch =(arr: any, term: any) => {
		if(term.length === 0) return arr
		return arr.filter((el: any) => el.name.toLowerCase().indexOf(term.toLowerCase()) > -1)
	}

	updateTermHandler = (term: any)  => {
		console.log(term)
		this.setState( {
			term
		})
	}
	render() {
		const { data, term } = this.state
		const visibleData = this.onSearch(data, term)

		return (
			<div className="app font-monospace">
				<div className="content">
					<AppInfo data={visibleData}/>
					<div className="search-panel">
						<SearchPanel updateTermHandler={this.updateTermHandler}/>
						<AppFilter />
					</div> 
					<MovieList
						data={visibleData}
						onDelete={this.onDelete}
						onLike={this.onLike}
						onFavourite={this.onFavourite}
					/>
					<MoviesAddForm addForm={this.addForm} />
				</div>
			</div>
		)
	}
}
