
// factory function
function createCircle(radius, location) {
    return {
        radius,
        location: location,
        isVisible: false,
        draw(name) {
            console.log(name);
        }
    };
}
const circle = createcircle(1, 'dhaka');
console.log(circle);
circle.draw('draw');



// constructor function

function range(title, radius) {
    this.title = title;
    this.radius = radius;
    this.draw = function () {
        console.log('draw')
    }
}
const circle1 = new range('radius is:', 1);
console.log(circle1);


// cloning an object

const height = {
    radius: 1,
    draw() {
        console.log('draw');
    }
}

const another = {}
for (let key in height) {
    another[key] = height[key]
}
console.log(another);
