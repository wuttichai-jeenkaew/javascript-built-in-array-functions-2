function isPalindrome(string) {
  // Start coding here
    // 1. แปลงเป็นตัวพิมพ์เล็ก
    const lowerCase = string.toLowerCase();
  
    // 2. แปลงเป็น array เพื่อกลับด้าน
    const reversed = lowerCase.split('').reverse().join('');
    
    // 3. เปรียบเทียบและคืนค่า
    return lowerCase === reversed;
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false