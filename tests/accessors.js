var expect = require('chai').expect;
var Dict = require('./../dist/dictionary');

var list = [
    { key: 'hello', value: 'world' },
    { key: 'animal', value: 'kingdom' },
    { key: 'rick', value: 'morty' },
];

var fillDictionary = function (dict, list)
{
    for (var item of list)
    {
        dict.set(item.key, item.value);
    }
}

describe('dictionary.js - accessors', function ()
{
    it('.set() and .get() should be able to store and retrieve (by key) dictionary items', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list); // sets the values

        // if we can retrive the values, then we know that .set() works as well as .get()
        expect(dict.get('hello')).to.equal('world');
        expect(dict.get('animal')).to.equal('kingdom');
        expect(dict.get('rick')).to.equal('morty');
    });

    it('.at() should be able to retrive (by index) dictionary records', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        expect(dict.at(0)).to.deep.equal(list[0]);
        expect(dict.at(1)).to.deep.equal(list[1]);
        expect(dict.at(2)).to.deep.equal(list[2]);
    });

    it('.remove() should be able to remove a record from the dictionary (by key or index)', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        dict.remove('hello'); // by key

        expect(typeof dict.get('hello')).to.equal('undefined');

        // the other records should still be there
        expect(dict.get('animal')).to.equal('kingdom');
        expect(dict.get('rick')).to.equal('morty');

        dict.remove(0, true); // by index

        expect(typeof dict.get('animal')).to.equal('undefined');

        // the other records should still be there
        expect(dict.get('rick')).to.equal('morty');
    });

    it('.pop() should be able to retrive and remove a record from the dictionary (by key, index, or no argument specified)', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        expect(dict.pop('hello')).to.deep.equal(list[0]); // by key
        expect(typeof dict.get('hello')).to.equal('undefined');

        expect(dict.pop(0, true)).to.deep.equal(list[1]); // by index
        expect(typeof dict.get('animal')).to.equal('undefined');

        expect(dict.pop()).to.deep.equal(list[2]); // by index
        expect(typeof dict.get('rick')).to.equal('undefined');
    });

    it('.data() should be able to retrieve the entire list of records', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        expect(dict.data()).to.deep.equal(list);
    });
})
