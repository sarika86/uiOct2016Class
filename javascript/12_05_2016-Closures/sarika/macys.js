(function(){
   function Total(firstName,lastName){
        this.getFullName = function(){
            return firstName+ " "+lastName;
        }

        }
        var joe = new Total('sarika','bura');


    console.log(joe.getFullName());
// another program
//CREATE an object
   var jane = {
        firstName: "Jane",
        lastName: "Smith",
        age: 24,
        getFullName: function() {
            return this.firstName + " " + this.lastName;
        }

   };
//CREATE a class

 // Use a constructor function for objects
   function Person(firstName, lastName, age) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.age = age;
   }
   // Methods should go into prototypes, not the constructor.
   // Saves memory.
   Person.prototype.getFullName = function() {
       return this.firstName + " " + this.lastName;
   };

   var joe = new Person("Joe", "Smith", 24);

   console.log(jane.getFullName());
   console.log(joe.getFullName());
})();