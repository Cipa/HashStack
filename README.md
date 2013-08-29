##A URL hash stack manager

##Example
```
var hashIt = new HashStack(4);
hashIt.set('test1', 1);
hashIt.set('test2', 2);
```
will change the url to hash to #test1/test2//



##APIs

1. get(position) - no position in order to get the full stack eg. test1///test4
2. set(hash, position)
3. remove();


