let map = new WeakMap();

let _ = function (context)
{
    if (!map.has(context)) map.set(context, {});

    return map.get(context);
}

class Dictionary {
    constructor() {
        _(this).pairs = {
            keys: [],
            values: []
        };
    }

    /**
     * Accessors ---------------------------------------------------------------
     */

    /**
     * Returns the value associated with the given key.
     *
     * @param  {mixed} key - the identifier used to look up the requested value
     * @return {mixed}
     */
    get(key) {
        let index = _(this).pairs.keys.indexOf(key);

        return index > -1 ? _(this).pairs.values[index] : undefined;
    }

    /**
     * Associates (stores) the given value with the given key.
     *
     * @param  {mixed} key - the key where the value should be stored
     * @param  {mixed} value - the value to store at the specified key
     */
    set(key, value) {
        let index = _(this).pairs.keys.indexOf(key);

        if (index > -1)
        {
            _(this).pairs.values[index] = value;
        }
        else
        {
            _(this).pairs.keys.push(key);
            _(this).pairs.values.push(value);
        }
    }

    /**
     * Returns the key/value pair stored at the given index or 'undefined' if the index doesn't exist.
     *
     * @param  {int} index - the index of the key/value pair to return
     * @return {object|undefined}
     */
    at(index) {
        if (_(this).pairs.keys.indexOf(index) === -1) return undefined;

        return {
            key: _(this).pairs.keys[index],
            value: _(this).pairs.values[index]
        };
    }

    /**
     * Removes the record stored at the given key (or index).
     *
     * @param {mixed} key - the key (or index) of the record to remove
     * @param {boolean} is_index - a boolean flag to indicate that the given key is actually an index
     */
    remove(key, is_index = false) {
        let index = is_index ? key : _(this).pairs.keys.indexOf(key);

        _(this).pairs.keys.splice(index, 1);
        _(this).pairs.keys.splice(index, 1);
    }

    /**
     * Removes and returns the record stored at the given key (or index).
     *
     * @param {mixed} key - the key (or index) of the record to remove
     * @param {boolean} is_index - a boolean flag to indicate that the given key is actually an index
     * @return {object}
     */
    pop(key, is_index = false) {
        if (arguments.length === 0)
        {
            // if no params are passed, just pop() the last record
            let index = _(this).pairs.keys.length - 1;

            return {
                key: _(this).pairs.keys.pop(),
                value: _(this).pairs.keys.pop()
            };
        }

        let index = is_index ? key : _(this).pairs.keys.indexOf(key);

        let key = _(this).pairs.keys[index];
        let value = _(this).pairs.values[index];

        this.remove(index, true);

        return {
            key: key,
            value: value
        };
    }

    /**
     * Returns an array of key/value pairs (simple objects).
     *
     * @return {[object]}
     */
    data() {
        let records = [];

        for (let i = 0; i < _(this).pairs.keys.length; ++i)
        {
            records.push({
                key: _(this).pairs.keys[i],
                value: _(this).pairs.values[i]
            });
        }

        return records;
    }

    /**
     * Alias of data()
     * TODO: remove at next major update
     */
    getAll() {
        return this.data();
    }

    /**
     * Utilities ---------------------------------------------------------------
     */

    /**
     * Returns a boolean representing whether or not the given key exists in the dictionary.
     *
     * @param  {mixed} key - the key to search for
     * @return {boolean}
     */
    exists(key) {
        let index = _(this).pairs.keys.indexOf(key);

        return index > -1;
    }

    /**
     * Returns a boolean representing whether or not the given value exists in the dictionary.
     *
     * @param  {mixed} value - the value to search for
     * @return {boolean}
     */
    contains(value) {
        let index = _(this).pairs.values.indexOf(value);

        return index > -1;
    }

    /**
     * Alias of exists()
     * TODO: remove at next major update
     */
    containsKey(key) {
        return this.exists(key);
    }

    /**
     * Returns the length of the dictionary.
     *
     * @return {int}
     */
    length() {
        return _(this).pairs.keys.length;
    }

    /**
     * Iterates over the dictionary and runs the specified function for each record.
     *
     * @param {function} fn - the function to run
     */
    forEach(fn) {
        let records = this.data();

        for (let record of records)
        {
            fn(record.key, record.value);
        }
    }

    /**
     * Sorts the dictionary based on the supplied sorting function.
     *
     * @param {function} fn - the sorting function used to sort the dictionary
     */
    sort(fn) {
        let records = this.data();

        records.sort(fn);

        _(this).pairs.keys = [];
        _(this).pairs.values = [];

        for (let record of records)
        {
            _(this).pairs.keys.push(record.key);
            _(this).pairs.values.push(record.value);
        }
    }

    /**
     * Default sorting implementations -----------------------------------------
     */

    sortByKeyAsc() {
        this.sort(function (a, b)
        {
            if (a.key === b.key) return 0;

            return a.key < b.key ? -1 : 1;
        });
    }

    sortByKeyDesc() {
        this.sort(function (a, b)
        {
            if (a.key === b.key) return 0;

            return a.key > b.key ? -1 : 1;
        });
    }

    sortByValueAsc() {
        this.sort(function (a, b)
        {
            if (a.value === b.value) return 0;

            return a.value < b.value ? -1 : 1;
        });
    }

    sortByValueDesc() {
        this.sort(function (a, b)
        {
            if (a.value === b.value) return 0;

            return a.value > b.value ? -1 : 1;
        });
    }
}

export default Dictionary;
