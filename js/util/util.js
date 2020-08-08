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

    // <array>.sort(sort.random);
    random: function (a, b) {
        return 0.5 - Math.random();
    }
}

export { sort };