function ex19(){
	var sentence = prompt("give me a sentence");
	var longest = 0;
	var sentence_arr = sentence.split(" ");
	var frame = "";
	for(var i = 0; i<sentence_arr.length; i++){
		if(sentence_arr[i].length > longest){
			longest = sentence_arr[i].length;
		}
	}
	for(var i = 0; i<longest+4;i++){
		frame += "*";
	}
	frame += "\n";

	for(var i = 0; i<sentence_arr.length;i++){
		frame+= "*";
		for(var j = 0; j<(longest-sentence_arr[i].length)/2;j++){
			frame+=" ";
		}
		frame+= " "+sentence_arr[i]+" ";
		if(sentence_arr[i].length%2===0){
			for(var j = 0; j<(longest-sentence_arr[i].length)/2-1;j++){
				frame+=" ";
			}
		}else{
			for(var j = 0; j<((longest-sentence_arr[i].length)/2);j++){
				frame+=" ";
			}
		}

		frame+= "*\n";
	}
	for(var i = 0; i<longest+4;i++){
		frame += "*";
	}
    console.log(frame);
}

ex19();