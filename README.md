# jQuery-Array-of-Names

My first goal is to convert this list of names to an array so js doesn't require code for every name in the list.

Solved:
	for (var i = 0; i < 5; i++){
		$("#" + i.toString()).dblclick(function(){
			$("#" + i.toString()).hide();
		});
	}


<a href="https://jsfiddle.net/petrovitch/hbLwgao4/4/" target="_blank">JSFiddle</a>

