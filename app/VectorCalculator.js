exports.sum = (a, b) => {
    return {x: a.x + b.x, y: a.y + b.y};
}

exports.sub = (a, b) => {
    return {x: a.x - b.x, y: a.y - b.y};
}

exports.scale = (a, b) => {
    return {x: a.x * b, y: a.y * b};
}


exports.dot = (a, b) => {
    return {x: a.x * b.x, y: a.y * b.y};
}