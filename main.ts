//Question 2
// let personName: string="ERIC";
// console.log(`hello ${personName}, would you like to learn some Python today?`);

//Question 3
// lower case 
// var personName = "Mifrah";
// console.log("lowercase:", personName.toLowerCase());
// // upper case
// console.log("uppercase:", personName.toUpperCase());
// // Title case
// console.log("titlecase:", personName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));

//Question 4
// let quote: string= "A person who never made a mistake never tried anything new";
// let author: string= "Albert Einstein"
// console.log(`${author}once said, "${quote}`);

//Question 5
// let quote: string= "A person who never made a mistake never tried anything new";
// let famous_person="Albert Einstein";
// let message=`${famous_person} once said, ${quote}`;
// console.log(message);

//Question 6
// let personName: string =`\n\t BABAR AZAM\t\n`;
// console.log(personName);
// let stripped: string = personName.trim();
// console.log(stripped);

//Question 7,8
// console.log(5 +3);
// console.log(11 -3);
// console.log(4 *2);
// console.log(16 / 2);

//Question 9
// let favouriteNumber: number = 4;
// console.log(`My favourite number is ${favouriteNumber}`);

//Question 10
//my name is MIFRAH
//Dated: 29/02/2024
//this program will run simple code just like hello world
// console.log(`hello world simple program`);

//Question 11
// let members: string[] =['vaneeza','ayesha','rabie','osama','bilal'];
// for(let i=0; i<members.length; i++){
//    console.log(members[i]);
// }

//Question 12
// let friendsName = ["hamza", "Usman", "Ayesha", "Areeba"];
// friendsName.forEach(friendName => console.log(`Hello ${friendName}, How are you?`));

//Question 13
// let transportation : string [] = ['audi','bike','bus','rickshaw'];
// for(let i=0; i<transportation.length; i++){
//     console.log('I would like to own a ' + transportation[i]);
// }

//Question 14
// let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
// guestList.forEach(oneGuest => console.log(`Salam ${oneGuest}, would you like to dinner with me?`));

//Question 15
// let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];
// let dontCome = guestList[0];
// console.log(dontCome, "Nhi askta");
// guestList.splice(0, 1, "Amir");
// guestList.forEach(guest => console.log(`Salam ${guest}, would you like to Dinner with me?`));

//Question 16
// Creating a Guest List Array
// let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];

// // Making variable for those guest who cant come
// let dontCome = guestList[0];

// // Print the name of guest who cant come
// console.log(dontCome, "Nhi askte hein");

// // Add or Remove Values from Guest List Array
// guestList.splice(0, 1, "Amir");

// // Message Print for Bigger Table
// console.log("Good News ! We have Found a Bigger Table For Dinner.");

// // Adding a new value at starting index of Array
// guestList.unshift("Ali");

// // Adding a new value at ending index of array
// guestList.push("Zain");

// // Get a middle index of our guest list array
// let middleIndex: number = Math.floor(guestList.length / 2);

// // Adding a new guest to middle index of array
// guestList.splice(middleIndex, 0, "Osama");

// // Print Message of Updated List
// console.log("Updated List of our Guests");

// // Sending a invitation message to our guests one by one with their names
// guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));


//Question 17
// Creating a Guest List Array
// let guestList = ["Hamza", "Usman", "Ayesha", "Areeba"];

// // Making variable for those guest who cant come
// let dontCome = guestList[0];

// // Print the name of guest who cant come
// console.log(dontCome, "Nhi askte hein");

// // Add or Remove Values from Guest List Array
// guestList.splice(0, 1, "Amir");

// // Message Print for Bigger Table
// console.log("Good News ! We have Found a Bigger Table For Dinner.");

// // Adding a new value at starting index of Array
// guestList.unshift("Ali");

// // Adding a new value at ending index of array
// guestList.push("Zain");

// // Get a middle index of our guest list array
// let middleIndex: number = Math.floor(guestList.length / 2);

// // Adding a new guest to middle index of array
// guestList.splice(middleIndex, 0, "Osama");

// // Print Message of Updated List
// console.log("Updated List of our Guests");

// // Sending a invitation message to our guests one by one with their names
// guestList.forEach(oneguest => console.log(`Salam ${oneguest}, would you like to dinner with me`));

