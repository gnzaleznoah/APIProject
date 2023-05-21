document.addEventListener('DOMContentLoaded', init);

const difficulty = [
    "beginner",
    "intermediate",
    "expert"
];

let exercise = [];
let muscleGroup = [];
let code = '';

let workout1 = document.getElementById('workout1');
let difficulty1 = document.getElementById('difficulty1');

function init(){    

    fetch("muscles.json")
    .then((response) => response.json())
    .then((data) => {
        muscleGroup = data;
    //loop through muscle array and show Dropdown
        muscleGroup.forEach((item) =>{
            const option = document.createElement('OPTION');
            option.value = item.name;
            option.innerText = item.name;
            workout1.appendChild(option);
        });
    })
    .catch((err) => console.log("Nope!!", err));

    difficulty.forEach((item) =>{
        const option = document.createElement('OPTION');
        option.value = item;
        option.innerText = item;
        difficulty1.appendChild(option);
    });

    //For Dropdown Menu
     workout1.addEventListener('change',(e) => {
        code = e.target.value;
        const url = 'https://api.api-ninjas.com/v1/exercises?muscle=' + code;
        console.log('url', url);
        fetch( url, {
            method: "GET",
            headers: {
                'X-Api-Key': 'IGWz0KSPZ9x79d4rDs6Phw==BPLz2nz7Uzilln0R'
            },
            contentType: 'application/json',
            success: function(result) {
                console.log('result:', result);
            },
            error: function ajaxError(jqXHR) {
                console.error('Error: ', jqXHR.responseText);
            }
        })
        .then((response) => response.json())
        .then((data) => {
            exercise = data;
            console.log('result1: ', exercise);

            //Clear Out For new Muscle Selection 
        const container = document.querySelector('.work-out-list');
        container.innerHTML = "";

        exercise.forEach((item) =>{  
        let workoutPrinted = `<section class="set ${item.difficulty}">
                            <p>Workout: ${item.name}</p>
                            <p>Type: ${item.type}</p>
                            <p>Difficulty: ${item.difficulty}</p>
                            <p>Instructions: ${item.instructions}</p>
                            </section>`
                            ;
            let workList = document.querySelector('.work-out-list');
            workList.innerHTML += workoutPrinted;
            
        })

        console.log('ex3', exercise);
        const diffLabel = document.querySelector('#difficultyLabel');
        diffLabel.classList.remove("hide");
        diffLabel.classList.add("form-scace");
        });
        
    });

    
    difficulty1.addEventListener('change', (e) => {
        let containers = document.querySelectorAll('.work-out-list section');
        const notice = document.getElementById('notice');
        const beg = document.querySelectorAll('.beginner');
        const int = document.querySelectorAll('.intermediate');
        const exp = document.querySelectorAll('.expert');

        const intensity = e.target.value;

        //hide 'em all
        containers.forEach((item) => {
            item.classList.add('hide');
        });

        // show only the ones selected for difficulty
        // when an if statement only has one line, there is
        // no need for the curly brackets.
        switch(intensity) {
            case 'beginner':
                if(beg.length === 0) notice.classList.remove('hide');
                beg.forEach(sec => {
                    sec.classList.remove('hide')
                    notice.classList.add('hide');
                })
                break;
            case 'intermediate':
                if(int.length === 0) notice.classList.remove('hide');
                int.forEach(sec => {
                    sec.classList.remove('hide')
                    notice.classList.add('hide');
                })
                break;
            case 'expert':
                if(exp.length === 0) notice.classList.remove('hide');
                exp.forEach(sec => {
                    sec.classList.remove('hide')
                    notice.classList.add('hide');
                })
                break;
            default:
                notice.classList.remove('hide')
        }
    });
}

