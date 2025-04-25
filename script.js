function firstWord(s) {
  // your code here
	 if (!str) return '';
    
    // Trim leading spaces
    const trimmed = str.trimStart();
    if (trimmed === '') return '';
    
    const spaceIndex = trimmed.indexOf(' ');
    
     return spaceIndex === -1 ? trimmed : trimmed.slice(0, spaceIndex);
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
