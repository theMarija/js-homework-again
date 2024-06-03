// Od site metodi do sega sto gi izucivme (samo string metodi pominavme) upotrebete te gi po 3 pati vo svoj primer. 
// Dodadete i po eden primer za tie sto imaat opcionalen parametar.

// STRING METHODS

let stringche = "“And pray what might you want with him?” retorted my sister, quick to resent his being wanted at all."; 

console.log(stringche.charAt(25));
console.log(stringche.charCodeAt(25));
console.log(stringche.concat(" Jesus, please save me!"));
console.log(stringche.includes("his"));
console.log(stringche.includes("his", 10));
console.log(stringche.endsWith("all."));
console.log(stringche.endsWith("all.", 15));
console.log(stringche.indexOf("A"));
console.log(stringche.indexOf("q", 10));
console.log(stringche.lastIndexOf("m"));
console.log(stringche.replace("And", "We"));
console.log(stringche.replaceAll("him", "they"));
console.log(stringche.slice(7));
console.log(stringche.slice(7, 15));
console.log(stringche.split("my"));
console.log(stringche.startsWith("And")); // False zosto pocnuva so "And";
console.log(stringche.startsWith("And", 6 ));
console.log(stringche.trim());
console.log(stringche.trimEnd());
console.log(stringche.trimStart());
console.log(stringche.repeat(5));

let malabukva = stringche.toLowerCase();
console.log(malabukva);

let golemabukva = stringche.toUpperCase();
console.log(golemabukva);

// NUMBER METHODS 

let number = 9274.6582;

console.log(number.toString());
console.log(number.toFixed());
