// class Branch {
//     constructor(len, angle, px, py) {
//         this.coord = 0;
//         this.isEnd = false;
//         this.len = -len;
//         this.px = px;
//         this.py = py;
//         this.angle = angle || 0;
//     }
//
//     update() {
//         this.coord--;
//         this.draw();
//     }
//
//     draw() {
//         rotate(this.angle);
//         line(0, 0, 0, this.coord);
//     }
//
//     isEnd() {
//         return this.coord === this.len;
//     }
//
//     getBranches() {
//         if (-this.len < 4) {
//             return [];
//         }
//
//         return [
//             new Branch(this.len * 0.7, PI / 4),
//             new Branch(this.len * 0.7, -(PI / 4) )
//         ];
//     }
// }


function setup() {
    createCanvas(900, 600);
}

let branches = [new Branch(100)];

function draw() {
    background(70);
    noFill();
    translate(width / 2, height);
    stroke(255);


    // for (let br of branches) {
    //     if (br.isEnd()) {
    //         br.draw();
    //         branches.concat(br.getBranches())
    //     } else {
    //         br.update();
    //     }
    // }

    branch(150, 0);
}

function branch(len, angle) {
    rotate(angle);
    line(0, 0, 0, -len);
    translate(0, -len);

    if (len > 4) {
        push();
        branch(len * 0.68, PI / 6);
        pop();

        push();
        branch(len * 0.68, -(PI / 6));
        pop();
    }

    rotate(PI / 4);
}
