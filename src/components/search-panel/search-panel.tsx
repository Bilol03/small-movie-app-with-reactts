import { Component } from 'react'
import './search-panel.css'

export class SearchPanel extends Component {
	state: any
	constructor(props: any) {
		super(props)
		this.state = {
			term: '',
		}
	}
	updateTerm = (el: any) => {
		const { updateTermHandler }: any = this.props
		const term = el.target.value.toLowerCase()
		this.setState({
			term,
		})
		updateTermHandler(term)
	}
	render() {
		return (
			<input
				type="text"
				className="search-panel search-input form-control"
				placeholder="Qidiruv..."
				onChange={this.updateTerm}
				// value={this.state.term}
			/>
		)
	}
}