// // Inform that only two guests can be invited for dinner
// console.log("Unfortunately, the new dinner table wont arrive on time, so I can only invite two Guests to dinner with me");

// //Using while-loop to remove guests from the array until only two names remain
// while(guestList.length > 2){
//     let removedGuest = guestList.pop();
//     console.log(`Sorry, ${removedGuest} I cant invite you to dinner`);
// }

// // Printing a invitations to the last two guest on the list
// console.log("Invitation to the last 2 Guests");
// guestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, you are still invited to dinner`));

// // Removing last two Guest from the list
// guestList.pop();
// guestList.pop();

// console.log("Empty List:", guestList);


//Question 18
// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.

// let places : string [] = ['cape town','delhi','faisalabad','bankok','ahmedabad']
// // console.log('original :' + places);
// //• Print your array in alphabetical order without modifying the actual list.
// // console.log('copy ' + [...places].sort());

// // • Show that your array is still in its original order by printing it.
// // console.log('original :' + places);

// // • Print your array in reverse alphabetical order without changing the order of the original list.
// console.log('copy ' + [...places].sort().reverse());

// // • Show that your array is still in its original order by printing it again.
// console.log('copy ' + [...places].sort().reverse());

// // • Reverse the order of your list. Print the array to show that its order has changed.
// console.log('original :' + places.sort());

// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// console.log('original :' + places.sort().reverse());


//Question 19
// import{ guest_list } from '../14. GUEST LIST/app'
// console.log(`n\ PRINTING NUMBER OF GUEST INVITED`)
// console.log(`we had finally invited ${guest_list.length} from exercise 14`)

//Question 20
// let languages : string [] = ['english','urdu','hindi','french','arabic']
// console.log("list of languages:")
// for(let top of languages){
//     console.log(top)
// }


//Question 21
// interface item {
//     name:string
//     price:number
// }
// // create two objects
// const book: item ={
//     name: 'ESSENTIAL TYPESCRIPT'
//     price:450
// }
// const apple: item ={
//     name:'apple'
//     price:200
// }
// console.log(`book namee: ${book.name}, price: $${book.price}`)
// console.log(`apple namee: ${apple.name}, price: $${apple.price}`)


//Question 22
// let array: (string | number) [] = ['babar','taha',3,5,8,"sana"]
// console.log(array[5])
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[4]);


//Question 23
// let car: string = 'subaru';

// // Test 1: Equality comparison (True)
// console.log("Is car == 'subaru'? I predict True.");
// console.log(car == 'subaru'); // True

// // Test 2: Strict equality comparison (True)
// console.log("Is car === 'subaru'? I predict True.");
// console.log(car === 'subaru'); // True

// // Test 3: Inequality comparison (False)
// console.log("Is car != 'subaru'? I predict False.");
// console.log(car != 'subaru'); // False

// // Test 4: Strict inequality comparison (False)
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru'); // False

// // Test 5: Less than comparison (False)
// console.log("Is car < 'subaru'? I predict False.");
// console.log(car < 'subaru'); // False (lexicographic comparison)

// // Test 6: Greater than comparison (False)
// console.log("Is car > 'subaru'? I predict False.");
// console.log(car > 'subaru'); // False (lexicographic comparison)

// // Test 7: Less than or equal comparison (True)
// console.log("Is car <= 'subaru'? I predict True.");
// console.log(car <= 'subaru'); // True

// // True 8: Greater than or equal comparison (True)
// console.log("Is car >= 'subaru'? I predict True.");
// console.log(car >= ' subaru'); // True

// // True 9: Checking truthiness (True)
// console.log("Is car? I predict True.");
// console.log(car); // True (non-empty string is truthy)


//Question 24
// let car: string = 'subaru';
// let age: number = 25;
// let numbers: number[] = [1, 2, 3, 4];

// // **String Tests**

// // Test 1: Equality (True)
// console.log("Is car == 'Subaru'? I predict True.");
// console.log(car == 'Subaru'); // True (case-insensitive)

// // Test 2: Strict equality (False)
// console.log("Is car === 'Subaru'? I predict False.");
// console.log(car === 'Subaru'); // False (case-sensitive)

