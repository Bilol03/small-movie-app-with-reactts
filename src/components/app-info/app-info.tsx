import './app-info.css'
 
export const AppInfo = ({data}: any) => {
     const allMovies = data.length
    const favouriteMovies = data.filter((el: any) => el.favourite).length
	return <div className='app-info'>
        <p className='fs-3 text-uppercase'>Umumiy kinolar soni: {allMovies}</p>
        <p className='fs-3 text-uppercase'>Ko'rilgan kinolar soni: {favouriteMovies}</p>
    </div>
}
