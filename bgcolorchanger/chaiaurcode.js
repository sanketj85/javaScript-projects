const random = function(){
    const hex = "0123456789ABCDEF"
    let color ='#'
    for (let index = 0; index < 6; index++) {
        color += hex[Math.floor(Math.random()*16)]        
    }
    console.log(color);
    return color
}

let intervalId
// const start = function(){
//     if (!intervalId) {
//         intervalId = setInterval(changeColor, 1000)
//     }
//     function changeColor (){
//         document.body.style.backgroundColor = random()
//     }
// }

// const stop = function(){
//     clearInterval(intervalId)
//     intervalId = null
// }

// document.querySelector('#stop').addEventListener('click', stop)
// document.querySelector('#start').addEventListener('click', start)

document.querySelector('#start').addEventListener('click', function(e){
    if (!intervalId) {
        intervalId = setInterval(changeColor, 1000)
    }
    function changeColor (){
        document.body.style.backgroundColor = random()
    }
})

document.querySelector('#stop').addEventListener('click', function(e){
    clearInterval(intervalId)
    intervalId = null
})