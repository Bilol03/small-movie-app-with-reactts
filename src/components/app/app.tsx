import { AppFilter } from '../app-filter/app-filter'
import { AppInfo } from '../app-info/app-info'
import { MoviesAddForm } from '../movie-add-form/movie-add-form'
import MovieList from '../movie-list/movie-list'
import { SearchPanel } from '../search-panel/search-panel'

import './app.css'

export function App() {
	const data = [
		{
			name: 'Terminator',
			views: 102,
		},
		{
			name: 'The Godfather',
			views: 98,
		},
		{
			name: 'The Dark Knight',
			views: 120,
		},
        {
            name: 'Pulp Fiction',
            views: 110,
        }
	]
	return (
		<div className="app font-monospace">
			<div className="content">
				<AppInfo />
				<div className="search-panel">
					<SearchPanel />
					<AppFilter />
				</div>
				<MovieList data={data} />
				<MoviesAddForm />
			</div>
		</div>
	)
}
