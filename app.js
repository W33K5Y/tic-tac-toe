
const section1 = document.querySelector('.section-one');
const mainDiv = document.getElementById('main-wrap');
let whosGo = 0;
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

for (prop of mainDiv.children) {
    prop.addEventListener('click',addSVGs);
}

// ! this adds the circles and croses in player order and then removes the listener on the specific el 
function addSVGs(e) {
    whosGo ++;
    if(whosGo % 2 === 0) {
      this.innerHTML = circle;
      this.removeEventListener("click",addSVGs);
     } else{
      this.innerHTML = cross;
      this.removeEventListener("click",addSVGs);
    } 

}
