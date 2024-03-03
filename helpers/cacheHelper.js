const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 100, checkperiod: 120 }); //time to live -- 100seconds, checking 120seconds

//set the data
exports.setCache = (key, value) => {
    return myCache.set(key, value);
};

exports.getCache = (key) => {
    return myCache.get(key);
};

exports.deleteCache = (key) => {
    return myCache.del(key);
};

exports.clearCache = () => {
    return myCache.flushAll();
};
