let dinner = [];

fetch("data/dinner.json")
    .then(response => response.json())
    .then(data => {
        dinner = data;
    });

function pickDinner() {

    const randomIndex = Math.floor(Math.random() * dinner.length);

    const food = dinner[randomIndex];

    document.getElementById("result").innerHTML =
        `🎉 今天晚餐吃<br><br><h1>${food}</h1>`;

}