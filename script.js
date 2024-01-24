
let names = ["john", "alex", "richard", "marina"];

function currentTime() {
  let time = new Date();
  return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
}

function rand() {
  return Math.round(Math.random() * 10);
}

function cards() {
  names.forEach(element => {
    document.getElementById("cards").innerHTML += `
      <div style=" border: 1px solid black; padding: 10px; margin: 10px;">
        <h2>name is: ${element}</h2>
        <p>this is dummy description</p>
        <p>id is: ${rand() + 1}</p>
        <button onclick="showTime()">Show Time</button>
      </div>`;
  });
}

function showTime() {
  alert(`time is :${currentTime()}`);
}

cards();
