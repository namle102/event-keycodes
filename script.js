const insert = document.querySelector("#insert");

function onKeyDown(e) {
  // clear initial prompt
  insert.innerHTML = "";

  const res = {
    "e.key": e.key === " " ? "Space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (let key in res) {
    const div = document.createElement("div");
    div.className = "key";
    const small = document.createElement("small");

    const smallText = document.createTextNode(key);
    const divText = document.createTextNode(res[key]);

    small.appendChild(smallText);
    div.appendChild(divText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener("keydown", onKeyDown);
