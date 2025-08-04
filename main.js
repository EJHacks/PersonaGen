let title = document.getElementById("Name");
let DOB = document.getElementById("DOB");
let Email = document.getElementById("Email");
let img = document.getElementById("image");

// Array Example 
let var1 = [1,2,3,4,5]
console.log(var1[0])




let randomvalue = Math.floor(Math.random() * data.results.length)
let firstPerson = data.results[randomvalue]

title.innerHTML = firstPerson.name.first + " " + firstPerson.name.last;
DOB.innerHTML = firstPerson.dob.date;
Email.innerHTML = firstPerson.email;
img.src = firstPerson.picture.medium;