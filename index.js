// Your code here

class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    get countSides() {
        return this.sides.length;
    }

    get perimeter() {
        return this.sides.reduce(function(total, element) {
            return total + element;
        })
    }


}

class Triangle extends Polygon {
    get isValid() {
        let largestSide = this.sides.sort()[2];
        let smallestSide = this.sides.sort()[0];
        let middleSide = this.sides.sort()[1];
        if (this.countSides == 3 && largestSide < smallestSide + middleSide) {
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {

    get isValid() {
        if (this.countSides == 4 && this.sides[0] == this.sides[1] && this.sides[1] == this.sides[2] && this.sides[2] == this.sides[3]) {
            return true;
        } else {
            return false;
        }
    }

    get area() {
        return this.sides[0] ** 2;
    }
}