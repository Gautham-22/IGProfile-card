const text = document.querySelector(".name");
const name = text.textContent;
const arr = name.split("");
text.textContent = "";

for(let i=0;i<arr.length;i++){
    text.innerHTML += "<span>" + arr[i] + "</span>";
}

text.addEventListener("mouseover",function(event){
    if(event.target.childElementCount == 0){
        color1();
    }
});
text.addEventListener("mouseout",function(event){
    if(event.target.childElementCount == 0){
        color2();
    }
});


function color1(){
    let char =0;
    let timer = setInterval(animation,50);
    
    function animation(){
        const span = document.querySelectorAll("span")[char];

        span.classList.add("fade");
        char ++;
        
        if( char == arr.length){
            complete();
        }
    }

    function complete(){
        clearInterval(timer);
    }
}

function color2(){
    let char =arr.length-1;
    let timer = setInterval(animation,50);
    
    function animation(){
        const span = document.querySelectorAll("span")[char];

        span.classList.remove("fade");
        char --;
        
        if( char == -1){
            complete();
        }
    }

    function complete(){
        clearInterval(timer);
    }
}

