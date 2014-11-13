ed-temporal-granularity
=======================

Temporal Granularity Enum Object for Event Driven Network

Usage: var granularity = require ('ed-temporal-granularity');

granularity.millisecond // 1

granularity.properties[1].name // 'millisecond'
granularity.properties[1].value // 1
granularity.properties[1].code // 'ms'


Values of the enum are:

    microsecond: 0,
    millisecond: 1,
    second: 2,
    minute: 3,
    hour: 4,
    day: 5,
    week: 6,
    month: 7,
    year: 8,
    decade: 9,
    century: 10,