const http = new EasyHTTP;


// Get Posts 
http.get('https://jsonplaceholder.typicode.com/posts/1' , function(err , posts){
    if (err){
        console.log('error')
    } else {
        console.log(posts)
    }
});


// create data 
const data = {
    title : 'Custom post',
    body  : 'This is Custom Post'
};

// http.post('https://jsonplaceholder.typicode.com/posts' , data ,function(err , post){
//     if (err){
//         console.log(err)
//     } else {
//         console.log(post)
//     }
// });


// update post 

http.put('https://jsonplaceholder.typicode.com/posts/5' , data, function(err , posts){
    if (err){
        console.log(err)
    } else {
        console.log(posts)
    }
});
http.delete('https://jsonplaceholder1.typicode.com/posts/5' , function(err , response){
    if (err){
        console.log(err)
    } else {
        console.log(response)
    }
});