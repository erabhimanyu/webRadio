import Collection from 'ampersand-rest-collection'
import Mee from './me'


export default Collection.extend ({
	url: 'http://playlist-royletzchange.rhcloud.com/list/',
	parse: (response)=> (
		response.data
	),
	mainIndex: 'id'
})