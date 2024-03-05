// const insert = document.querySelector("#insert");

// function onKeyDown(e) {
//   // clear initial prompt
//   insert.innerHTML = "";

//   const res = {
//     "e.key": e.key === " " ? "Space" : e.key,
//     "e.keyCode": e.keyCode,
//     "e.code": e.code,
//   };

//   for (let key in res) {
//     const div = document.createElement("div");
//     div.className = "key";
//     const small = document.createElement("small");

//     const smallText = document.createTextNode(key);
//     const divText = document.createTextNode(res[key]);

//     small.appendChild(smallText);
//     div.appendChild(divText);
//     div.appendChild(small);

//     insert.appendChild(div);
//   }
// }

// window.addEventListener("keydown", onKeyDown);

const container = document.querySelector(".container");

function onKeyDown(e) {
  // Clear initial content
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Get data
  const keyProperties = {
    "e.key": e.key == " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (let key in keyProperties) {
    const h2 = document.createElement("h2");
    const small = document.createElement("small");
    const div = document.createElement("div");
    div.className = "box";
    small.className = "box-description";

    h2.textContent = keyProperties[key];
    small.textContent = key;
    div.appendChild(h2);
    div.appendChild(small);
    container.appendChild(div);
  }
}

window.addEventListener("keydown", onKeyDown);
