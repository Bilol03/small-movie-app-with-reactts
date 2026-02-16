import './movie-list-item.css'

export function MovieListItem({movieName, rate, favourite}: any) {
	console.log(favourite)
    return (
		<li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
			<span className='list-group-item-label'>{movieName}</span>
            <input type="number" className='list-group-item-input' defaultValue={rate} />
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button" className='btn-cookie btn-sm'>
                    <i className='fas fa-cookie'></i>
                </button>
                <button type="button" className='btn-trash btn-sm'>
                    <i className='fas fa-trash'></i>
                </button>
                <i className='fas fa-star'></i>
            </div>
		</li>
	)
}
