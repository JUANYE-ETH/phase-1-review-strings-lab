// Write your code in this file!

const currentUser = 'Juan Velasco';
// Declaring current User using const.

const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;
console.log(welcomeMessage);
// Declaring welcome messgae using const and using interpolation to add variable current user to welcome message.

const excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);
// Using .toUpperCase operation to return the welcome message in all caps.

const shortGreeting = `Welcome, ${currentUser.slice(0,1)}!`;
console.log(shortGreeting);
// Using .slice operation to return the first letter of our currentUser string.