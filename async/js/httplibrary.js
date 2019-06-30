        // Es6 library 

        class EasyHTTP{
         async get(){
                const response = await fetch('https://jsonplaceholder.typicode.com/users') ;
                const data = await response.json(); 
                return data;
            }
            async post(url , data){
                    const response = await fetch(url , {
                        method: 'POST',
                        headers: {'Content-type' : 'application/json'
                                },
                        body: JSON.stringify(data)
                    })
                    const myData = await response.json(); 
                    return myData;
            }
            async put(url , data){
                const response = await fetch(url , {
                    method: 'PUT',
                    headers: {'Content-type' : 'application/json'
                            },
                    body: JSON.stringify(data)
                })
                const Mydata = await response.json();
                return Mydata;
            }
            async  delete(url){
                const response = await fetch(url , {
                    method: 'DELETE',
                    headers: {'Content-type' : 'application/json'
                            },
                })
                const Mydata = 'deleted';
                return Mydata;
            }
        }
        