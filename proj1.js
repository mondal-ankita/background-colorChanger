const btn = document.querySelectorAll('.button')
//console.log(btn);
const body = document.querySelector("body");
btn.forEach( function(button) {
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'aqua'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellowgreen'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'pink'){
            body.style.backgroundColor = e.target.id;
        }
    });
});
