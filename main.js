document.addEventListener('DOMContentLoaded', init);

function init(){

    var muscle = 'biceps'
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
        .then(data => {
            console.log(data.name);
            console.log(data.type);
    })
}
