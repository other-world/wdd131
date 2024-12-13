let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];
console.log(names);

let namesB = names.filter((name) => name.startsWith('B'));
console.log(namesB);

let namesLength = names.map((name) => name.length);
console.log(namesLength);


average = names.reduce((total, name) => total + name.length, 0) / names.length;
console.log(average);