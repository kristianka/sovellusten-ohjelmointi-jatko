package com.example.kotlin_weather

import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Add
import androidx.compose.material3.BottomAppBar
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FloatingActionButton
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.saveable.rememberSaveable
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.unit.dp
import androidx.navigation.NavHostController
import androidx.navigation.compose.rememberNavController
import coil.compose.rememberImagePainter

data class Weather(
    val day: String,
    val temperature: Int,
    val icon: String
)

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun WeatherForecastScreen(navHostController: NavHostController) {
    var presses by rememberSaveable { mutableIntStateOf(0) }
    // Create an array of Weather objects
    val weatherItems = arrayOf(
        Weather("Monday", -1, "https://openweathermap.org/img/wn/01d.png"),
        Weather("Tuesday", 0, "https://openweathermap.org/img/wn/02d.png"),
        Weather("Wednesday", 2, "https://openweathermap.org/img/wn/03d.png"),
        Weather("Thursday", 3, "https://openweathermap.org/img/wn/04d.png"),
        Weather("Friday", 1, "https://openweathermap.org/img/wn/09d.png"),
        Weather("Saturday", -2, "https://openweathermap.org/img/wn/10d.png"),
        Weather("Sunday", -3, "https://openweathermap.org/img/wn/11d.png")
    )

    Scaffold(
        topBar = {
            TopAppBar(
                title = {
                    Text("Weather. Presses $presses")
                }
            )
        },
        bottomBar = {
            BottomAppBar(
                containerColor = MaterialTheme.colorScheme.primaryContainer,
                contentColor = MaterialTheme.colorScheme.primary,
            ) {
                Button(onClick = { /*TODO*/
                    navHostController.navigate("currentWeatherScreen")
                }) {
                    Text(
                        modifier = Modifier
                            .fillMaxWidth(),
                        textAlign = TextAlign.Center,
                        text = "Back",
                    )
                }
            }
        },
        floatingActionButton = {
            FloatingActionButton(onClick = { presses++ }) {
                Icon(Icons.Default.Add, contentDescription = "Add")
            }
        }
    ) { innerPadding ->
        // LazyColumn hyvä kun tulee apista, latautuu miten tulee dataa
        LazyColumn(
            modifier = Modifier
                .padding(innerPadding),
            verticalArrangement = Arrangement.spacedBy(16.dp),
        ) {
            items(weatherItems) { item ->
                WeatherListItem(item)
            }
        }
    }
}

@Composable
fun WeatherListItem(item: Weather) {
    Row(
        verticalAlignment = Alignment.CenterVertically,
        modifier = Modifier.background(Color.LightGray)
    ) {
        Image(
            painter = rememberImagePainter(item.icon),
            contentDescription = "Weather icon",
            modifier = androidx.compose.ui.Modifier.size(50.dp)
        )
        Column {
            Text("${item.temperature} C")
            Text(item.day)
        }
    }
}


@Composable
fun WeatherForecastScreenPreview() {
    val navHostController = rememberNavController();
    WeatherForecastScreen(navHostController);
}