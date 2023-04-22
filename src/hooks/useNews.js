import { Children, useState } from "react"
import { getNewsApi } from "../services/apiNews"
export function useNews(){
	const [ news, setNews ] = useState([])
	const [isLoading, setIsLoading ] = useState(false) 
	const [isAll, setIsAll] = useState(true)
	const handleSetIsAll = () => {
		setIsAll( !isAll )
	 }
	const getNews = async newsSelected =>{
		setIsAll(true)
		if(!!!newsSelected.value )
		return
		try {
			
			setIsLoading(true)
			const hackerNews = await getNewsApi(newsSelected.value)
			setNews(hackerNews.hits)	
			setIsLoading(false)
		} catch (error) {
			if (error instanceof SyntaxError) {
				console.log('There was a SyntaxError', error);
			} else {
				console.log('There was an error', error);
			}
		}		
	}
	const setAFav = ( fav, isFav )  => {
		const favs = JSON.parse(localStorage.getItem('favs')) ?? []
		localStorage.removeItem("favs")
		if( isFav ){
			if( favs.length == 0 || favs.every( favIterator => favIterator.id != fav[0].id ) ){
				localStorage.setItem("favs",JSON.stringify([...favs, fav[0] ] ) )
			}
		}else{
			const newsFavs = favs.filter( favIterator => favIterator.id != fav[0].id )
			localStorage.setItem("favs",JSON.stringify( newsFavs ) )
		}
	}
	const getFavs = () => {
		setNews( [...JSON.parse(localStorage.getItem('favs')) ?? [] ] )
		setIsAll(false)
	}
	return {
		news,
		getNews,
		isLoading,
		isAll,
		handleSetIsAll,
		setAFav,
		getFavs
	}
}