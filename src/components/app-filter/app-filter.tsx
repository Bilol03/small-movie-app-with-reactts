import { Component } from 'react'
import './app-filter.css'

const btnsArr = [
	{ name: 'all', label: 'Barchasi' },
	{ name: 'mostViewers', label: "Ko'rilgan" },
	{ name: 'popular', label: 'Mashxur kinolar' },
]
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
				{btnsArr.map((btn) => {
					return (
						<button
							onClick={(e: any) => this.onChoose(e)}
							className="btn btn-dark"
							name={btn.name}>
							{btn.label}
						</button>
					)
				})}
			</div>
		)
	}
}
