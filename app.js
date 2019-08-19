/* const videos = document.querySelectorAll("video");

videos.forEach(video => {
	video.addEventListener("mouseover", function(){
		this.play();
	})

	video.addEventListener("mouseout", function(){
		this.pause();
	})
})
 */

const videos = document.querySelectorAll("video");
const marioVideo = document.querySelector('#video1')
const test = document.querySelector('.test');

test.addEventListener("mouseover", function(){
    marioVideo.play();
    marioVideo.style.transform = 'scale(1.5) translateY(10%)' ;
})

test.addEventListener("mouseout", function(){
    marioVideo.pause();
    marioVideo.style.transform = 'scale(1) translateY(0)' ;
})