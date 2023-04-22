import { 
	useState, 
	useEffect
} from "react";
import { 
	FaHeart ,
	FaRegHeart,
	FaRegClock
} from "react-icons/fa";
export const HackerNewsItem = ({
	item,
	setAFav
}) => {
	const setIsFav = item => {
		const favsStorage = JSON.parse(localStorage.getItem('favs')) ?? []	
		if( favsStorage.some( favIterator => favIterator.id == item.id ) ){
			item.fav = true 
		}
	}
	setIsFav(item)
	const { created_at, author, story_title, story_url, id, fav } = item	
	const [favState, setFavState ] = useState(fav)
	
	const setDateAgo = date => {
		return "Date"
	}
	const handleFavClick = () => {	
		setFavState(!favState)
		
	}
	useEffect( () => {
		setAFav([{
			created_at, author, story_title, story_url, id, fav : favState
		}],favState)
	},[ favState]) 
	return (
		<div className="newsItem">
			<div className="newsItemText">
				<div className="newsItemAgo">
					<FaRegClock />
					<p>{ setDateAgo(created_at) } <span>{ author }</span></p>
				</div>
				<div className="newsItemTitle">
					<p>{ story_title }</p>
				</div>

			</div>
			<div className="newsItemIcon" onClick={ handleFavClick }>
				{ favState ? <FaHeart className="heartIcon" /> : <FaRegHeart className="heartIcon"/>}
			</div>
		</div>
	)
}
