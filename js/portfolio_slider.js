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
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/my-etsy-neighborhood/index.html'},
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/my-etsy-neighborhood'}
			],
			'tags'  : ['JavaScript','API','All']
			},

			{
			'title' : 'Countries and Capitals',
			'description'   : 'Angular app created using the geonames API to learn about country data.',
			'thumbnail' : ['img/countries-icon-small.png'],
			'large' : ['img/countries-icon.png'],
			'button_list'   :
			[
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/ng-countries-capitals/app/index.html#/' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/ng-countries-capitals'}
			],
			'tags'  : ['JavaScript','Angular','API','All']
			},

			{
			'title' : 'Waitstaff Calculator',
			'description'   : 'Angular app that takes a user input for meal cost, calculates a tip total, and then continually totals the tips.',
			'thumbnail' : ['img/waitstaff-icon-small.png'],
			'large' : ['img/waitstaff-icon.png'],
			'button_list'   :
			[
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/ng-wait-calc/#/' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/ng-wait-calc'}
			],
			'tags'  : ['JavaScript','Angular','All']
			},

			{
			'title' : 'Mad Libs',
			'description'   : 'Angular app that takes a user input and generates a Mab Lib.',
			'thumbnail' : ['img/madlibs-icon-small.png'],
			'large' : ['img/madlibs-icon.png'],
			'button_list'   :
			[
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/ng-mad-libs/index.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/ng-mad-libs'}
			],
			'tags'  : ['JavaScript','Angular','All']
			},

			{
			'title' : 'Flappy Bird Landing Page',
			'description'   : 'Personal static landing page for popular Flappy Bird App that uses Velocity.js for animations.',
			'thumbnail' : ['img/flappy-icon-small.png'],
			'large' : ['img/flappy-icon.png'],
			'button_list'   :
			[
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/flappy-bird-clone/build/index.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/flappy-bird-clone'}
			],
			'tags'  : ['JavaScript','All']
			},

			{
			'title' : 'Instagram Search',
			'description'   : 'Angular app that uses the Instagram API to find posts for an input tag.',
			'thumbnail' : ['img/instasearch-icon-small.png'],
			'large' : ['img/instasearch-icon.png'],
			'button_list'   :
			[
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/ng-insta-search/index.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/ng-insta-search'}
			],
			'tags'  : ['JavaScript','Angular','API','All']
			},

			{
			'title' : 'Thinkful Tube',
			'description'   : 'App created using the Youtube API to search videos by term.',
			'thumbnail' : ['img/tube-icon-small.png'],
			'large' : ['img/tube-icon.png'],
			'button_list'   :
			[
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/thinkful-tube/index.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/thinkful-tube'}
			],
			'tags'  : ['JavaScript','API','All']
			},

			{
			'title' : 'Hemingway Quiz',
			'description'   : "Quiz App that tests a user's knowledge of Ernest Hemingway trivia.",
			'thumbnail' : ['img/hemingway-icon-small.png'],
			'large' : ['img/hemingway-icon.png'],
			'button_list'   :
			[
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/hemingway-quiz/index.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/hemingway-quiz'}
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
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/stackerAJAX/index.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/stackerAJAX'}
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
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/jQuery-streetfighter/main.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/jQuery-streetfighter'}
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
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/shopping-list/index.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/shopping-list'}
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
			{ 'title':'LIVE DEMO', 'url' : 'http://jasonwalkow.github.io/hot-cold-app/index.html' },
			{ 'title':'CODE', 'url':'https://github.com/jasonwalkow/hot-cold-app'}
			],
			'tags'  : ['JavaScript','All']
			}
		]
	});
});



