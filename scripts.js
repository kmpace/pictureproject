const slides = document.querySelectorAll('#slides .slide');
let currentSlide = 0;
let lideInterval = setInterval(nextSlide,5000);


function nextSlide(){
	slides[currentSlide].className = 'slide';
	currentSlide = (currentSlide+1)%slides.length; //cycles back to zero if we have reacehd the end
	slides[currentSlide].className = 'slide showing'; //changes the slides class to the one showing 

}




//Get Instagram Images

const feed = new Instafeed({
	get: 'tagged',
	tagName: 'moominlove2017',
	clientId: '306e98eb8a8540aeade8a13fb4195bfa',
    accessToken: '6233508.306e98e.5dbb1a193b67474bb22533cd28983c09',
    useHttp: true,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    template: '<li class="slide"><img src="{{image}}"/></li>',
    links: false
});

feed.run();