import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

// Widgetillä pakollinen build -metodi, joka palauttaa käyttöliittymän
class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "BMI Calculator",
      theme: ThemeData(
        primarySwatch: Colors.blue,
        hintColor: Colors.blueGrey,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text("BMI Calculator"),
          backgroundColor: Colors.green,
        ),
        body: const BmiUi(),
      ),
    );
  }
}

class BmiUi extends StatefulWidget {
  const BmiUi({super.key});

  @override
  State<BmiUi> createState() => _BmiUiState();
}

class _BmiUiState extends State<BmiUi> {
  String weight = "";
  String height = "";
  String bmiResult = "";

  void calculateBmi() {
    if (weight.isEmpty || height.isEmpty) {
      setState(() {
        bmiResult = "Please insert values";
      });
      return;
    }

    // check that weight and height are numbers
    if (double.tryParse(weight) == null || double.tryParse(height) == null) {
      setState(() {
        bmiResult = "Please insert numbers to values";
      });
      return;
    }

    double weightDouble = double.parse(weight);
    double heightDouble = double.parse(height) / 100;
    double bmi = weightDouble / (heightDouble * heightDouble);
    setState(() {
      bmiResult = "BMI: ${bmi.toStringAsFixed(2)}";
    });
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        TextField(
          decoration: const InputDecoration(
            labelText: "Weight (kg)",
          ),
          keyboardType: TextInputType.number,
          onChanged: (value) => weight = value,
        ),
        TextField(
          decoration: const InputDecoration(
            labelText: "Height (cm)",
          ),
          keyboardType: TextInputType.number,
          onChanged: (value) => height = value,
        ),
        ElevatedButton(
          style: ElevatedButton.styleFrom(
            minimumSize: const Size(200, 60),
            backgroundColor: Colors.green,
          ),
          onPressed: calculateBmi,
          child: const Text("Calculate BMI"),
        ),
        Text(bmiResult),
      ],
    );
  }
}
