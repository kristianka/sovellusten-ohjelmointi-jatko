/**
 * You can edit, run, and share this code.
 * play.kotlinlang.org
 */
class Person(var name: String, var age: Int) {
    fun printInfo() {
        println("Name: $name, Age: $age")
    }
}
fun main() {
    println("Hello, world!")
    
    // print name
    var name = "Kristian"
    println("Hello, $name!")
    
    // print different data types
    // really similiar to TypeScript! interesting
    var val1: Int = 1;
    var val2: Double = 1.23;
    var val3: Boolean = true;
    var val4: String = "Stringi";
    println("$val1, $val2, $val3, $val4");
    
    // number sum
    val num1 = 3;
    val num2 = 5;
    var ans = num1 + num2;
    print("$num1 + $num2 = $ans \n");
    
    // even or odd
    if (num1 % 2  == 0  ) {
        println("$num1 is even!");
    } else {
        println("$num2 is odd!");
    }
    
    // Person class
    var kristian = Person("Kristian", 21);
    kristian.printInfo();
    
    // array of five nums
    var numArray = arrayOf(1,2,3,4,5);
    for(i in numArray) {
        println("$i")
    }
    
    // now five Persons
    val people = arrayOf(
    	Person("John", 25),
    	Person("Jane", 30),
    	Person("Bob", 22)
    );
    for (p in people) {
        p.printInfo()
    }
    
    // print *list* of strings in UPPERCASE
    val stringList = listOf("String 1", "String 2", "String 3");
    for (i in stringList) {
        print(i.uppercase())
    }
    
    // print *list* of Person
    val people2 = listOf(
    	Person("John", 25),
    	Person("Jane", 30),
    	Person("Bob", 22)
    );
    for (p in people2) {
        p.printInfo()
    }
}