// // Test 3: Inequality (True)
// console.log("Is car != 'Toyota'? I predict True.");
// console.log(car !== 'Toyota'); // True

// // Test 4: Inequality (False)
// console.log("Is car !== 'subaru'? I predict False.");
// console.log(car !== 'subaru'); // False (case-sensitive)

// // **Lowercase Function Tests** 

// // Test 5: Lowercase conversion (True)
// console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
// console.log(car.toLowerCase() == 'subaru'); // True (converted to lowercase)

// // Test 6: Lowercase conversion (False)
// console.log("Is car === car.toLowerCase()? I predict False.");
// console.log(car === car.toLowerCase()); // False (original value remains uppercase)

// // **Numerical Tests**

// // Test 7: Equality (True)
// console.log("Is age == 25? I predict True.");
// console.log(age == 25); // True

// // Test 8: Inequality (False)
// console.log("Is age != 30? I predict True.");
// console.log(age != 30); // True

// // Test 9: Greater than (False)
// console.log("Is age > 30? I predict False.");
// console.log(age > 30); // False

// // Test 10: Less than or equal (True)
// console.log("Is age <= 25? I predict True.");
// console.log(age <= 25); // True

// // **Logical Operators**

// // Test 11: AND (True)
// console.log("Is age > 20 && age < 30? I predict True.");
// console.log(age > 20 && age < 30); // True (both conditions met)

// // Test 12: OR (False)
// console.log("Is age > 30 || age < 18? I predict False.");
// console.log(age > 30 || age < 18); // False (neither condition met)

// // **Array Tests**

// // Test 13: In array (True)
// console.log("Is 3 in numbers? I predict True.");
// console.log(3 in numbers); // True (checks for index existence)

// // Test 14: Not in array (False)
// console.log("Is 5 not in numbers? I predict True.");
// console.log(5 in numbers); // True (negation of "in" operator)


//Question 25
// Create a variable called alien_color
// let alien_color: string ="green";

// // • Write an if statement to test whether the alien’s color is green. If it is,
// //   print a message that the player just earned 5 points.
// if(alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }

// // Write one version of this program that passes the if test and another that fails.
// //  (The version that fails will have no output.)

// alien_color = "red";
// if(alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }


//Question 26
// Choose a color for an alien as you
// did in Exercise 25, and write an if-else chain.
// let alien_color: string ="green";

// // If the alien’s color is green, print a statement that
// // the player just earned 5 points for shooting the alien.
// if(alien_color == "green"){
//     console.log("the player just earned 5 points for shooting the alien.");
// } 
// else{
//     console.log("the player just earned 10 points.")
// }
// alien_color = "red";
// if(alien_color == "green"){
//     console.log("the player just earned 5 points for shooting the alien.");
// }


//Question 27
// let alien_color: string ="green";
// // • If the alien is green, print a message that the player earned 5 points.

// if(alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }

// // • If the alien is yellow, print a message that the player earned 10 points.
// else if(alien_color == "yellow"){
//     console.log("the player just earned 10 points.");
// }

// // • If the alien is red, print a message that the player earned 15 points
// else if(alien_color == "red"){
//     console.log("the player just earned 15 points.");
// }
// else{
//     console.log("Please select right color")
// }
// // • Write three versions of this program, making sure each message is printed for the appropriate color alien.

// // version 2
// alien_color ="red";
// if(alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }
// else if(alien_color == "yellow"){
//     console.log("the player just earned 10 points.");
// }
// else if(alien_color == "red"){
//     console.log("the player just earned 15 points.");
// }
// else{
//     console.log("Please select right color")
// }

// // version 3
// alien_color ="yellow";
// if(alien_color == "green"){
//     console.log("the player just earned 5 points.");
// }
// else if(alien_color == "yellow"){
//     console.log("the player just earned 10 points.");
// }
// else if(alien_color == "red"){
//     console.log("the player just earned 15 points.");
// }
// else{
//     console.log("Please select right color")
// }


//Question 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. 
//Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.

// let age: number = 13;
// if(age<2){
//     console.log("the person is a baby.")
// }

// // • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// else if(age>=2 && age<4){
//     console.log("person is a toddler.")
// }

// // • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// else if(age>=4 && age<13){
//     console.log("person is a kid.")
// }

// // • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// else if(age>=13 && age<20){
//     console.log("person is a teenager.")
// }

// // • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// else if(age>=20 && age<65){
//     console.log("person is a adult.")
// }

// // • If the person is age 65 or older, print a message that the person is an elder.
// else{
//     console.log("Person is an elder.")
// }


//Question 29
// Favorite Fruit: Make a array of your favorite fruits,
//  and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits : string [] = ['apple','orange','grapes']

// if(favorite_fruits.includes('apple')){
//     console.log('I really like apple!')
// }

// if(favorite_fruits.includes('orange')){
//     console.log('I really like orange!')
// }

// if(favorite_fruits.includes('mango')){
//     console.log('I really like mango!')
// }

// if(favorite_fruits.includes('grapes')){
//     console.log('I really like grapes!')
// }

// if(favorite_fruits.includes('bananas')){
//     console.log('I really like bananas!')
// }


//Question 30
// Hello Admin: Make a array of five or more usernames, 
// including the name 'admin'. Imagine you are writing code that will print a greeting to each user 
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting,
//  such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let users : string [] = ['sana','babar','saba','taha','admin']

// for(let user of users){
//     if (user === "admin"){
//         console.log("hello admin, would you like to see a status report?")
//     }
//     else{
//         console.log(`Hello ${user}, 'thank you for logging in again.'`)
//     }
// }


//Question 31
// Hello Admin: Make a array of five or more usernames, 
// including the name 'admin'. Imagine you are writing code that will print a greeting to each user 
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting,
//  such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let users : string [] = ['sana','babar','saba','taha','admin']

// for(let user of users){
//     if (user === "admin"){
//         console.log("hello admin, would you like to see a status report?")
//     }
//     else{
//         console.log(`Hello ${user}, 'thank you for logging in again.'`)
//     }
// }


//Question 32
// Array of Current Users
// let current_users =["Usman","Ali","Areeba","Zain","Osama"]

// // Array of New Users
// let new_users = ["Hamza","Ayesha","Ali","Mahad","Areeba"]

// // Loop through new_users to check for usernames avaibility
// new_users.forEach(new_one_user => {

//     // Making a Condition for username already exist and save in our_condition variable 
//     let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
//     // Print Different messages using If-Else statements
//     if(our_condition){
//         console.log(`Sorry ${new_one_user} is already taken!`)
//     }else{
//         console.log(`This Username ${new_one_user} is available`)
//     }
// })


//Question 33
// Creating a Array
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Using For-loop
// for(let oneNumber of numbers){
//     let ordinalEnding: string;

//     if(oneNumber === 1){
//         ordinalEnding = "st"
//     }
//     else if(oneNumber === 2){
//         ordinalEnding = "nd"       
//     }
//     else if(oneNumber === 3){
//         ordinalEnding = "rd"
//     }
//     else{
//         ordinalEnding = "th"
//     }

//     console.log(`${oneNumber}${ordinalEnding}`);
    
// }


//Question 34
// Creating a Array
// let pizza = ["Chicken Tika", "Malai Cheese", "Fajita"]

// // Using For-Loop
// for (let onePizza of pizza){
//     console.log(`I like ${onePizza} pizza`);
// }

// // Print a Message outside of the for-loop
// console.log("Pizza is Love")
// console.log("I eat Pizza")


//Question 35
// Creating a Array
// let petAnimals = ["Cat", "Dog", "Rabbit"]

// // Using For-Loop
// for (let onePet of petAnimals){
//     console.log(`A ${onePet} would make a great pet.`)
//     console.log("Any of these animals would make a great pet!\n")
// }
// Print a Messsage out side of Forloop


//Question 36
// function make_shirt (size: string, printMessage: string){
//     console.log(`You Selected ${size} size shirt with ${printMessage} prints on shirt`)
// }

// make_shirt("Large", "CodewithHamza")
// make_shirt("Small", "Hamza")


//Question 37
// Making a Function
// function make_shirt (size: string = "Large", printMessage: string = "I Love TypeScript"){
//     console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`)
// }

// // Calling a function with by default values
// make_shirt();

