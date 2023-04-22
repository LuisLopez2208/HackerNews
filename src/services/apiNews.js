export async function getNewsApi(newsSelected){
	const res = await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=${newsSelected}&page=0`)
	const json = await res.json()
	return json
}