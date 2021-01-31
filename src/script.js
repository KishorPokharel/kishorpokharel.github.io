const aboutBtn = document.querySelector('.aboutBtn');
const aboutSection = document.querySelector('.about-container');
const blogLink = document.querySelector('.blogLink');

blogLink.addEventListener('click', function() {
	alert('I have not written any blogs yet.');
});

aboutBtn.addEventListener('click', function() {
	aboutSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
});