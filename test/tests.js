
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

	var hashIt = new HashStack(5, '//');
	hashIt.set('test1', 1);
	assert.equal( hashIt.get(1), 'test1', "remove" );

});



//clean for reload
var hashIt = new HashStack();
hashIt.remove();
