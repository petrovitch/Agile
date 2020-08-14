const sort = {
    // <array>.sort(sort.fullName);
    fullName: function (a, b) {
        if (a.name.last < b.name.last) {
            return -1;
        }

        if (a.name.last > b.name.last) {
            return 1;
        }

        if (a.name.first < b.name.first) {
            return -1;
        }

        if (a.name.first > b.name.first) {
            return 1;
        }

        return 0;
    },

    roleType: function (a, b) {
        if (a < b) {
            return -1;
        }

        if (a > b) {
            return 1;
        }

        return 0;
    },

    // <array>.sort(sort.random);
    random: function (a, b) {
        return 0.5 - Math.random();
    }
}

function shuffle(array = [], from, to) {    // from, to not working yet
    const a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
    return a;
}

export { sort, shuffle };