// // Calling a function now with Medium size and default message
// make_shirt("Medium")

// // Calling a function now with Small size and also Different Print Message
// make_shirt("Small", "I Love JavaScript") 


//Question 38
// Describe a Function
// function describe_city (city: string, country: string = "Pakistan"){
//     console.log(`${city} is in ${country}`);
// }

// // Calling the function
// describe_city("Karachi");

// describe_city("Lahore");

// describe_city("Berlin", "Germany");


//Question 39
// Creating a function with parameters which return a values in string
// function city_country(city: string, country: string) : string{
//     return `${city} , ${country}`;
// }

// // Calling a function and print the returned value
// console.log(city_country("Karachi", "Pakistan"));
// console.log(city_country("Tokyo", "Japan"));
// console.log(city_country("Barlin", "Germany"));


//Question 40
// Define the make_album function
// function make_album(artist_name: string, album_title: string, tracks?: number){
//     let album: {artist: string, title: string, tracks?: number} = {
//         artist: artist_name,
//         title: album_title,
//     };

//     if (tracks !== undefined){
//         album.tracks = tracks;
//     }

//     return album;

// }

// // Calling three functions and creating 3 variables with different values

// let album1 = make_album("Hamza", "Album title 1");

// let album2 = make_album("Usman", "Album title 2");

// // Calling a make_album function with third parameter
// let album3 = make_album("Ali", "Album title 3", 10);


// // Printing the variables

// console.log(album1);
// console.log(album2);
// console.log(album3);


//Question 41
// Define a function to print each magician name from an array
// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }

// // Define an array containing magicians name
// let magician_names = ["Harry Potter", "Hamza", "Usman"]

// // Call the function to print eacg magician name
// show_magicians(magician_names);


//Question 42
// Define the function to show magicians names
// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }

// // Function to make magicians great through.map( it will modify array)
// function make_great(magicians: string[]){
//    return  magicians.map(name => `The Great ${name}`);
// }

// // Define an array of magician names
// let magician_names = ["Harry Potter", "Hamza", "Usman"];

// // Call make_great functions to modify magicians names
// let great_magicians = make_great(magician_names);

// // Call show_magicians that show modified list of magicians
// show_magicians(great_magicians);



//Question 43
// Define the function to show magicians names
// function show_magicians(magicians: string[]){
//     magicians.forEach(name => console.log(name));
// }

// // Function to make magicians great through.map( it will modify array)
// function make_great(magicians: string[]){
//    return  magicians.map(name => `The Great ${name}`);
// }

// // Define an array of magician names
// let magician_names = ["Harry Potter", "Hamza", "Usman"];

// // Making a copy of original Array through .Slice() function
// let copy_magician_names = magician_names.slice()

// // Modify the copied Array to include "The Great" with their names
// let copy_great_magicians = make_great(copy_magician_names);

// // Show both arrays Original and Copied

// // Original
// console.log("Original Array\n")
// show_magicians(magician_names);

// // Copied
// console.log("\nCopied Array\n")
// show_magicians(copy_great_magicians);


//Question 44
// Define a function with a rest parameter that accept items arguments representing our sandwich
// function makeSandwich(...items: string[]){
//     console.log("Making na sandwich with the following items: \n");

//     items.forEach(singleItem => console.log(singleItem));

//     console.log("\nNow Enjoy Sandwich");
// }

// // Call the function three times with 3 different number of arguments
// makeSandwich("Chicken", "Cheese" , "Mayo", "Egg");

// makeSandwich("Bread", "Butter");

// makeSandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");


//Question 45
// Define a function to create a car object with optional options...
// function create_car(manufacturer, model, ...options){
//     // Initialize a car object with manufacturer and model
//     let car = {
//         manufacturer: manufacturer,
//         model: model,
//     };

//     // Add additional options to the car object
//     options.forEach(option => {
//         let [key, value] = option.split(":");
//         car[key.trim()] = value.trim();
//     });

//     return car;
// }

// // Call the function to create a car object
// let my_car = create_car("Toyota", "Corrolla", "color: Black", "Sunroof: True", "Year: 2024");

// // Print the variable to ensure all the information is stored correctly in the car object
// console.log(my_car);