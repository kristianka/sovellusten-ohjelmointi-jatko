import "Person.dart";
import "Student.dart";

void main() {
  List<Person> people = [
    Person("Joe", 21),
    Person("Jane", 20, 160, 50),
    Person.verySmallPerson("Jack", 19),
    Student("Jill", 22, 123456, 100),
  ];

  for (Person person in people) {
    print(person.toString());
  }
}
