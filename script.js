function firstWord(s) {
  // your code here
	// Trim leading spaces
  s = s.trim();

  // Find the index of the first space
  const index = s.indexOf(' ');

  // If no space found, return the whole string
  if (index === -1) {
    return s;
  }

  // Otherwise, return the substring up to the first space
  return s.substring(0, index);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
