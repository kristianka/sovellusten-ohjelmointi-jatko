package com.example.kotlin_weather

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.NavController
import androidx.navigation.NavHostController
import androidx.navigation.compose.rememberNavController

@Composable
fun ClickCounterScreen(navController: NavHostController) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally
    ) {
        Text(text = "Hello", fontSize = 30.sp)
        Switch(checked = true, onCheckedChange = {

        })
        Button(onClick = { /*TODO*/
            navController.navigate("currentWeatherScreen")
        }) {
            Text(text = "Back")
        }
    }
}

@Preview
@Composable
fun ClickCounterScreenPreview() {
    // mock nav controller
    val navController = rememberNavController()
    ClickCounterScreen(navController = navController)
}