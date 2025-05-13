
let DogButton = document.getElementById("DogButton");
let DogImg = document.getElementById("DogPic");

DogButton.onclick = function () {
fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        DogImg.src = data.message;
    });
};