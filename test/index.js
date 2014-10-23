var optionalTags = require('../')
var assert = require('assert')

var safe = optionalTags(true)
assert.ok(~safe.ends.indexOf('li'))

var safe2 = optionalTags()
assert.ok(!safe2.starts.length)

var radical = optionalTags('radical')
assert.ok(!~radical.starts.indexOf('body'))
assert.ok(~radical.ends.indexOf('body'))

var unsafe = optionalTags('unsafe')
assert.ok(~unsafe.starts.indexOf('body'))
assert.ok(!~unsafe.starts.indexOf('br'))

var dangerous = optionalTags('dangerous')
assert.ok(~dangerous.starts.indexOf('colgroup'))
assert.ok(~dangerous.ends.indexOf('p'))

console.log('test ok.')