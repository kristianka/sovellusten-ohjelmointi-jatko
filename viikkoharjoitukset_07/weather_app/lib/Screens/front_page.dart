import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class Frontpage extends StatefulWidget {
  const Frontpage({Key? key}) : super(key: key);

  @override
  State<Frontpage> createState() => _FrontpageState();
}

const String apiKey = "6c433438776b5be4ac86001dc88de74d";

class _FrontpageState extends State<Frontpage> {
  String userInput = "";
  String city = "";
  String weather = "";
  int temp = 0;
  int feelsLike = 0;
  int windSpeed = 0;
  String icon = "";
  int humidity = 0;
  int maxTemp = 0;
  int minTemp = 0;

  void fetchWeatherData() async {
    Uri uri = Uri.parse(
        "https://api.openweathermap.org/data/2.5/weather?q=$userInput&units=metric&appid=$apiKey");

    var res = await http.get(uri);
    if (res.statusCode == 200) {
      var body = jsonDecode(res.body);
      setState(() {
        city = body["name"];
        weather = body["weather"][0]["main"];
        temp = body["main"]["temp"].round();
        feelsLike = body["main"]["feels_like"].round();
        windSpeed = body["wind"]["speed"].round();
        icon = body["weather"][0]["icon"];
        humidity = body["main"]["humidity"];
        maxTemp = body["main"]["temp_max"].round();
        minTemp = body["main"]["temp_min"].round();
      });
    } else {
      void sendToast() async {
        SnackBar snackBar = const SnackBar(
            content: Text(
                "Error getting data. Invalid city name or missing API key?"));
        ScaffoldMessenger.of(context).showSnackBar(snackBar);
      }

      sendToast();
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
          appBar: AppBar(
            title: const Text("Current weather"),
          ),
          body: Column(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text(city,
                  style: const TextStyle(
                    fontSize: 32,
                  )),
              // show temp next to weather icon
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Column(
                    children: [
                      Text(
                        "$temp °C",
                        style: const TextStyle(fontSize: 40),
                      ),
                      Text("Feels like $feelsLike °C"),
                    ],
                  ),
                  icon.isNotEmpty
                      ? Column(
                          children: [
                            Image(
                                image: NetworkImage(
                                    "http://openweathermap.org/img/wn/$icon.png")),
                            Text(weather),
                          ],
                        )
                      : const Text(""),
                ],
              ),
              // other weather info
              Container(
                margin: const EdgeInsets.all(32.0),
                child: Center(
                  child: Column(
                    children: [
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Icon(Icons.water),
                          Text("Humidity: $humidity %"),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Icon(Icons.wind_power),
                          Text("Wind speed: $windSpeed m/s"),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Icon(Icons.arrow_upward),
                          Text("Highest: $maxTemp °C"),
                        ],
                      ),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          const Icon(Icons.arrow_downward),
                          Text("Lowest: $minTemp °C"),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      onChanged: (value) {
                        userInput = value;
                      },
                      decoration: const InputDecoration(
                        border: OutlineInputBorder(),
                        hintText: "Enter a city",
                      ),
                    ),
                  ),
                  ElevatedButton(
                      onPressed: () {
                        fetchWeatherData();
                      },
                      child: const Text("Fetch weather data"))
                ],
              )
            ],
          )),
    );
  }
}
