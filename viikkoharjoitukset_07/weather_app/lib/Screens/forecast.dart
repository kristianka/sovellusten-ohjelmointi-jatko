import 'package:flutter/material.dart';

class Forecast extends StatelessWidget {
  const Forecast({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      home: const ForecastList(),
    );
  }
}

class ForecastList extends StatelessWidget {
  const ForecastList({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Forecast")),
      body: ListView(
        children: const <Widget>[
          // SearchBar(),
          Text("17:00",
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          Card(
            child: ListTile(
              leading: Icon(Icons.sunny_snowing, size: 32),
              title: Text("-6°C", style: TextStyle(fontSize: 20)),
              subtitle:
                  Text("Cloudy. Feels like -10°C. Wind 10m/s. Humidity 80%."),
              isThreeLine: true,
            ),
          ),
          Text("18:00",
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          Card(
            child: ListTile(
              leading: Icon(Icons.sunny_snowing, size: 32),
              title: Text("-6°C", style: TextStyle(fontSize: 20)),
              subtitle:
                  Text("Cloudy. Feels like -10°C. Wind 10m/s. Humidity 80%."),
              isThreeLine: true,
            ),
          ),
          Text("19:00",
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
          Card(
            child: ListTile(
              leading: Icon(Icons.sunny_snowing, size: 32),
              title: Text("-6°C", style: TextStyle(fontSize: 20)),
              subtitle:
                  Text("Cloudy. Feels like -10°C. Wind 10m/s. Humidity 80%."),
              isThreeLine: true,
            ),
          ),
        ],
      ),
    );
  }
}
