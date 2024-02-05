/**
 * Generates a memorable password that includes part of the username,
 * followed by two digits, and a special character.
 * Spaces in the username are removed.
 *
 * @param {string} username - The username to base the password on.
 * @return The memorable password.
 * @customfunction
 */
function GENERATE_PASSWORD_FROM_USERNAME(username) {
  var specialChars = "@#%";
  var randomDigits = Math.floor(Math.random() * 90 + 10); // Random number between 10 and 99
  var randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
  
  // Use a portion of the username as the base for the password
  // Extracting up to the first 5 characters as an example
  // Remove spaces
  var namePart = username.substring(0, 5).replace(/\s/g, '').toLowerCase();
  
  // Ensure the password is at least 8 characters
  var additionalChar = '';
  if (namePart.length < 5) {
    additionalChar = specialChars[Math.floor(Math.random() * specialChars.length)];
  }
  
  // Generate a memorable password by combining the name part, random digits, special character,
  // and additional character if needed
  var password = namePart + randomDigits + randomSpecialChar + additionalChar;
  return password;
}