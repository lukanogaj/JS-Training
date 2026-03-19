// const getRectangle = (width, height) => width * height;

// console.log(getRectangle(5, 10));

// // export default getRectangle;

// // regular();
// // arrow();

// function regular() {
// 	console.log("Regular");
// }
// const arrow = () => console.log("Arrow");

// // Arrow regular this keyword
// const person = {
// 	name: "Lukasz",
// 	sayHelloRegular: function () {
// 		// console.log("Regular: ", this.name);
// 	},
// 	sayHelloArrow: () => console.log("Arrow: ", this.name),
// };

// person.sayHelloArrow();

// const name = "John";
// const age = 30;

// const greeting = `Hello , my name is ${name} and  I'm ${age} years old`;

// const formDate = (timestamp) => {
// 	const date = new Date(timestamp);
// 	console.log(date);
// 	return `${date.toLocaleDateString()} st ${date.toLocaleTimeString()}`;
// };

// const note = {
// 	title: "Discuss project",
// 	timestamp: Date.now(),
// };

// console.log(`Last Edited: ${formDate(note.timestamp)}`);

// const note = {
// 	title: "Meeting notes",
// 	content: "Discuss project roadmap",
// 	timestamp: Date.now(),
// 	isPinned: true,
// };

// const noteText = `
// Title: ${note.title}
// Status: ${note.isPinned ? "📌 Pinned Note" : "Regular Note"}
// Last Edited: ${new Date(note.timestamp).toLocaleString()}`;

// console.log(noteText);

// console.log(true && "Hello");

// const isLoggedIn = true;

// function showWelcome() {
// 	return isLoggedIn && "Welcome, User";
// }
// console.log(showWelcome());

// const notes = [
// 	{ title: "Meeting Notes", content: "Discuss project roadmap" },
// 	{ title: "Grocery List", content: "Buy milk,eggs,bread" },
// 	{ title: "Workout plan", content: "Push day: Bench, Shoulder press" },
// 	{ title: "Recipe Ideas", content: "Pasta, Salad, Tacos" },
// ];

// const [firstNote, secondNote, ...otherNotes] = notes;
// console.log(firstNote);
// console.log(secondNote);
// console.log(otherNotes);

// const note = {
// 	title: "Meeting notes",
// 	content: "Discuss project roadmap",
// 	timestamp: Date.now(),
// 	isPinned: true,
// };

// const { title: noteTitle, isPinned } = note;
// console.log(noteTitle);

// const user = {
// 	name: "Ben",
// 	address: { city: "Boston", state: "MA" },
// 	hobbies: ["Movies", "Sports", "Music"],
// };

// const {
// 	name,
// 	hobbies: [firstHobby, ...otherHobbies],
// } = user;
// console.log(otherHobbies);

// const notes = [
// 	{
// 		title: "Meeting Notes",
// 		content: "Discuss project roadmap",
// 		isPinned: true,
// 	},
// 	{ title: "Grocery List", content: "Buy milk,eggs,bread", isPinned: true },
// 	{
// 		title: "Workout plan",
// 		content: "Push day: Bench, Shoulder press",
// 		isPinned: false,
// 	},
// 	{ title: "Recipe Ideas", content: "Pasta, Salad, Tacos", isPinned: false },
// ];

// notes.forEach((note) => console.log(note.title));

// const pinnedNotes = notes
// 	.filter((note) => note.isPinned)
// 	.map((note) => note.title);

// console.log(pinnedNotes);

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((acc, number) => acc + number, 0);

// console.log(sum);

// const user = {
// 	name: "Lukasz",
// };

// console.log(user.address?.city);

// let value = 0;
// let result = value ?? "Default value";
// console.log(result);

// const user = {
// 	name: "Brad",
// };

// console.log(user.address?.city ?? "Unknown");

// const user = {
// 	name: "John Doe",
// 	age: 30,
// };

// const newUser = {
// 	...user,
// 	age: 31,
// };

// console.log(user);
// console.log(newUser);

// const myPromise = new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 		reject("Promise Rejected");
// 	}, 2000);
// });

// myPromise
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// 	.then((response) => response.json())
// 	.then((data) => console.log(data))
// 	.catch((error) => console.log(error));

// const fetchData = async () => {
// 	try {
// 		const response = await fetch(
// 			"https://jsonplaceholder.typicode.com/posts/1"
// 		);
// 		const data = await response.json();
// 		console.log(data);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

// fetchData();
