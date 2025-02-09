// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const hearts = document.querySelectorAll('.like-glyph');
const modal = document.querySelector("#modal")
modal.className = "hidden"
// When a user clicks on an empty heart:
//   * Invoke `mimicServerCall` to simulate making a server request
//   * When the "server" returns a failure status:
//     * Respond to the error using a `.catch(() => {})` block after your
//       `.then(() => {})` block.
//     * Display the error modal by removing the `.hidden` class
//     * Display the server error message in the modal
//     * Use `setTimeout` to hide the modal after 3 seconds (add the `.hidden` class)
// Your JavaScript code goes here!





  for (const heart of hearts) {
    heart.addEventListener('click', (e) => { 
      mimicServerCall()
      .then(() => {
        if (heart.innerHTML == EMPTY_HEART) {
          heart.innerHTML = FULL_HEART;
          heart.className = "activated-heart"
        } else {
          console.log(heart.innerHTML)
          heart.innerHTML = EMPTY_HEART
          heart.className = "like-glyph"
        }

      })
      .catch(error => {
        modal.className = " "
        const modalMessage = document.querySelector("#modal-message")
        modalMessage.innerText = error
        setTimeout(() =>{
          modal.className = "hidden"
        }, 5000)
      })
    })
  }
     
      
    
    
       
    
      
      
    
      
    






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
