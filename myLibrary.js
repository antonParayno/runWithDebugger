(function(){
	var libraryStorage = {};

	function librarySystem(libraryName, array, callback){
		if(arguments.length > 1){
			var libraryArray = array.map(function(libName){
				return libraryStorage[libName];
			}).filter(function(element,i){
				return i in array;
			});
			libraryStorage[libraryName] = callback.apply(this, libraryArray);
		} else {
			return libraryStorage[libraryName];
		};	
	};
	
	window.librarySystem = librarySystem;
})();