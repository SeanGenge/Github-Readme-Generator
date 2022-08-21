function ifEquals(arg1, arg2, options) {
    // console.log(arg1, arg2, arg1 == arg2);
    if (arg1 === arg2) {
        return options.fn(this);
    }
    else {
        return options.inverse(this);
    }
}

module.exports = {
    ifEquals
}