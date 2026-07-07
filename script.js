async function pickFood(type) {

    const response = await fetch(`data/${type}.json`);

    const foods = await response.json();

    const randomIndex =
        Math.floor(Math.random() * foods.length);

    const food = foods[randomIndex];

    document.getElementById("result").innerHTML =
        `🎉 今天推薦<br><br><h1>${food}</h1>`;
}