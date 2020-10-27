//Max Norman
function rexport(){
    var datta = maxport({{element.1}}); 
    alert(datta)
}
function maxport(static, all_colors){
    var end_val = ""
   	
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

var sub_button = document.getElementById('sub_btn');
//var exp_button = document.getElementById("export_btn");

k = sub_button.onclick = function(){k?(S=new Date,T=setInterval("time.innerHTML=(new Date-S)/1e3")):clearInterval(T);k=!k} 

var hCP = document.getElementById('home');
var hBG = document.getElementById('hbg');


hCP.oninput = function(){
	hBG.style.backgroundColor = hCP.value;
    
}
