library Student;

import "Person.dart";

class Student extends Person {
  int id;
  int credits;

  Student(String name, int age, this.id, this.credits) : super(name, age);

  setId(int id) {
    this.id = id;
  }

  getId() {
    return id;
  }

  setCredits(int credits) {
    this.credits = credits;
  }

  getCredits() {
    return credits;
  }

  @override
  String toString() {
    return "${super.toString()}, student id: ${id}, credits: ${credits}";
  }
}
