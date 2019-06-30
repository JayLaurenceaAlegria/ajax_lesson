const data = {

    name : 'Jhon Doe',
    username: 'jhondoe',
    email: 'jhondoe@gmaim.com'
}

async function getUser(){
    // await response of the fetch 
    const response = await fetch('https://jsonplaceholder.typicode.com/users') ;
    // only proceed once its resolve 
    const data = await response.json();

    // only proceed once second promise resolve 
    return data;
}



// post 
async function post(url , data){
    // await response of the fetch 
    const response = await fetch(url , {
        method: 'POST',
        headers: {'Content-type' : 'application/json'
                },
        body: JSON.stringify(data)
    })
    // only proceed once its resolve 
    const myData = await response.json();

    // only proceed once second promise resolve 
    return myData;
}



// put
async function put(url , data){
    // await response of the fetch 
    const response = await fetch(url , {
        method: 'PUT',
        headers: {'Content-type' : 'application/json'
                },
        body: JSON.stringify(data)
    })
    // only proceed once its resolve 
    const Mydata = await response.json();

    // only proceed once second promise resolve 
    return Mydata;
}


// Delete
async function Post_delete(url){
    // await response of the fetch 
    const response = await fetch(url , {
        method: 'DELETE',
        headers: {'Content-type' : 'application/json'
                },
    })
    // only proceed once its resolve 
    const Mydata = await response.json();

    // only proceed once second promise resolve 
    return Mydata;
}


post('https://jsonplaceholder.typicode.com/users' , data)
.then(users => console.log(users))
.catch (err => console.log(err))

put('https://jsonplaceholder.typicode.com/users/2' , data)
.then(users => console.log(users))
.catch (err => console.log(err))

getUser()
.then(users => console.log(users))
.catch (err => console.log(err))

Post_delete('https://jsonplaceholder.typicode.com/users/2')
.then(() => console.log('Delete'))
.catch (err => console.log(err))


