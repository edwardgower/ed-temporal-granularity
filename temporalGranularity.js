/**
 * temporalGranularity.js: Enum for the various levels of granularity available.
 * For example a timestamp will have information down to the millisecond but the event
 * may only be accruate to the second. A setting of 2 in this case would mask the timestamp to
 * the granularity of a second for the purpose of comparison and calculations.
 *
 * (C) 2014 Ed Gower
 *
 */

/**
 * Enum for the temporal granularity of an event
 * @enum {number}
 */
var temporalGranularity = {
    microSecond: 0,
    milliSecond: 1,
    second: 2,
    minute: 3,
    hour: 4,
    day: 5,
    week: 6,
    month: 7,
    year: 8,
    decade: 9,
    century: 10,
    // these properties are overkill here but serve as a canonical example of how to add
    // properties to more complex enums if they are required.
    /**
     * Properties on the Enum allow us to query additional attributes for example the below
     * example shows how to determine the name property on the enum
     * Usage example:  return _temoralgranularities.properties[_granularity].name
     *
     * Each granularity has the following properties:
     * name @type {string}
     * value @type {number}
     * code @type {string}
     * desc @type {string}
     */
    properties: {
        0: {name: 'microsecond', value: 0, code: 'µs', desc: ''},
        1: {name: 'millisecond', value: 1, code: 'ms', desc: ''},
        2: {name: 'second', value: 2, code: 's', desc: ''},
        3: {name: 'minute', value: 3, code: 'm', desc: ''},
        4: {name: 'hour', value: 4, code: 'h', desc: ''},
        5: {name: 'day', value: 5, code: 'd', desc: ''},
        6: {name: 'week', value: 6, code: 'w', desc: ''},
        7: {name: 'month', value: 7, code: 'mm', desc: ''},
        8: {name: 'year', value: 8, code: 'y', desc: ''},
        9: {name: 'decade', value: 9, code: 'dec', desc: ''},
        10: {name: 'century', value: 10, code: 'c', desc: ''}
    }
};
// need to freeze both the main enum object and the contained properties object.
Object.freeze( temporalGranularity );
Object.freeze( temporalGranularity.properties );

/** temporalGranularity Enum is exported */
module.exports = temporalGranularity;