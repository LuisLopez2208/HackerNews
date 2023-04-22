import { HackerNewsItem } from "./HackerNewsItem"
export const HackerNewsView = ({
  news,
  isLoading,
  isAll,
  handleSetIsAll,
  setAFav
}) => {
  const items = news
	const checkFields = item => {
		if( item.story_title != null && (item.author != null && item.author != "nullfield")  && item.story_url != null && item.created_at != null ){
			return item							
		}
	}
  const setId = () => {
    return Date.now().toString(36)
  }
  return (
      <main>	
          { (news.length == 0  && isLoading == false ) && <p>No news selected</p> }
          {
            isLoading ? 
            <div className="loader"></div> 
            :  
            items.filter( item => checkFields(item) ).map( ( item, index ) => (
              <HackerNewsItem
                setAFav={setAFav}
                key={ item.objectID }
                item={ {
                  id : item.objectID,
                  story_title: item.story_title,
                  author: item.author,
                  story_url: item.story_url,
                  created_at: item.created_at 
                } } 
              />
            ))
          }				
          
      </main>
    )
}
