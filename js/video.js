var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");

	video = document.querySelector(".video");

	video.autoplay = false;
	console.log(video.autoplay);

	video.loop = false;
	console.log(video.loop);
});


document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
	//console.log(video.volume * 100)
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log(video.playbackRate);
	video.playbackRate = video.playbackRate * .90;
	console.log("Slowed down" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log(video.playbackRate);
	video.playbackRate = video.playbackRate / .90;
	console.log("Faster vid" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skipped ahead");
	video.currentTime = video.currentTime + 10;
	console.log("skipped ahead" + video.currentTime );
	if (video.currentTime >= (video.duration))
		video.currentTime = 0
		console.log("current time" + video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(){
	console.log(video.muted);
	if(video.muted == true) {
		document.querySelector("#mute").innerHTML = "Mute";
		video.muted = false;
	}
	else{
		document.querySelector("#mute").innerHTML = "Unmute";
		video.muted = true;
	}
});

document.querySelector("#slider").addEventListener("change", function(){
	console.log("slider");
	video.volume = this.value * .01
	console.log(this.value);
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	video.classList.add("oldSchool")
})

document.querySelector("#orig").addEventListener("click", function(){
	video.classList.remove("oldSchool")
})