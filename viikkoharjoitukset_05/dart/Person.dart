library Person;

class Person {
  String name;
  int age;
  double? height;
  double? weight;

  Person(this.name, this.age, [this.height, this.weight]);
  Person.verySmallPerson(this.name, this.age, [this.height = 50, this.weight]);

  setName(String name) {
    this.name = name;
  }

  getName() {
    return name;
  }

  setAge(int age) {
    this.age = age;
  }

  getAge() {
    return age;
  }

  setHeight(double height) {
    this.height = height;
  }

  getHeight() {
    return height;
  }

  setWeight(double weight) {
    this.weight = weight;
  }

  getWeight() {
    return weight;
  }

  @override
  String toString() {
    // height and weight are optional
    String str = "${name}, ${age} years old";
    if (height != null) str += ", ${height} cm";
    if (weight != null) str += ", ${weight} kg";
    return str;
  }
}
