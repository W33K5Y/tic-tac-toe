
const section1 = document.querySelector('.section-one');
const mainDiv = document.getElementById('main-wrap');
let whosGo = 0;

for (prop of mainDiv.children) {
    prop.addEventListener('click',addSVGs);
   
}


function addSVGs(e) {
    whosGo ++;
    if(whosGo % 2 === 0) {
        this.firstElementChild.nextElementSibling.classList = "circle"; 
        this.firstElementChild.classList = "cross-display";
     }else{
        this.firstElementChild.classList = "cross";
        this.firstElementChild.nextElementSibling.classList = "circle-display";
    } 
    if(this.firstElementChild.className === "cross" ||
     this.firstElementChild.nextElementSibling.classList === "circle") {
       console.log('testy') 
    }
      

}


// function addSVGs(e) {
//     this.firstElementChild.classList = "cross";
//     this.firstElementChild.nextElementSibling.classList = "circle-display";
//     whosGo ++;
//     if(whosGo % 2 === 0) {
//            this.firstElementChild.classList = "cross-display";
//            this.firstElementChild.nextElementSibling.classList = "circle";            
//         }
      
//     }