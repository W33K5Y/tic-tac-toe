// ! Declare variables
const section1    = document.querySelector('.section-one');
const mainDiv     = document.getElementById('main-wrap');
const startDiv    = document.getElementById('start-game');
const startButton = document.getElementById('start-button');
const endDiv      = document.getElementById('end-game');
const endButton = document.getElementById('end-button');
const endH1 = document.getElementById('end-h1');

const headerDiv   = document.querySelector('.header-display-none');
let whosGo = 0;
// ! Cross svg innerHTML
const cross = `<svg
class="cross"
xmlns="http://www.w3.org/2000/svg"
width="84"
height="84"
viewBox="0 0 24 24"
>
<path
  d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
/>
</svg>`;
// ! Circle svg innerHTML
const circle = `      <svg
class="circle"
xmlns="http://www.w3.org/2000/svg"
width="84"
height="84"
viewBox="0 0 24 24"
>
<path
  d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"
/>
</svg>`;
// ! create a function to get rid of first Div 
startButton.addEventListener("click",startGame);
function startGame(e) {
if(this){
  startDiv.style.display = "none";
  headerDiv.className="header-display-show";
}
}
// ! create a function to declare winnerDiv


// ! start to loop through #main-wrap children and attach a listener to each one

for (prop of mainDiv.children) {
  prop.addEventListener('click',addSVGs);
}

// ! this adds the circles and croses in player order and then removes the listener on the specific el ==>

let keepTrackPlayerOne = [];
let keepTrackPlayerTwo = [];

function addSVGs(e) {
    whosGo ++;
    if(whosGo % 2 === 0) {
      this.innerHTML = circle;
      this.removeEventListener("click",addSVGs);
      keepTrackPlayerTwo.push(this.id); 
      keepTrackPlayerTwo.sort();
      let doesPlayerTwoWin = keepTrackPlayerTwo.toString();
      whosTheWinner(doesPlayerTwoWin,'Player Two Wins')

     } else{
      this.innerHTML = cross;
      this.removeEventListener("click",addSVGs);
      keepTrackPlayerOne.push(this.id); 
      keepTrackPlayerOne.sort();
      let doesPlayerOneWin = keepTrackPlayerOne.toString();
      whosTheWinner(doesPlayerOneWin,"Player One Wins");
    } 

}

// ! function to fit in above listener this declares the winning result ==>

function whosTheWinner(player, printMessage) {
    player.includes("0,1,2") ? winnerDiv(printMessage) :
    player.includes("3,4,5") ? winnerDiv(printMessage) :
    player.includes("6,7,8") ? winnerDiv(printMessage) :
    player.includes("0,3,6") ? winnerDiv(printMessage) :
    player.includes("1,4,7") ? winnerDiv(printMessage) :
    player.includes("2,5,8") ? winnerDiv(printMessage) :
    player.includes("0,4,8") ? winnerDiv(printMessage) :
    player.includes("2,4,6") ? winnerDiv(printMessage) :
    whosGo === 9         ? winnerDiv("This Is A Draw") : null; 
}

function winnerDiv(message) {
  headerDiv.className="header-display-none";
  endDiv.className="end end-display-show";
  endH1.innerHTML = `${message}`;
}

// ! <== create a function and listener for the end-button to restart game
// ! clear existing conditions and restart game all within the listener ====>

endButton.addEventListener("click",restart);

function restart(e) {
  headerDiv.className="header-display-show";
  endDiv.className="end end-display-none";
  whosGo = 0;
  keepTrackPlayerOne = [];
  keepTrackPlayerTwo = [];
  for (prop of mainDiv.children) {
    prop.innerHTML = '';
    prop.addEventListener('click',addSVGs);

  }
  
}
