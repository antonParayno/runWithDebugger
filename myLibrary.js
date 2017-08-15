(function(){
	var libraryStorage = {};

	function librarySystem(libraryName, dependencyArray, callback){
		if(dependencyArray){
			var libraryArray = dependencyArray.map(function(libName){
				return libraryStorage[libName];
			});
			libraryStorage[libraryName] = callback.apply(this, libraryArray);
		} else {
			return libraryStorage[libraryName];
		};	
	};
	
	window.librarySystem = librarySystem;
})();