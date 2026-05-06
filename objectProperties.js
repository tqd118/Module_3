const person = {
	name: "Ivan",
	age: 18,
	job: "Developer"
};

console.log("Initial descriptors:");
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));
console.log(Object.getOwnPropertyDescriptor(person, "job"));

Object.defineProperty(person, "name", {
    writable: false,
    enumerable: false,
    configurable: false
});
Object.defineProperty(person, "age", {
	writable: false,
	enumerable: false,
	configurable: false
});
Object.defineProperty(person, "job", {
	writable: false,
	enumerable: false,
	configurable: false
});

console.log('Modified descriptors:');
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));
console.log(Object.getOwnPropertyDescriptor(person, "job"));

console.log('\nTrying to modify properties');
person.name = 'dawd';
person.age = 4123;
person.job = 'asdawda';
console.log('After modification attempt:', person.name, person.age, person.job);

console.log('\nTrying to enumerate properties');
for (const key of Object.keys(person)) {
	console.log('Enumerated key:', key);
}

console.log('\nTrying to delete properties');
console.log('Delete name:', delete person.name);
console.log('Delete age:', delete person.age);
console.log('Delete job:', delete person.job);

console.log('\nFinal object:', person);
