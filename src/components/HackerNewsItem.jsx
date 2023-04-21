import { 
	FaHeart ,
	FaRegClock
} from "react-icons/fa";
export const HackerNewsItem = ({
	item
}) => {
	const { created_at, author, story_title, story_url } = item
	const setDateAgo = date => {
		return "Date"
	}
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
			<div className="newsItemIcon">
				<FaHeart className="heartIcon"/>
			</div>
		</div>
	)
}
