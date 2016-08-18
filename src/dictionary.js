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

    get(key) {
        let index = _(this).pairs.keys.indexOf(key);

        return index > -1 ? _(this).pairs.values[index] : undefined;
    }

    getAll() {
        let groups = [];

        for (let i = 0; i < _(this).pairs.keys.length; ++i)
        {
            groups.push([ _(this).pairs.keys[i], _(this).pairs.values[i] ]);
        }

        return groups;
    }

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

    containsKey(key) {
        let index = _(this).pairs.keys.indexOf(key);

        return index > -1;
    }

    sort(sortingFunc) {
        let groups = this.getAll();

        groups.sort(function (a, b)
        {
            let x = {
                key: a[0],
                value: a[1]
            };

            let y = {
                key: b[0],
                value: b[1]
            };

            return sortingFunc(x, y);
        });

        _(this).pairs.keys = [];
        _(this).pairs.values = [];

        for (let group of groups)
        {
            _(this).pairs.keys.push(group[0]);
            _(this).pairs.values.push(group[1]);
        }
    }

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

    forEach(eachFunc) {
        let groups = this.getAll();

        for (let group of groups)
        {
            eachFunc(group[0], group[1]);
        }
    }
}

export default Dictionary;
