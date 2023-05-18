document.addEventListener('DOMContentLoaded', startcss);

function startcss(){
    let headerBox = document.querySelector(".media-box");

    let headerMedia =     
            `<div class="parent">        
                <video class="video" src="media/backgroundvid.mp4" autoplay muted></video>
                    
                <div class="img-container">
                <figure>
                    <img class="background-wall" src="media/noah-workout.jpg" alt="">
                    <img class="mask-image" src="media/noah-workout2.PNG" alt="">
                </figure>
                </div>
            </div>`;
        headerBox.innerHTML += headerMedia;


    let h1 = document.querySelector("h1");
    h1.classList.add('heading1');
    h1.innerHTML = 'Workout Generator';

    let h2 = document.createElement("H2");
    h2.innerText = "API By Nina API";
    h1.appendChild(h2);
    h2.classList.add('heading1');
    h2.classList.add('h2heading');

// Style For Form 
    let formL = document.querySelector("form");
    formL.classList.add('form1');
}
