        // Es5 OOP library 

    function EasyHTTP(){
        this.http = new XMLHttpRequest();
}
// 
//         // make get request
//     EasyHTTP.prototype.get = function(url , callback){
//         this.http.open('GET' , url , true);
//         let self = this ;
//         this.http.onload = function(){
//             if (self.http.status === 200){
//                 callback(null, self.http.responseText);
//             } else {
//                 callback('Error: ' + self.http.status)
//             }
//         }
//         this.http.send();
//     }
    // EasyHTTP.prototype.get = function(url , callback){
    //     this.http.open('GET' , url , true);
    //     let self = this ;
    //     this.http.onload = function(){
    //         if (self.http.status === 200){
    //             callback(null, self.http.responseText);
    //         } else {
    //             callback('Error: ' + self.http.status)
    //         }
    //     }
    //     this.http.send();
    // }
    EasyHTTP.prototype.get = function(url , callback){
        this.http.open('GET' , url , true);
        this.http.onload = () => {
            if (this.http.status === 200){
                callback(null, this.http.responseText);
            } else {
                callback('Error: ' + this.http.status)
            }
        }
        this.http.send();
    }

    // Make an HTTP POST request
    EasyHTTP.prototype.post = function(url , data, callback){
        this.http.open('POST' , url , true);
        this.http.setRequestHeader('Content-type' , 'application/json');
        let self = this;
        this.http.onload = () => callback(null , self.http.responseText);
        this.http.send(JSON.stringify(data));
    };





    // Make an HTTP PUT request
    EasyHTTP.prototype.put = function(url , data , callback){
        this.http.open('PUT' , url , true);
        this.http.setRequestHeader('Content-type' , 'application/json')
        let self = this;
        this.http.onload = function(){
            callback(null , self.http.responseText);
        }
        this.http.send(JSON.stringify(data));
    }
    
    // Make an HTTP DELETE request
    EasyHTTP.prototype.delete = function(url , callback){
        this.http.open('DELETE' , url , true);
        let self = this;
        this.http.onload = function(){
            if(self.http.status === 200){
                callback(null , 'Post deleted');
            } else {
                callback('Error: '+ self.http.status )
            }
            
        }
        this.http.send();
    }