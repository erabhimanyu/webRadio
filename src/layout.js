import React from 'react'
import ReactMixin from 'ampersand-react-mixin'
import Playlist from './components/playlist'
import Player from './components/player'
import AddLink from './components/addLink'

export default React.createClass({
	mixins: [ReactMixin],
	render() {

		return (
			<div className='container'>
				<Player/>
				<AddLink/>
				<Playlist playlist={this.props.playlist}/>
				
				
			</div>
				)
	}
})