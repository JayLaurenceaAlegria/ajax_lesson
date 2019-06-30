http = new EasyHTTP
const data = {

    name : 'Jhon Doe',
    username: 'jhondoe',
    email: 'jhondoe@gmaim.com'
}

http.post('https://jsonplaceholder.typicode.com/users' , data)
.then(users => console.log(users))
.catch (err => console.log(err))

http.put('https://jsonplaceholder.typicode.com/users/2' , data)
.then(users => console.log(users))
.catch (err => console.log(err))

http.get()
.then(users => console.log(users))
.catch (err => console.log(err))

http.delete('https://jsonplaceholder.typicode.com/users/2')
.then((data) => console.log(data))
.catch (err => console.log(err))
