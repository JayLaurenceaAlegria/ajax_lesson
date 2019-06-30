document.querySelector('.get-jokes').addEventListener('click' , getJokes);
function getJokes(e){
    const number = document.querySelector('input[type = "number"]').value;
    const xhr = new XMLHttpRequest();

      xhr.open('GET', `http://api.icndb.com/jokes/random/${number}` , true);
      xhr.onload = function (){
        if(xhr.status === 200){
          const response = JSON.parse(this.responseText);
          let output = '';
          if(response.type === 'success'){
            response.value.forEach(function(joke){
                output +=`<li>${joke.joke}</li>
                        <div class="divider"></div>` ;
            })
          } else {
            output += `<li>Sorry the joke is not ready</li>`
          }
          document.querySelector('.jokes').innerHTML = output;
        }
      }
      xhr.send();
      e.preventDefault();
}