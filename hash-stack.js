function HashStack(stackLen, separator) {

	var _stackLen;
	var _separator;
	var _instance = this;
	
	_stackLen = _setDefault(stackLen, 1);
	_separator = _setDefault(separator, '/');
	
	
	function _isUndefined ( value ) {
	
		return ( typeof ( value ) === String ( undefined ) );
	
	}
	
	function  _setDefault ( value, defaultVal ) {
	
		return ( _isUndefined ( value ) ) ? defaultVal : value;
	
	}
	
	function _reset(){

		var stack = Array(_stackLen).join(_separator);
		window.location.hash = stack;

	}
	
	function _construct(){
		
		_init();
		
		return _instance;
		
	}
	
	function _init(){
		
		var currentHash = _instance.get();
		if(currentHash){
			
			var aCurrentHash = currentHash.split(_separator);
			var currentHashLen = aCurrentHash.length;
			
			//detect stack len issues so reset stack
			if(currentHashLen !== _stackLen){
				//reset
				_reset();
			}else{
				//ntd - init stack len equals the existing stack len
			}
			
		}else{
			
			//no hash or empty hash so init
			_reset();
			
		}

	}
	
	_instance.get = function (position){
		
		position = _setDefault(position, 0);

		var currentHash = window.location.hash;
		
		var justHash = currentHash.replace('#', '');
		
		if(position){
			
			var coh = justHash.split(_separator);
			return coh[position-1];
			
		}else{
			
			//detect something in hash 
			//return full hash if something
			//return nothing if like ///
			var cleannedHash = currentHash.replace('/'+_separator+'/g', '');
			if(cleannedHash){
				return justHash;
			}else{
				return '';
			}
			
		}

	}
	
	_instance.set = function (hash, position){
		
		hash = _setDefault(hash, '');
		position = _setDefault(position, 1);
	
		var newHash = Array(),
			oldHash = _instance.get();
	
		//rebuild hash
		var aoh = oldHash.split(_separator);
		
		for (var i=0; i < aoh.length; i++){
			if((position-1) == i){
				newHash.push(hash);
			}else{
				newHash.push(aoh[i]);
			}
		}
		
		window.location.hash = newHash.join(_separator);

	}
	
	_instance.remove = function(){
	
		window.location.hash = '';
	
	}
	
	return _construct();
}