function parseCount (parseValue) {
    let f = Number.parseFloat(parseValue);
    if (Number.isNaN(f)) {
        throw new Error("Невалидное значение");
    }
    return f;
}

function validateCount (validateValue) {
    try {
        let f = parseCount(validateValue);
        return f;
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor (a, b, c) {
        if(a + b < c || a + c < b || c + b < a) {
            throw new Error ("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter () {
        return this.a + this.b + this.c;
    }

    get area () {
        let p = (this.a + this.b + this.c) / 2;
        let s = Math.sqrt( p * (p - this.a) * (p - this.b) * (p - this.c) );
        return parseFloat(s.toFixed(3));
    }
}

function getTriangle (a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        let t = new Triangle(0, 0, 0);

        Object.defineProperty(t, 'perimeter', { get: function() { return "Ошибка! Треугольник не существует" } });
        Object.defineProperty(t, 'area', { get: function() { return "Ошибка! Треугольник не существует" } });
        return t;
    }
}
