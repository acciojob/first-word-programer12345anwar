function firstWord(s) {
  // your code here
	//remove extra white spaces
	s=s.trim();
	//find first white space index
	int index=s.indexOf(' ');
	//if there is no white spaces then either it would be null or one word in this case return s
	if(index==-1){
		return s;
	}
	return s.substring(0,index);//0 to index-1
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
