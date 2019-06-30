
const getText = () => {
    fetch('text.text')
    .then( res => res.text())
    .then( data =>{console.log(data), document.querySelector('#output').innerHTML = data})
    .catch( err => console.log(err));
}

const getJson = () => {
    fetch('post.json')
    .then( res => res.json())
    .then( data => {
        let output = '';
        data.map( post => output += `<ul><li>ID : ${post.title}</li></ul>`)
        console.log(data);
        document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

const getAPI = () => {
    fetch('https://api.github.com/users')
    .then(res => res.text())
    .then(data => {
        data = JSON.parse(data);
        let output = '';
        data.map(user =>output += `<ul><li>ID : ${user.login}</li></ul>`)
        console.log(data);
        document.querySelector('#output').innerHTML = output;
    })
    .catch(err => console.log(err));
}


document.querySelector('#button1').addEventListener('click' , getText);
document.querySelector('#button2').addEventListener('click' , getJson);
document.querySelector('#button3').addEventListener('click' , getAPI);
