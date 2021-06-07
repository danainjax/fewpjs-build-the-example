// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// When a user clicks on an empty heart:
//   * Invoke `mimicServerCall` to simulate making a server request
//   * When the "server" returns a failure status:
//     * Respond to the error using a `.catch(() => {})` block after your
//       `.then(() => {})` block.
//     * Display the error modal by removing the `.hidden` class
//     * Display the server error message in the modal
//     * Use `setTimeout` to hide the modal after 3 seconds (add the `.hidden` class)
// Your JavaScript code goes here!
const likes = document.querySelectorAll('.like');
console.log(likes);
likes.forEach(heart =>{
  heart.addEventListener('click', (e) => {
    if (e.target.innerHTML === EMPTY_HEART) {
      e.target.innerHTML = FULL_HEART;
      e.target.outerHTML = `<span class="activated-heart">${FULL_HEART}</span>`
    }else 
     e.target.innerHTML = EMPTY_HEART
     e.target.outerHTML = `<span class="like-glyph">${EMPTY_HEART}</span>`
    
    
    
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
