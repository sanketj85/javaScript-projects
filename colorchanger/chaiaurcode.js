const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
console.log(buttons);
console.log(body);
// buttons.forEach((button){
//     console.log(button);
//     button.addEventListener('click',function (e){
//         console.log(e);
//         console.log(e.target);
//     })
// })

buttons.forEach(button => {
    console.log(button);
    button.addEventListener('mouseover',function(e){
        console.log(e);
        console.log(e.target);
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'blue') {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id;
        }
    })
});
   buttons.forEach(button => {
    button.addEventListener('dblclick', function(f){
        if (f.target.id === 'red') {
            body.style.backgroundColor = 'fff';
        }
        if (f.target.id === 'green') {
            body.style.backgroundColor = 'fff';
        }
        if (f.target.id === 'blue') {
            body.style.backgroundColor = 'fff';
        }
        if (f.target.id === 'yellow') {
            body.style.backgroundColor = 'fff';
        }
    })
   }) 
    