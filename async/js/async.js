// Sample of normal fucntion without async await
// function myfunc(){
// return 'Hello Dear'
// }

// console.log(myfunc());

// async function myfunc(){
// return 'Hello Dear'
// }
// myfunc().then(res => {
//     console.log(res)
// })

async function myfunc(){
    const promise = new Promise((resolve ,reject) =>{
        setTimeout(() => resolve('hello') , 2000);
    });
    const error = false ; 
    if (!error) {
        const res = await promise //wait until promise resolve 
        return res;
    } else {
        await Promise.reject(new Error('Something went wrong'));
    }
}

myfunc().then(res =>{
    console.log(res)
})