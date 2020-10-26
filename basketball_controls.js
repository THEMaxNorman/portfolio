//Max Norman
function rexport(){
    var datta = maxport("q | clock | logo "); 
    alert(datta)
}
function maxport(static, all_colors){
    var end_val = ""
    var all_colors = [hCP.value,aCP.value];
    end_val += getAllLabels(labels, all_colors );
    //static.replace(" , ", "|")
    end_val += static
    
    console.log(end_val);
    return end_val
    
    
}
function getAllLabels(x, color_arr){
    var end_val = ""
    var i;
    for (i = 0; i < x.length; i++) {
        end_val += getLabel(x[i],1, color_arr[i]);    
    }
    return end_val;
}
function getLabel(elem, size, color){
    var end_val = " "
    var size_str = "size: " + size + ", ";
    var color_str = "color: " + color + ", ";
    var text_str = "text: " +elem.textContent + "";
    text_str= text_str.replace(/[\n\r]+|[\s]{2,}/g, ' ').trim()
    end_val += (size_str + color_str + text_str + " | ");
    
    
    return end_val;
    
}

var labels = document.getElementsByClassName("team-name");
class Countdown {
	constructor() {
    this.duration = 0;
    this.elapsed = 0;
    this.isActive = false;
    this.lastFrameTime = Date.now();
    
    this.onTick = () => {};
    this.onCompleted = () => {};
    
    this.tick();
  }
  
  getTimeLeft() {
    const t = this.duration - this.elapsed;

    return Math.max(0, t);
  }
  
  pause() {
	  this.isActive = false;
    
    return this;
  }
  
  reset() {
    this.elapsed = 0;
  }
  
  setDuration(seconds) {
    this.lastFrameTime = Date.now();
    this.duration = seconds;
    
    return this;
  }
  
  start() {
	  this.isActive = true;
    
    return this;
  }
  
  tick() {
  	const currentFrameTime = Date.now();
    const deltaTime = currentFrameTime - this.lastFrameTime;
    this.lastFrameTime = currentFrameTime;

    if (this.isActive) {
      this.elapsed += deltaTime / 1000;
      this.onTick(this.getTimeLeft());
      
      if(this.getTimeLeft() <= 0) {
        this.pause();
        this.onCompleted();
      }
    }
    
    window.requestAnimationFrame(this.tick.bind(this));
  }
}

function secondsToTime(secs)
{
    var hours = Math.floor(secs / (60 * 60));

    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
	if (seconds == 0){

    		return minutes + ':' + seconds + '0';
	}
		
    return minutes + ':' + seconds;
}
var countdown = new Countdown().setDuration(600);

const label = document.querySelector('.time');

document.querySelector('.pause').addEventListener('click', () => {
  countdown.pause();
});

document.querySelector('.reset').addEventListener('click', () => {
  countdown.reset();
  label.innerHTML = secondsToTime(Math.ceil(countdown.getTimeLeft()));
});

document.querySelector('.start').addEventListener('click', () => {
  countdown.start();
});
countdown.onTick = (time) => {
  label.innerHTML = secondsToTime(Math.round(time));
};

countdown.onCompleted = () => {
  console.log('DONE');
};
var input = document.getElementById("input_time");
var submit_button = document.getElementById('sub_btn');
input.value = 10;
submit_button.onclick = function(){
	countdown.setDuration(input.value * 60);
  	label.innerHTML = secondsToTime(Math.ceil(countdown.getTimeLeft()));
}
var hcount = 0;
var acount = 0;

var hcountButton = document.getElementById("countuButton");
var hcountDButton = document.getElementById("countDButton");

var acountButton = document.getElementById("acountuButton");
var acountDButton = document.getElementById("acountDButton");

var resetButton = document.getElementById("resetBtn");

var displayCount = document.getElementById("hscore");
var adisplayCount = document.getElementById("ascore");

hcountButton.onclick = function() {
  hcount++;
  displayCount.innerHTML = hcount;
}
hcountDButton.onclick = function() {
  hcount--;
  displayCount.innerHTML = hcount;
}
acountButton.onclick = function() {
  acount++;
  adisplayCount.innerHTML = acount;
}
acountDButton.onclick = function() {
  acount--;
  adisplayCount.innerHTML = acount;
}
resetButton.onclick = function() {
  hcount = 0;
  acount = 0;
  displayCount.innerHTML = hcount;
  adisplayCount.innerHTML = acount;
}
var aCP = document.getElementById('away');
var aBG = document.getElementById('abg');

var hCP = document.getElementById('home');
var hBG = document.getElementById('hbg');

aCP.oninput = function(){
	console.log(aBG)
	aBG.style.backgroundColor = aCP.value;
}
hCP.onchange = function(){
	hBG.style.backgroundColor = hCP.value;
}
