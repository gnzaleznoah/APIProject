document.addEventListener('DOMContentLoaded', startcss);

function startcss(){
    let h1 = document.querySelector("h1");
    h1.classList.add('heading1');
    h1.innerHTML = 'Workout Generator';
    let h2 = document.createElement("H2");
    h2.innerText = "API By Nina API";
    h1.appendChild(h2);
    h2.classList.add('heading1');
    h2.classList.add('h2heading');
}
