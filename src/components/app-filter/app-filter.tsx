import { Component } from 'react'
import './app-filter.css'

export class AppFilter extends Component {
	constructor(props: any) {
		super(props)
	}

	onChoose = (e: any) => {
		const { updateFilterHandler }: any = this.props
		updateFilterHandler(e.target.name)
	}
	render() {
		return (
			<div className="btn-group">
				<button
					onClick={(e: any) => this.onChoose(e)}
					className="btn btn-dark"
					name="all">
					Barchasi
				</button>
				<button
					onClick={(e: any) => this.onChoose(e)}
					className="btn btn-outline-dark"
					name="mostViewers">
					Ko'rilgan
				</button>
				<button
					onClick={(e: any) => this.onChoose(e)}
					className="btn btn-outline-dark"
					name="popular">
					Yaxshi
				</button>
			</div>
		)
	}
}
