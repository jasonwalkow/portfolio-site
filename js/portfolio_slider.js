$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'myEtsyNeighborhood',
			'description'   : 'App created using Etsy, googlemaps, and geocoder APIs to find local Etsy sellers in your neighborhood.',
			'thumbnail' : ['img/myetsyneighborhood-icon-small.png'],
			'large' : ['img/myetsyneighborhood-icon.png'],
			'button_list'   :
			[
			{ 'title':'Live Demo', 'url' : 'http://jasonwalkow.github.io/my-etsy-neighborhood/index.html'},
			{ 'title':'Code', 'url':'https://github.com/jasonwalkow/my-etsy-neighborhood'}
			],
			'tags'  : ['JavaScript', 'API', 'All']
			},

			{
			'title' : 'Thinkful Tube',
			'description'   : 'App created using the Youtube API to search videos by term.',
			'thumbnail' : ['img/tube-icon-small.png'],
			'large' : ['img/tube-icon.png'],
			'button_list'   :
			[
			{ 'title':'Live Demo', 'url' : 'http://jasonwalkow.github.io/thinkful-tube/index.html' },
			{ 'title':'Code', 'url':'https://github.com/jasonwalkow/thinkful-tube'}
			],
			'tags'  : ['JavaScript', 'API', 'All']
			},

			{
			'title' : 'Hemingway Quiz',
			'description'   : "Quiz App that tests a user's knowledge of Ernest Hemingway trivia.",
			'thumbnail' : ['img/hemingway-icon-small.png'],
			'large' : ['img/hemingway-icon.png'],
			'button_list'   :
			[
			{ 'title':'Live Demo', 'url' : 'http://jasonwalkow.github.io/hemingway-quiz/index.html' },
			{ 'title':'Code', 'url':'https://github.com/jasonwalkow/hemingway-quiz'}
			],
			'tags'  : ['JavaScript','All']
			},

			{
			'title' : 'stackerAJAX',
			'description'   : 'App created using the Stack Overflow API to find unanswered questions and top answerers.',
			'thumbnail' : ['img/stacker-icon-small.png'],
			'large' : ['img/stacker-icon.png'],
			'button_list'   :
			[
			{ 'title':'Live Demo', 'url' : 'http://jasonwalkow.github.io/stackerAJAX/index.html' },
			{ 'title':'Code', 'url':'https://github.com/jasonwalkow/stackerAJAX'}
			],
			'tags'  : ['JavaScript','API','All']
			},

			{
			'title' : 'jQuery Streetfighter',
			'description'   : 'Animation created using jQuery library.',
			'thumbnail' : ['img/streetfighter-icon-small.png'],
			'large' : ['img/streetfighter-icon.png'],
			'button_list'   :
			[
			{ 'title':'Live Demo', 'url' : 'http://jasonwalkow.github.io/jQuery-streetfighter/main.html' },
			{ 'title':'Code', 'url':'https://github.com/jasonwalkow/jQuery-streetfighter'}
			],
			'tags'  : ['JavaScript','All']
			},

			{
			'title' : 'Shopping List',
			'description'   : 'App created using JavaScript that helps users make a shopping list of items.',
			'thumbnail' : ['img/shopping-icon-small.png'],
			'large' : ['img/shopping-icon.png'],
			'button_list'   :
			[
			{ 'title':'Live Demo', 'url' : 'http://jasonwalkow.github.io/shopping-list/index.html' },
			{ 'title':'Code', 'url':'https://github.com/jasonwalkow/shopping-list'}
			],
			'tags'  : ['JavaScript','All']
			},

			{
			'title' : 'Hot or Cold',
			'description'   : 'Game created using JavaScript to allow users to guess a number and provide feedback.',
			'thumbnail' : ['img/hotcold-icon-small.png'],
			'large' : ['img/hotcold-icon.png'],
			'button_list'   :
			[
			{ 'title':'Live Demo', 'url' : 'http://jasonwalkow.github.io/hot-cold-app/index.html' },
			{ 'title':'Code', 'url':'https://github.com/jasonwalkow/hot-cold-app'}
			],
			'tags'  : ['JavaScript','All']
			}
		]
	});
});



