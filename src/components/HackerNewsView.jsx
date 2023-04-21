import { HackerNewsItem } from "./HackerNewsItem"
import angular from '../mocks/angular-results.json'
export const HackerNewsView = () => {
  const items = angular.hits
	const checkFields = item => {
		if( item.story_title != null && (item.author != null && item.author != "nullfield")  && item.story_url != null && item.created_at != null ){
			return item							
		}
	}
  return (
      <main>	
          {
            items.filter( item => checkFields(item) ).map( ( item, index ) => (
              <HackerNewsItem
                key={ item.story_id + index}
                item={ {
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
