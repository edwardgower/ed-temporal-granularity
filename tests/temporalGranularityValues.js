/**
 * Created by edgower on 11/10/14.
 */

var should = require( 'should' );
var granularity = require( '../temporalGranularity' );

describe( 'Temporal Granularity should have the properties: ', function () {
    it( 'microSecond, which should have a value of 0 (zero)', function () {
        granularity.should.have.ownProperty( 'microsecond' ).equal( 0 );
    } );
    it( 'milliSecond, which should have a value of 1', function () {
        granularity.should.have.property( 'millisecond', 1 );
    } );
    it( 'second, which should have a value of 2', function () {
        granularity.should.have.property( 'second', 2 );
    } );
    it( 'minute, which should have a value of 3', function () {
        granularity.should.have.property( 'minute', 3 );
    } );
    it( 'hour, which should have a value of 4', function () {
        granularity.should.have.property( 'hour', 4 );
    } );
    it( 'day, which should have a value of 5', function () {
        granularity.should.have.property( 'day', 5 );
    } );
    it( 'week, which should have a value of 6', function () {
        granularity.should.have.property( 'week', 6 );
    } );
    it( 'month, which should have a value of 7', function () {
        granularity.should.have.property( 'month', 7 );
    } );
    it( 'year, which should have a value of 8', function () {
        granularity.should.have.property( 'year', 8 );
    } );
    it( 'decade, which should have a value of 9', function () {
        granularity.should.have.property( 'decade', 9 );
    } );
    it( 'century, which should have a value of 10', function () {
        granularity.should.have.property( 'century', 10 );
    } )
} );

describe( 'The Temporal Granularity properties', function () {
    // microsecond
    it( 'should have a property of 0 (zero)', function () {
        granularity.properties.should.have.property( 0 );
    } );
    it( 'and it\'s properties should be microsecond, 0 and µs', function () {
        //granularity.properties[0].name.should.equal ('microsecond');
        granularity.properties[0].should.have.properties( {
            name: 'microsecond',
            value: 0,
            code: 'µs'
        } );
    } );
    // millisecond
    it( 'should have a property of 1', function () {
        granularity.properties.should.have.property( 1 );
    } );
    it( 'and it\'s properties should be millisecond, 1 and ms', function () {
        granularity.properties[1].should.have.properties( {
            name: 'millisecond',
            value: 1,
            code: 'ms'
        } );
    } );
    // second
    it( 'should have a property of 2', function () {
        granularity.properties.should.have.property( 2 );
    } );
    it( 'and it\'s properties should be second, 2 and s', function () {
        granularity.properties[2].should.have.properties( {
            name: 'second',
            value: 2,
            code: 's'
        } );
    } );
    // minute
    it( 'should have a property of 3', function () {
        granularity.properties.should.have.property( 3 );
    } );
    it( 'and it\'s properties should be minute, 3 and m', function () {
        granularity.properties[3].should.have.properties( {
            name: 'minute',
            value: 3,
            code: 'm'
        } );
    } );
    // hour
    it( 'should have a property of 4', function () {
        granularity.properties.should.have.property( 4 );
    } );
    it( 'and it\'s properties should be hour, 4 and h', function () {
        granularity.properties[4].should.have.properties( {
            name: 'hour',
            value: 4,
            code: 'h'
        } );
    } );
    // day
    it( 'should have a property of 5', function () {
        granularity.properties.should.have.property( 5 );
    } );
    it( 'and it\'s properties should be day, 5 and d', function () {
        granularity.properties[5].should.have.properties( {
            name: 'day',
            value: 5,
            code: 'd'
        } );
    } );
    // week
    it( 'should have a property of 6', function () {
        granularity.properties.should.have.property( 6 );
    } );
    it( 'and it\'s properties should be week, 6 and w', function () {
        granularity.properties[6].should.have.properties( {
            name: 'week',
            value: 6,
            code: 'w'
        } );
    } );
    // month
    it( 'should have a property of 7', function () {
        granularity.properties.should.have.property( 7 );
    } );
    it( 'and it\'s properties should be month, 7 and mm', function () {
        granularity.properties[7].should.have.properties( {
            name: 'month',
            value: 7,
            code: 'mm'
        } );
    } );
    // year
    it( 'should have a property of 8', function () {
        granularity.properties.should.have.property( 8 );
    } );
    it( 'and it\'s properties should be year, 8 and y', function () {
        granularity.properties[8].should.have.properties( {
            name: 'year',
            value: 8,
            code: 'y'
        } );
    } );
    // decade
    it( 'should have a property of 9', function () {
        granularity.properties.should.have.property( 9 );
    } );
    it( 'and it\'s properties should be decade, 9 and dec', function () {
        granularity.properties[9].should.have.properties( {
            name: 'decade',
            value: 9,
            code: 'dec'
        } );
    } );
    // century
    it( 'should have a property of 10', function () {
        granularity.properties.should.have.property( 10 );
    } );
    it( 'and it\'s properties should be century, 10 and c', function () {
        granularity.properties[10].should.have.properties( {
            name: 'century',
            value: 10,
            code: 'c'
        } );
    } );
} );