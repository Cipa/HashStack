##A URL hash stack manager
- generates a custom hashtag that contains a specific number of items 
- the default separator is '/'
- pure js

##Example
```
var hashIt = new HashStack(4);
hashIt.set('test1', 1);
hashIt.set('test2', 2);
```
will change the url's hash to **#test1/test2//**



##APIs

1. get(position) - no position in order to get the full stack eg. test1///test4
2. set(hash, position)
3. remove();


##Real life example with jquery

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
