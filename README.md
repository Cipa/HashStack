##A URL hash stack manager
- can be used as an history plugin
- generates a custom hashtag that contains a specific number of items 
- the default separator is '/'. You can use your own, just be careful on what you use as Safari and some other browsers will don't accept any type of separator
- pure js
- on stack length inconsistencies the stack is cleared
- tested in IE9, FF, Chrome, Safari

##Example
```
var hashIt = new HashStack(4);
hashIt.set('test1', 1);
hashIt.set('test2', 2);
```
will change the url's hash to **#test1/test2//**

##Example
```
var hashIt = new HashStack(4, false);
hashIt.init();

```
stack init is not called by default so you can check get the hash and initialize manually if needed.


##APIs

1. get(position) - no position in order to get the full stack eg. test1///test4
2. set(hash, position)
3. remove();


##Real life example with jQuery

```
//init with a
var hashIt = new HashStack(2);

//on event
$('select[name="select1"]').change(function(){

	var hash = $(this).find('option:selected').val();
	hashIt.set(hash, 1);
	
	//do ajax stuff
		
});

$('select[name="select2"]').change(function(){

	var hash = $(this).find('option:selected').val();
	hashIt.set(hash, 2);
	
	//do ajax stuff
		
});

//on ready/load
var hash = hashIt.get();
if(hash){

	var hash1 = hashIt.get(1);
	if(hash1){
		$('select[name="select1"] option[value="'+hash1+'"]').prop('selected', true);
	}
	
	var hash2 = hashIt.get(2);
	if(hash2){
		$('select[name="select2"] option[value="'+hash2+'"]').prop('selected', true);
	}

}

```
