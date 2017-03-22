TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}
function triangle(size){
    forward(size);
    right(120);
    forward(size);
    right(120);
    forward(size);
    right(120);
    
}

function house(){
forward(150);
right(30);
left(30);
forward(150);
}
// Type your function call below
triangle(200);
house();
stamp();
