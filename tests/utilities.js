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

describe('dictionary.js - utilities', function ()
{
    it('.exists() should return a boolean representing whether or not a key exists in the dictionary', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        expect(dict.exists('hello')).to.equal(true);
        expect(dict.exists('yellow')).to.equal(false);
    });

    it('.contains() should return a boolean representing whether or not a value exists in the dictionary', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        expect(dict.contains('world')).to.equal(true);
        expect(dict.contains('ruby')).to.equal(false);
    });

    it('.length() should return the length of the dictionary (as an int)', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        expect(dict.length()).to.equal(list.length);
    });

    it('.forEach() should iterate over all records in the dictionary', function ()
    {
        var dict = new Dict();

        fillDictionary(dict, list);

        var i_count = 0;

        dict.forEach(function (record, index)
        {
            expect(record.key).to.equal(list[index].key);
            expect(record.value).to.equal(list[index].value);

            ++i_count;
        });

        expect(i_count).to.equal(list.length);
    });
})
