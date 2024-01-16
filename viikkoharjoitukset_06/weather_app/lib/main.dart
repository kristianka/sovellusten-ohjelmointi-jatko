import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "Weather app",
      theme: ThemeData(
        primarySwatch: Colors.cyan,
        hintColor: Colors.grey,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Weather app"),
          backgroundColor: Colors.cyan,
        ),
        body: WeatherUI(),
      ),
    );
  }
}

// ignore: must_be_immutable
class WeatherUI extends StatelessWidget {
  WeatherUI({super.key});
  String city = "";
  String temperature = "";
  String icon = "";
  String wind = "";

  @override
  Widget build(BuildContext context) {
    return Column(children: <Widget>[
      TextField(
        decoration: const InputDecoration(
          labelText: "City",
          prefixIcon: Icon(Icons.search),
        ),
        onChanged: (value) => city = value,
      ),
      ElevatedButton(
        style: ElevatedButton.styleFrom(),
        onPressed: () {},
        child: const Text("Get weather"),
      ),
      const Text("Tampere weather"),
      const Text(
        "0 °C",
        style: TextStyle(fontSize: 50),
      ),
      const Image(
        width: 100,
        image: NetworkImage(
            'https://flutter.github.io/assets-for-api-docs/assets/widgets/owl.jpg'),
      ),
      const Text("Wind: 0 m/s"),
    ]);
  }
}
