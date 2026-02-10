import {AppFilter} from '../app-filter/app-filter'
import { AppInfo } from '../app-info/app-info'
import { MoviesAddForm } from '../movie-add-form/movie-add-form'
import MovieList from '../movie-list/movie-list'
import { SearchPanel } from '../search-panel/search-panel'

import './app.css'

export function App() {
	return (
		<div className="app font-monospace" >
			<div className="content">
				<AppInfo />
				<div className='search-panel'>
					<SearchPanel />
					<AppFilter />
				</div>
                <MovieList/>
                <MoviesAddForm />
			</div>
		</div>
	)
}
