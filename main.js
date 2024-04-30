// let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];
// const body = document.querySelector("body")
// data.map(items => {
//     const text = document.createElement("p")
//     text.innerHTML = items;

//     body.appendChild(text)

//     text.style.textAlign = "center"
//     text.style.margin = "30px"

//     text.style.color = "white"

//     if(items > 50) {
//         text.style.background = "green"
//     }else{
//         text.style.background = "red"
//     }
// })

// const hello = document.querySelector("#clor1");
// const hello2 = document.querySelector("#clor2");
// const hello3 = document.querySelector("#text")

// hello.addEventListener("click", function name() {
//     let newText = document.createElement("h1")
//     let copyText = name.textContent
//     newText.innerText = copyText
//     body.appendChild(newText)
//     console.log(copyText);
// })
// hello2.addEventListener("click", function name() {
//     text.style.background = "red";
//     text.style.color = "blue"
// })


let count = 0; // Boshlang'ich qiymat
  const countDisplay = document.getElementById('count');
  const increaseBtn = document.getElementById('increaseBtn');
  const decreaseBtn = document.getElementById('decreaseBtn');
  const resetBtn = document.getElementById('resetBtn');
  
  // Fonksiyonlar
  function increase() {
    count++;
    updateCounter();
  }
  function decrease() {
    count--;
    updateCounter();
  }

  function reset() {
    count = 0;
    updateCounter();
  }

  function updateCounter() {
    countDisplay.textContent = count;
  }

  // Event listeners
  increaseBtn.addEventListener('click', increase);
  decreaseBtn.addEventListener('click', decrease);
  resetBtn.addEventListener('click', reset);

  increaseBtn.style.background = "green";
  increaseBtn.style.color = "white";
  increaseBtn.style.borderRadius = "3px";
  decreaseBtn.style.background = "red";
  decreaseBtn.style.color = "white";
  decreaseBtn.style.borderRadius = "3px";
  resetBtn.style.background = "yellow";
  resetBtn.style.color = "white";
  resetBtn.style.borderRadius = "3px";

  const test = document.getElementById("#wrapper");
  test.style.marginLeft = "250px";
  

