/**
 * ObjectShuffle class which define common object function
 */
class ObjectShuffle{
    /**
     * Check if array of object contain certain object
     * by some field
     *
     * @param {Array} objectArray - array of objects
     * @param {Object} object - equal object
     * @param {string} prop - property by which object equal
     * @returns {boolean} - is contains object
     */
    static isContains(objectArray, object, prop) {
        return object[prop] === undefined ? false :
            objectArray.some((item) => item[prop] === object[prop]);
    }

    /**
     * Return array of unique object by certain property
     *
     * @param {Array} objectArray - array of objects
     * @param {string} prop - property by which object unique
     * @returns {boolean} - is contains object
     */
    static uniqBy(objectArray, prop) {
        const res = [];
        objectArray.forEach((item) => {
            if (!this.isContains(res, item, prop)) {
                res.push(Object.assign({}, item));
            }
        });
        return res;
    }

    /**
     * Return index of object by certain property
     *
     * @param {Array} objectArray - array of objects
     * @param {Object} object - object
     * @param {string} prop - property by which object checking
     * @returns {number} - index in array
     */
    static indexOfByField(objectArray, object, prop) {
        let res = -1;
        for (let i = 0; i < objectArray.length; i++) {
            if (objectArray[i][prop] === object[prop]) {
                res = i;
                break;
            }
        }
        return res;
    }

    /**
     * Check objects equality by provided property
     *
     * @param {Object} obj1 - first object
     * @param {Object} obj2 - second object
     * @param {string} prop - property by which object checking
     * @returns {boolean} - is object equal
     */
    static isObjectEqualByField(obj1, obj2, prop) {
        return obj1[prop] === obj2[prop];
    }
}
module.exports = ObjectShuffle;
