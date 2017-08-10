(function(){
	var libraryStorage = {};

	function librarySystem(libraryName, array, callback){
		if(arguments.length > 1){
			if(array.length > 0){
				var libraryArray = [];
				for(var i = 0; i < array.length; i++){
					if(i in array){
					var libName = libraryStorage[array[i]];
					libraryArray.push(libName);
					}
				};
				libraryStorage[libraryName] = callback.apply(this, libraryArray);
			} else{
				libraryStorage[libraryName] = callback()
			};
		} else {
			return libraryStorage[libraryName];
		};	
	};

	window.librarySystem = librarySystem;
})();