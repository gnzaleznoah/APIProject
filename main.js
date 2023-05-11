document.addEventListener('DOMContentLoaded', init);

function init(){

    let muscles = '';
    const muscleGroup = [
        "biceps",
        "abdominals",
        "hamstrings",
        "quadriceps",
        "glutes",
        "chest"
    ];
    const difficulty = [
        "Beginner",
        "Intermediate",
        "Expert"
    ];

    let workout1 = document.getElementById('workout1');
    muscleGroup.forEach((item) =>{
        const option = document.createElement('OPTION');
        option.value = item.codePointAt;
        option.innerText = item;
        workout1.appendChild(option);
    });
    let difficulty1 = document.getElementById('difficulty1');
    difficulty.forEach((item) =>{
        const option = document.createElement('OPTION');
        option.value = item.codePointAt;
        option.innerText = item;
        difficulty1.appendChild(option);
    });

    workout1.addEventListener('change',(e) => {
        const code = e.target.value;
        muscles = e.target.value;
    });

    var muscle = muscles;
    const url = 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle;
    

    fetch( url, {
        method: "GET",
        headers: {
            'X-Api-Key': 'IGWz0KSPZ9x79d4rDs6Phw==BPLz2nz7Uzilln0R'
        },
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
        })
        .then((response) => response.json())
        .then((data) => {
            exercise = data;
            // workouts.forEach((item) =>{
            //     const workoutName = document.createElement("P");
            //     workoutName.value = item.name;
            // });

            let wName = exercise[0].name;
            let wType = exercise[0].type;
            let wMuscle = exercise[0].muscle;

            console.log(wName);
            console.log(wType);
            console.log(wMuscle);

    })
    .catch((err) => console.log("Oops!", err));
}


// var muscle = 'biceps'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
//     headers: { 'X-Api-Key': 'IGWz0KSPZ9x79d4rDs6Phw==BPLz2nz7Uzilln0R'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });