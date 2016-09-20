import React from 'react'

export default React.createClass({
	render() {
	return (<div className='container'>
				<h2>{this.props.title}</h2>
				<p>{this.props.body}</p>
			</div>
		)
}
})