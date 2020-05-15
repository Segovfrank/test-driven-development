const assert = require('assert');
const VectorCalculator = require('../app/VectorCalculator');

describe('Vector calculator', () => {
    describe('#sum', () => {

        let v1 = {x: 4, y: 3};
        let v2 = {x: 1, y: 3};

        it('Should sum vectors', () => {
            assert.deepEqual({x: 5, y: 6}, VectorCalculator.sum(v1, v2))
        })
    })

    describe('#sub', () => {

        let v1 = {x: 4, y: 3};
        let v2 = {x: 1, y: 3};

        it('Should sub vectors', () => {
            assert.deepEqual({x: 3, y: 0}, VectorCalculator.sub(v1, v2))
        })
    })

    describe('#scale', () => {

        let v1 = {x: 4, y: 3};
        let scalar = 3;

        it('Should scale vectors', () => {
            assert.deepEqual({x: 12, y: 9}, VectorCalculator.scale(v1, scalar))
        })
    })

    describe('#dot', () => {

        let v1 = {x: 4, y: 3};
        let v2 = {x: 2, y: 4};

        it('Should do dot product of vectors', () => {
            assert.deepEqual({x: 8, y: 12}, VectorCalculator.dot(v1, v2))
        })
    })
})