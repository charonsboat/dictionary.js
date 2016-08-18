var chai = require('chai');
var expect = chai.expect;
var Dict = require('./../dist/dictionary');

var fillDictionary = function (dict)
{
    dict.set('hello', 'world');
    dict.set('animal', 'kingdom');
    dict.set('rick', 'morty');
}

describe('dictionary.js', function ()
{
    it('should be able to add and retrieve dictionary items', function ()
    {
        var dict = new Dict();

        fillDictionary(dict);

        expect(dict.get('hello')).to.equal('world');
        expect(dict.get('animal')).to.equal('kingdom');
        expect(dict.get('rick')).to.equal('morty');
    });
})
