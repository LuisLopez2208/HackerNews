import { 
	HackerNewsTitle,
	HackerNewsFilter,
	HackerNewsView
} from './components'
import './styles.css'
export const HackerNewsApp = () => {
  return (
	<div className='main'>
		<HackerNewsTitle />
		<HackerNewsFilter />
		<HackerNewsView />
	</div>
  )
}

 
