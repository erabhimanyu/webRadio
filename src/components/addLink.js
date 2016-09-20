import React from 'react'
import xhr from 'xhr'
import qs from 'qs'


export default React.createClass({
	getInitialState() {
		return {
			LinkInputValue: ''
			}
	},
	addVideo(event){
		event.preventDefault()
		console.log('I am awesome')
		app.me.getVideoInformation(this.state.LinkInputValue)
		this.setState({
			LinkInputValue: ''
		})
		
	},
	LinkInputChange(event) {
		this.setState({LinkInputValue: event.target.value});
	},
	render() {
		return (
				<div>
					 <form onSubmit={this.addVideo}>
					    <fieldset>
					      <legend>Add to playlist</legend>

					      <div className='form-element'>
					        <label for='username'>Link</label>
					        <input type='text' value={this.state.LinkInputValue} onChange= {this.LinkInputChange}placeholder='Insert youtube Link here' className='form-input'/>
					      </div>
					      <button type='submit' className='button button-primary'>Add</button>

					    </fieldset>
					  </form>
				</div>
			)
	}	
}) 