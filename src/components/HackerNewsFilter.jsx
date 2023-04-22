import ReactIcon from "../img/reactIcon.svg"
import VueIcon from "../img/vueIcon.svg"
import AngularIcon from "../img/angularIcon.svg"
import
	Select, 
	{components} 
from 'react-select'
import {useEffect, useState} from "react";
export const HackerNewsFilter = ({
	getNews, 
	isAll,
	getFavs
}) => {
    const options = [
        {
            value: "angular",
            icon: AngularIcon,
            label: "Angular"
        }, {
            value: "reactjs",
            icon: ReactIcon,
            label: "Reacts"
        }, {
            value: "vuejs",
            icon: VueIcon,
            label: "Vuejs"
        }
    ]
    const [selectedNews, setSelectedNews] = useState(JSON.parse(localStorage.getItem('news')) ?? {});
		const [active, setIsActive ] = useState(true)
    const handleChange = value => {
        setSelectedNews(value);
        getNews(value)
				
    };
		useEffect(() => {
			localStorage.setItem("news",JSON.stringify( selectedNews ) )
		}, [selectedNews])
    const Option = props => (
        <components.Option {...props} className="newsOption">
            <img src={props.data.icon} alt="logo" className="newsLogo"/> {props.data.label}
        </components.Option>
    );
    const SingleValue = ({
        children,
        ...props
    }) => (
        <components.SingleValue {...props}>
            <img src={selectedNews.icon} alt="s-logo" className="selectedLogo"/> {children}
        </components.SingleValue>
    );
		const handleFavClick = event => {
			event.preventDefault()
			getFavs()
			setIsActive(!active)
		}
		const handleAllClick = event => {
			event.preventDefault()
			getNews(JSON.parse(localStorage.getItem('news')))
			setIsActive(!active)
		}
    return (
        <form>
            <div className="btnForm">
                <button onClick={ handleAllClick } className={`btnLeft btnFilter ${active ? "active" : ""}`}>All</button>
                <button onClick={ handleFavClick } className={`btnRight btnFilter ${!active ? "active" : ""}`}>My faves</button>
            </div>
            <div>
                {
                    isAll && (
                        <Select
														value={selectedNews}
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
                            }}/>
                    )
                }
            </div>
        </form>
    )
}
