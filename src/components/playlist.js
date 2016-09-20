import React from 'react'
import ReactMixin from 'ampersand-react-mixin'
import ReactPlayer from 'react-player'
import xhr from 'xhr'


export default React.createClass({
	mixins: [ReactMixin],
	getInitialState : function() {
    return {
     	url: '8tPnX7OPo0Q',
     	isPlaying: false,
     	playingFirstTime: true
    }
  },
	//Load the selected Video
	loadVideo(key) {
		event.preventDefault()
		this.setState({
      		url : key,
      		playingFirstTime: false,
      		isPlaying: true
    	});
	},
	//Switch to next video after removing the current video from the list
	nextVideo(){
		const url = this.state.url
		app.me.removeVideo(url)

		this.setState({
				url: app.me.getNextUrl(url),
				isPlaying: true
				})
	},
	//Handle manual delete for videos
	removeVideo(key) {
		
		if(app.me.removeVideo(key)) {
			this.setState({
			url: app.me.collect.first().id
			})
		}
	},
	//Loading of the videos for the first time
	loadFirstVideo() {
		if(this.state.playingFirstTime) {
		this.setState({
			url: app.me.collect.first().id,
			isPlaying: true,
			playingFirstTime: false
			})
		} 
	},
	render() {
		return (
			<div>
			<ReactPlayer url={'https://www.youtube.com/watch?v='+ this.state.url} 
			playing={this.state.isPlaying} 
			onEnded={this.nextVideo}
			onStart={this.loadFirstVideo}
			/>
				<ul class="grid-flex-container">
					{this.props.playlist.map((repo)=> (
						
						<li key={repo.id}>
							 <div className="grid-flex-cell-1of2">
							      <a href='' onClick={this.loadVideo.bind(this, repo.id)}>{repo.title}</a>
							      <p><button className='button' onClick={this.removeVideo.bind(this, repo.id)}><span className='octicon octicon-x'></span></button></p>
							  </div>
						</li>
					  )
					)}
				</ul>
			</div>
			)
	}
})