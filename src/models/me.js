import Model from 'ampersand-model'
import collection from './me-collection'
import xhr from 'xhr'
import YoutubeHelper from '../helpers/youtubeHelper'

export default Model.extend({
	
	url:'https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyBgMSJtrr13Q4qTdyOrGktD0Rl0OuOCoag&&part=snippet,statistics&fields=items(id,snippet,statistics)',
	props: {
		title: 'string',
		id: 'string'
	},
	parse: (response)=> (
		response.items
	),
	collections: {
		collect: collection
	},
	//fetching initial data when the app starts
	fetchInitialData(){
		Model.prototype.fetch.apply(this, arguments)
		this.collect.fetch()
	},
	//One go method to delete videos
	removeVideo(key) {
		xhr.post('http://playlist-royletzchange.rhcloud.com/remove/' + key
		, (err, req, body)  => {

			if(err) {
						
				console.error('opps! Something went wrong.')
						return false
					}
				else {
					app.me.collect.remove(key)
					return true
				}
		})
	},
	//Getting basic information(Title, duration) from youtube api for the given youtube ID
	getVideoInformation(link) {
		
		if(YoutubeHelper.checkURL(link)) {
			//checking the URL
			let youtubeID = YoutubeHelper.checkURL(link)
			
			//fetching data from the youtube api after vaidation froma the given ID
			xhr(`https://www.googleapis.com/youtube/v3/videos?id=${youtubeID}&key=AIzaSyBgMSJtrr13Q4qTdyOrGktD0Rl0OuOCoag&&&part=snippet,contentDetails`,
				
				(err, req, body) => {
						body = JSON.parse(body)
						console.log(body.items)

						let title, duration
						title = body.items['0'].snippet.title
						duration = YoutubeHelper.convertToSeconds(body.items['0'].contentDetails.duration)

						

						//Sending to be added to the list
						app.me.addVideo(title, youtubeID, duration)
					}
				)


	
		}


	},
	addVideo(title, youtubeID, duration) {
		//Making the data string
						let data = JSON.stringify({data:
							{title: title,
							 id: youtubeID, 
							 duration: duration
							}
						})
		//Posting data
		xhr.post("http://playlist-royletzchange.rhcloud.com/add",{
				    body: data,
				    uri: "/add",
				    headers: {
					      "Content-Type": "application/json"
					}}, 
			function (err, resp, body) {
    		console.log(body)
    		
    		//Addding the link to the local model
    		app.me.collect.add(
    			{'title': title, 
    			'id': youtubeID, 
    			'duration': duration})
    		
		})

	},
	getNextUrl(url) {
		let next = false
		let nextID = app.me.collect.first().id
		app.me.collect.toArray().forEach( (m)=> {
			
			if(next) {
				
				nextID = m.id
				return
			} 

			if(m.id = url) {
				next = true
			} else {
				next = false
			}

		})
		console.log(nextID)
		return nextID
	}



})