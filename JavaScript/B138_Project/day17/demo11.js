class Shape{

    find_area()
    {
        console.log('call this method to find the area of the Shape')
    }
}


class Square extends Shape{

    find_area()
    {
        console.log('to find area of Square use : L*L');
    }

}

class Rectangle extends Shape{

    find_area()
    {
        console.log('to find area of Rectangle use : L*B');
    }

}


class Circle extends Shape{

    find_area()
    {
        console.log('to find area of Circle use : pi*r*r');
    }

}

//create object of all the 3 class and call

let S = new Shape();
let Sq = new Square();
let Rec = new Rectangle();
let Cir = new Circle();

S.find_area();
Sq.find_area();
Rec.find_area();
Cir.find_area();