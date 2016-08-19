var expect = require('chai').expect;
var Dict = require('./../dist/dictionary');

var list = [
    { key: 'hello', value: 'world' },
    { key: 'animal', value: 'kingdom' },
    { key: 'rick', value: 'morty' },
];

var list_sortedByKeyAsc = [
    { key: 'animal', value: 'kingdom' },
    { key: 'hello', value: 'world' },
    { key: 'rick', value: 'morty' },
];

var list_sortedByKeyDesc = [
    { key: 'rick', value: 'morty' },
    { key: 'hello', value: 'world' },
    { key: 'animal', value: 'kingdom' },
];

var list_sortedByValueAsc = [
    { key: 'animal', value: 'kingdom' },
    { key: 'rick', value: 'morty' },
    { key: 'hello', value: 'world' },
];

var list_sortedByValueDesc = [
    { key: 'hello', value: 'world' },
    { key: 'rick', value: 'morty' },
    { key: 'animal', value: 'kingdom' },
];

var fillDictionary = function (dict, list)
{
    for (var item of list)
    {
        dict.set(item.key, item.value);
    }
}

describe('dictionary.js - sorting', function ()
{
    it('.sortByKeyAsc() should be able to sort dictionary by keys in ascending order', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        dict.sortByKeyAsc();

        expect(dict.getAll()).to.deep.equal(list_sortedByKeyAsc);
    });

    it('.sortByKeyDesc() should be able to sort dictionary by keys in descending order', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        dict.sortByKeyDesc();

        expect(dict.getAll()).to.deep.equal(list_sortedByKeyDesc);
    });

    it('.sortByValueAsc() should be able to sort dictionary by values in ascending order', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        dict.sortByValueAsc();

        expect(dict.getAll()).to.deep.equal(list_sortedByValueAsc);
    });

    it('.sortByValueDesc() should be able to sort dictionary by values in descending order', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        dict.sortByValueDesc();

        expect(dict.getAll()).to.deep.equal(list_sortedByValueDesc);
    });
})
