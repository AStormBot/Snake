const modes = ['top', 'down', 'right', 'left']

document.body.addEventListener('keypress', (e) => {
    if (e.key === "w") {
        angle = "top"
    }else if (e.key === "s") {
        angle = 'down'
    }else if (e.key === 'd') {
        angle = 'right'
    }else if (e.key === 'a') {
        angle = 'left'
    }
})
let angle = "top";
const snake = document.getElementById('snake');
let y = snake.style.top;
let x = snake.style.left;

let ly = '';
let lx = '';
let snake_length = 8;

const divs = []

function create_apple() {
    document.getElementById('apple').style.top = Math.floor(Math.random() * 101) + '%';
    document.getElementById('apple').style.left = Math.floor(Math.random() * 101) + '%';

}
create_apple();

let distance = 1

const check = setInterval(() => {
    // Update Data
    y = document.getElementById('snake').style.top;
    x = document.getElementById('snake').style.left;
    
    // last data
    ly = parseInt(y.slice(0,-1));
    lx = parseInt(x.slice(0,-1));
    
    ay = parseInt(document.getElementById('apple').style.top.slice(0,-1));
    ax = parseInt(document.getElementById('apple').style.left.slice(0,-1));
    
    if (angle === "top") {
        ly--;
    }
    else if (angle === "down") {
        ly++;
    }
    else if (angle === 'right') {
        lx++;
    }else if (angle === 'left') {
        lx--;
    }

    const parent = document.getElementById("app");


    divs.push(document.createElement('span'));
    divs[divs.length - 1].classList += `a${divs.length}`;
    divs[divs.length - 1].style.top = ly + "%";
    divs[divs.length - 1].style.left = lx + "%";
    if (divs.length > snake_length) {
        divs[1].style.display = 'none';
        // divs[divs.length - snake_length].style.display = 'none';
        divs[divs.length - snake_length].classList += ' none'
        if (divs.length > 51) {
            const child = document.querySelector(`.a${divs.length - 50}`);


            parent.removeChild(child);
        }
    }
    
    if (ay - ly <= distance && ay - ly >= -distance && ax - lx <= distance && ax - lx >= -distance) {
        create_apple();
        snake_length += 1
    }
    
    if (lx > 98) {
        lx = -5
    }
    if (lx < -5) {
        lx = 98
    }
    if (ly > 98) {
        ly = -5
    }
    if (ly < -5) {
        ly = 98
    }
    // console.log(ay - ly)
    
    document.getElementById('app').appendChild(divs[divs.length - 1]);
    document.getElementById('snake').style.top = ly + '%';
    document.getElementById('snake').style.left = lx + "%";
}, 100);
const stop = () => {
    clearInterval(check)
    return "project stopped";
}


