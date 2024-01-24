import 'package:flutter/material.dart';
import 'package:location/location.dart';
import 'package:permission_handler/permission_handler.dart';
import "package:sensors_plus/sensors_plus.dart";
import 'package:maps_launcher/maps_launcher.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  double xSensorValue = 0;
  double ySensorValue = 0;
  double zSensorValue = 0;

  double? latitude = 0;
  double? longitude = 0;

  void startLocation() async {
    if (await Permission.location.request().isGranted) {
      Location location = Location();
      location.onLocationChanged.listen((event) {
        setState(() {
          latitude = event.latitude;
          longitude = event.longitude;
        });
      });
    }
  }

  void startSensors() {
    accelerometerEventStream().listen((event) {
      setState(() {
        xSensorValue = event.x;
        ySensorValue = event.y;
        zSensorValue = event.z;
      });
    });
  }

  void openMaps() async {
    MapsLauncher.launchCoordinates(latitude!, longitude!);
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: Scaffold(
      appBar: AppBar(
        title: const Text("Sensor and Location"),
      ),
      body: Center(
          child: Column(
        children: [
          Text("X: ${xSensorValue.toStringAsFixed(3)}"),
          Text("Y: ${ySensorValue.toStringAsFixed(3)}"),
          Text("Z: ${zSensorValue.toStringAsFixed(3)}"),
          // Text("Latitude: $latitude"),
          // Text("Longitude: $longitude"),
          ElevatedButton(
              onPressed: startSensors, child: const Text("Start Sensors")),
          // ElevatedButton(
          //     onPressed: startLocation, child: const Text("Start Location")),
          // ElevatedButton(
          //     onPressed: openMaps, child: const Text("Open in Maps")),
        ],
      )),
    ));
  }
}
