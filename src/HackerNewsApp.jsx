import { 
	HackerNewsTitle,
	HackerNewsFilter,
	HackerNewsView
} from './components'
import { useNews } from './hooks/useNews'
import './styles.css'
export const HackerNewsApp = () => {
	const { news, getNews, isLoading, isAll, handleSetIsAll, setAFav, getFavs } = useNews()

  return (
		<div className='main'>
			<HackerNewsTitle />
			<HackerNewsFilter 
				getNews={ getNews }
				getFavs={getFavs}
				isAll={isAll}
			/>
			<HackerNewsView 
				setAFav={setAFav}
				isAll={isAll}
				handleSetIsAll={handleSetIsAll}
				news={ news }
				isLoading={ isLoading }
			/>
		</div>
  )
}

 
 