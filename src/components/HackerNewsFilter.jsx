import ReactIcon from "../img/reactIcon.svg"
import VueIcon from "../img/vueIcon.svg"
import AngularIcon from "../img/angularIcon.svg"
import 
	Select, 
	{ components } 
from 'react-select'
import { useState } from "react";
export const HackerNewsFilter = () => {
	const options = [{
		value   : 1,
		icon : AngularIcon,
		label: "Angular"
	},{
		value   : 2,
		icon : ReactIcon,
		label: "Reacts"
	},{
		value   : 3,
		icon : VueIcon,
		label: "Vuejs"
	}]
	const [selectedNews, setSelectedNews] = useState(options[0]);
	const handleChange = value => {
		setSelectedNews(value);
	  };
	const Option = props => (
		<components.Option {...props} className="newsOption">
			<img src={props.data.icon} alt="logo" className="newsLogo" />
			{props.data.label}
		</components.Option>
	);
	const SingleValue = ({ children, ...props }) => (
		<components.SingleValue {...props}>
		  <img src={selectedNews.icon} alt="s-logo" className="selectedLogo" />
		  {children}
		</components.SingleValue>
	);
	return (
		<form>
			<div className="btnForm">
				<button className="btnLeft btnFilter active">All</button>
				<button className="btnRight btnFilter">My faves</button>
			</div>
			<div>
				<Select 
					placeholder="Select your news"
				 	onChange={handleChange}
					className="dropNews" 
					options={options} 
					styles={{
						singleValue: base => ({
						  ...base,
						  display: "flex",
						  alignItems: "center"
						})
					  }}
					components={{
						Option,
						SingleValue
					  }}
				/>			
			</div>
		</form>
	)
}
