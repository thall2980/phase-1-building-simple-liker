// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

document.querySelector("body div").className = "hidden";

const heart = document.querySelector(".like-glyph");
function handleLike(container) {
  heart.addEventListener("click", () => {
    mimicServerCall();
    if (heart.textContent === EMPTY_HEART) {
      return (heart.textContent = FULL_HEART);
    } else if (heart.textContent === FULL_HEART) {
      return (heart.textContent = EMPTY_HEART);
    }
  });
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
