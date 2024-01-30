package com.example.kotlin_weather

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.Image
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.text.style.TextAlign
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            HelloWorldUI()
        }
    }
}

// Compossable kertoo että on UI elementti
@Composable
@Preview
fun HelloWorldUI() {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .background(Color.White)
            .padding(16.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center

    ) {
        Text(
            text = "Tampere", fontSize = 60.sp,
            modifier = Modifier
                .background(Color.LightGray)
                .fillMaxWidth(), textAlign = TextAlign.Center
        )
        Spacer(modifier = Modifier.height(50.dp))
        Row(
            modifier = Modifier.padding(16.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Column {
                Text(text = "-4 C", fontSize = 60.sp)
                Text(text = "Feels like -14 C", fontSize = 20.sp)
            }
            Spacer(modifier = Modifier.width(100.dp))
            Column {
                Image(
                    painter = painterResource(id = R.drawable.ic_launcher_background),
                    contentDescription = "Sunny icon",
                    modifier = Modifier.size(100.dp)
                )
                Text(text = "Sunny", fontSize = 20.sp)
            }
        }
        Text(text = "Wind: 4 m/s", fontSize = 20.sp)
        Spacer(modifier = Modifier.height(100.dp))
        Button(onClick = { /*TODO*/ }, modifier = Modifier.fillMaxWidth()) {
            Text(text = "Refresh", fontSize = 25.sp)
        }
    }
}