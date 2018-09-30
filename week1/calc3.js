exports.add = function add(a,b) {
    return a + b;
}

exports.sub = function sub(a,b) {
    return a - b;
}

exports.mul = function mul(a,b) {
    return a * b;
}

exports.div = function div(a,b) {
    if(b == 0) {
        return new Error('zero divider error.');
    }
    return a / b;
}

exports.mod = function mod(a,b) {
    if(b == 0) {
        return new Error('zero divider error.');
    }
    return a % b;
}

exports.getE = function getE() {
    return Math.E;
}