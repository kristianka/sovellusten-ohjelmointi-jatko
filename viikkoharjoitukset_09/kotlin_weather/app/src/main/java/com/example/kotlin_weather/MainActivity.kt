package com.example.kotlin_weather

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview

import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.rememberNavController

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            App()
        }
    }
}

@Preview
@Composable
fun App() {
    // navigaatio täällä
    val navController = rememberNavController()
    NavHost(navController, startDestination = "currentWeatherScreen") {
        composable("currentWeatherScreen") {
            CurrentWeatherScreen(navController)
        }
        composable("weatherForecastScreen") {
            WeatherForecastScreen(navController)
        }
        composable("buttonClick") {
            ClickCounterScreen(navController)
        }
    }
}



