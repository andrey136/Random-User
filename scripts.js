let div;
function randomUser(){
    axios.get('https://randomuser.me/api')
        .then(function (response) {
            // handle success
            console.log(response.data);
            render(response);//.data.results[0]
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}
function render (obj){
    for (let i = 0; i < 3; i++){
        div = document.createElement('div');

        div.innerHTML = obj.data.results[0].email;
        console.log(obj);
        document.getElementById('email').appendChild(div);
    }

}