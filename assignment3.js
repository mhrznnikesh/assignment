// object manipulation
// a program that creates an object representing a person with properties like name, age, and gender
// Define a function to create a person object
//function createPerson(name, age, gender) {
  //  var person = {}; 
   // person.name = name;
   // person.age = age;
   // person.gender = gender;
   // return person;
  //}
  //var person1 = createPerson("Nikesh", 18, "male");
  //var person2 = createPerson("manima", 20, "female");
  //console.log("Person 1:", person1);
  //console.log("Person 2:", person2);
  
//program to merge properties from two objects into a single object
//function mergeObjects(obj1, obj2) {
  //  var mergedObject = {};
    //for (var key in obj1) {
      //mergedObject[key] = obj1[key];
    //}
    //for (var key in obj2) {
      //mergedObject[key] = obj2[key];
    //}
    //return mergedObject; 
  //}
  //var object1 = { name: 'Nikesh', address: 'Soalteemode' };
  //var object2 = { phone: 9741723115 };
  //var mergedObject = mergeObjects(object1, object2);
  //console.log("Merged object:", mergedObject);
  
  // program to extract the names of students from an array of objects
  //function getStudentNames(students) {
    //var names = [];
   // for (var i = 0; i < students.length; i++) {
     // var student = students[i];
     // if ('name' in student) {
      //  names.push(student.name);
     // }
   // }
   // return names; 
 // }
 // var students = [{ name: 'Sudarshan' }, { name: 'Nikesh' }];
 // var studentNames = getStudentNames(students);
 // console.log("Student names:", studentNames); 
  
//program to calculate the average grade of students from an array of objects
//function calculateAverageGrade(students) {
   // var totalMarks = 0; 
   // for (var i = 0; i < students.length; i++) {
    //  var student = students[i];
   //   totalMarks += student.marks;
  //  }
//    var averageGrade = totalMarks / students.length;
  //  return averageGrade;
 // }
 // var students = [
 //   { name: 'Sudarshan', marks: 40 },
 //   { name: 'Suraj', marks: 100 },
   // { name: 'Simran', marks: 100 }
 // ];
 // var average = calculateAverageGrade(students);
 // console.log("Average grade is:", average); 

// program to sort an array of book objects alphabetically by title
//function sortBooksByTitle(books) {
  //  books.sort(function(book1, book2) {
   //   var title1 = book1.title.toLowerCase();
    //  var title2 = book2.title.toLowerCase();
    //  if (title1 < title2) {
    //    return -1; 
    //  } else if (title1 > title2) {
    //    return 1; 
    //  } else {
    //    return 0; 
    //  }
   // });
   // return books; 
 // }
 // var books = [
  //  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
   // { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
   // { title: '1984', author: 'George Orwell' },
   // { title: 'Brave New World', author: 'Aldous Huxley' }
 // ];
 // var sortedBooks = sortBooksByTitle(books);
 // console.log("Sorted books by title:", sortedBooks);
  













