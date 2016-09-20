import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import xhr from 'xhr'
import Layout from './layout'
import MessagePage from './components/message'

export default Router.extend({
	
		
	routes: {
	'':'public',
	'*fourOhFour':'fourOhFour'
	},
	public() {
		
		React.render(<Layout playlist={app.me.collect}/>, document.body)
	},
	fourOhFour() {
		React.render(<MessagePage title='Not Found' body='404. Nothing Found on the link you are trying'/>, document.body)
	}
})