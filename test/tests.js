test( "no init by default", function(assert) {
	
	var hashIt = new HashStack(4, false);
	assert.equal( hashIt.get(), '', "empty hash" );

});


test( "init", function(assert) {
	
	var hashIt = new HashStack(4);
	assert.equal( hashIt.get(), '///', "empty hash" );

});


test( "set 1 of 4", function(assert) {

	var hashIt = new HashStack(4);
	hashIt.set('test1', 1)
	assert.equal( hashIt.get(1), 'test1', "1 of 4" );

});



test( "set 1 of 5", function(assert) {

	var hashIt = new HashStack(5);
	hashIt.set('test1', 1)
	assert.equal( hashIt.get(1), 'test1', "1 of 5" );

});

test( "set 5 of 5", function(assert) {

	var hashIt = new HashStack(5);
	hashIt.set('test5', 5)
	assert.equal( hashIt.get(5), 'test5', "5 of 5" );

});

test( "remove", function(assert) {

	var hashIt = new HashStack(5);
	hashIt.set('test1', 1);
	hashIt.remove();
	assert.equal( hashIt.get(), '', "remove" );

});


test( "separator is //", function(assert) {

	var hashIt = new HashStack(5, true, '//');
	hashIt.set('test1', 1);
	assert.equal( hashIt.get(1), 'test1', "remove" );

});



test( "set 1 of 2", function(assert) {

	var hashIt = new HashStack(2);
	hashIt.set('test1', 1)
	assert.equal( hashIt.get(1), 'test1', "1 of 2" );

});

test( "remove", function(assert) {

	var hashIt = new HashStack(5);
	hashIt.set('test1', 1);
	hashIt.remove();
	assert.equal( hashIt.get(), '', "remove" );

});


test( "no init by default", function(assert) {

	var hashIt = new HashStack(2, false);
	assert.equal( hashIt.get(), '', "empty hash" );

});


test( "no init by default - get first", function(assert) {

	var hashIt = new HashStack(1, false);
	assert.equal( hashIt.get(1), '', "no init by default - empty hash");

});

test( "no init by default - no init call", function(assert) {
	var hashIt = new HashStack(2, false);
	assert.equal( hashIt.get(), '', "no init by default - get after not init");
	hashIt.set('test1', 1);
	assert.equal( hashIt.get(1), 'test1', "init was not called so stack is 1 - see previous hash stack call");
	hashIt.set('test2', 2);
	assert.equal( hashIt.get(2), undefined, "stack is one - no init was call at the last hashIt instantiation");
});


test( "no init by default but call init", function(assert) {
	var hashIt = new HashStack(2, false);
	hashIt.init()
	assert.equal( hashIt.get(), '/', "init called, stack empty");
	hashIt.set('test1', 1);
	assert.equal( hashIt.get(1), 'test1', "1 of 2");
	hashIt.set('test2', 2);
	assert.equal( hashIt.get(2), 'test2', "2 of 2");
});


//clean for reload
var hashIt = new HashStack();
hashIt.remove();