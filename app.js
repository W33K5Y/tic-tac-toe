// ! Declare variables
const section1 = document.querySelector('.section-one');
const mainDiv = document.getElementById('main-wrap');
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
let winnerMessage = "";
// ! start to loop through #main-wrap children and attach a listener to each one

for (prop of mainDiv.children) {
  prop.addEventListener('click',addSVGs);
}

// ! this adds the circles and croses in player order and then removes the listener on the specific el 

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
      whosTheWinner(doesPlayerTwoWin,'Two')

     } else{
      this.innerHTML = cross;
      this.removeEventListener("click",addSVGs);
      keepTrackPlayerOne.push(this.id); 
      keepTrackPlayerOne.sort();
     let doesPlayerOneWin = keepTrackPlayerOne.toString();
    console.log(doesPlayerOneWin)
      whosTheWinner(doesPlayerOneWin,"One")
    } 

}
function whosTheWinner(player, message) {
  switch(player) {
    case "0,1,2" : console.log(`Player ${message} Wins`); break;
    case '3,4,5' : console.log(`Player ${message} Wins`); break;
    case "6,7,8" : console.log(`Player ${message} Wins`); break;
    case "0,3,6" : console.log(`Player ${message} Wins`); break;
    case "1,4,7" : console.log(`Player ${message} Wins`); break;
    case "2,5,8" : console.log(`Player ${message} Wins`); break;
    case "0,4,8" : console.log(`Player ${message} Wins`); break;
    case "2,4,6" : console.log(`Player ${message} Wins`); break;
  
  }
}


// ! function to keep track of who wins the game 

switch(keepTrackPlayerOne) {
  //  Up Top
       case '012': console.log('testy'); break;
       case '021': console.log('testy'); break;
       case '120': console.log('testy'); break;
       case '102': console.log('testy'); break;
       case '201': console.log('testy'); break;
       case '210': console.log('testy'); break;
 // Middle 
       case '345': console.log('testy'); break;
       case '354': console.log('testy'); break;
       case '543': console.log('testy'); break;
       case '534': console.log('testy'); break;
       case '453': console.log('testy'); break;
       case '435': console.log('testy'); break;
 // bottom
       case '678': console.log('testy'); break;
       case '687': console.log('testy'); break;
       case '786': console.log('testy'); break;
       case '768': console.log('testy'); break;
       case '876': console.log('testy'); break;
       case '867': console.log('testy'); break; 
 // left
       case '036': console.log('testy'); break;
       case '063': console.log('testy'); break;
       case '360': console.log('testy'); break;
       case '306': console.log('testy'); break;
       case '630': console.log('testy'); break;
       case '603': console.log('testy'); break;
 // middle
       case '147': console.log('testy'); break;
       case '174': console.log('testy'); break;
       case '417': console.log('testy'); break;
       case '471': console.log('testy'); break;
       case '741': console.log('testy'); break;
       case '714': console.log('testy'); break;
 // right 
       case '258': console.log('testy'); break;
       case '285': console.log('testy'); break;
       case '582': console.log('testy'); break;
       case '528': console.log('testy'); break;
       case '852': console.log('testy'); break;
       case '825': console.log('testy'); break;
 // diagonal left
       case '048': console.log('testy'); break;
       case '084': console.log('testy'); break;
       case '408': console.log('testy'); break;
       case '480': console.log('testy'); break;
       case '840': console.log('testy'); break;
       case '804': console.log('testy'); break;
 // diagonal right
       case '246': console.log('testy'); break;
       case '264': console.log('testy'); break;
       case '462': console.log('testy'); break;
       case '426': console.log('testy'); break;
       case '642': console.log('testy'); break;
       case '624': console.log('testy'); break;
 
     }
