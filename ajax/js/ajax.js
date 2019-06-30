
document.querySelector('#button').addEventListener('click' , loadData);
function loadData(){
    // create xhr object
    const xhr = new XMLHttpRequest();

    // Open XMLHttpRequest
    xhr.open('GET', 'ajax.text', true);
    xhr.onload = function(){
        // console.log('READYSTATE' , xhr.readyState) ---------------->>>>CHECK READY STATE
        if(this.status === 200 && this.readyState === 4){
            console.log(this.responseText);
            document.querySelector('#output').innerHTML=`<h1 class = "cyan-text">${this.responseText}</h1>`
            
        }
    }

    xhr.send();

}


// HTTP STATUS ---------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 200 = OK
// 404 = NOT FOUND 
// 403 = FORBIDDEN

// READY STATE -------------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// 0 = REQUEST NOT INITIALIZE 
// 1 = SERVER CONNECTION ESTABLISH 
// 2 = REQUEST RECIEVE
// 3 = PREPROCESSING REQUEST
// 4 = REQUEST FINISHED RESPONSE READY 




// es6 arrow function  ------------------------------>>>>>>>>>>>>>>>>>>>>>>>>
// let loadData = () => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', 'data.text', true);
//     xhr.onload = function(){
// (this.status === 200)? (console.log(this.responseText) , document.querySelector('#output').innerHTML=`${this.responseText}`) : null;
//     }
//     xhr.send();
// }

// document.querySelector('#button').addEventListener('click' , loadData);