const service = {};
service.findLargest = (list) => {
    var length = list.length;
    if (length == 1) return list[0];
    if (list[length-1] > list[length-2] && list[length-1] > list[0]) return list[length-1];
    var middleIndex = Math.floor(list.length/2);
    if (list[middleIndex] > list[middleIndex-1] && list[middleIndex] > list[middleIndex+1]) {
        return list[middleIndex];
    } else {
        if (list[middleIndex] > list[list.length -1]) {
            return findLargest(list.slice(0, middleIndex));
        } else {
            return findLargest(list.slice(middleIndex, list.length));
        }
    }
};

module.exports = service;