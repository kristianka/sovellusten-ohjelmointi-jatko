package com.example.retrofit

import android.content.ContentValues.TAG
import android.os.Bundle
import android.util.Log
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import com.example.retrofit.ui.theme.RetrofitTheme
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import retrofit2.http.GET

data class TodoItem(
    val userId: Int,
    val id: Int,
    val title: String,
    val completed: Boolean
)

interface ApiService {
    @GET("todos")
    suspend fun fetchTodos(): List<TodoItem>
}

class MainActivity : ComponentActivity() {
    private val CUSTOM_TAG = "DEBUG_TAG"


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        Log.d(CUSTOM_TAG, "Created")
        setContent {
            TodoListScreen()
        }
    }

    override fun onStart() {
        super.onStart()
        Log.d(CUSTOM_TAG, "Started")
    }

    override fun onResume() {
        super.onResume()
        Log.d(CUSTOM_TAG, "Resumed")
    }

    override fun onPause() {
        super.onPause()
        Log.d(CUSTOM_TAG, "Paused")
    }

    override fun onStop() {
        super.onStop()
        Log.d(CUSTOM_TAG, "Stopped")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(CUSTOM_TAG, "Destroyed")
    }

}

object RetrofitInstance {
    private const val BASE_URL = "https://jsonplaceholder.typicode.com/"

    private val retrofit by lazy {
        Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .build()
    }

    val apiService: ApiService by lazy {
        retrofit.create(ApiService::class.java)
    }
}

@Composable
@Preview
fun TodoListScreen() {
    var todos by remember {
        mutableStateOf<List<TodoItem>?> (null)
    }
    var isLoading by remember {
        mutableStateOf(true)
    }

    // like useEffect
    LaunchedEffect(Unit) {
        isLoading = true;
        todos = RetrofitInstance.apiService.fetchTodos();
        isLoading = false;
    }

    if (isLoading) {
        CircularProgressIndicator()
    } else {
        todos?.let {
            LazyColumn {
                items(it) { todo ->
                    TodoItemView(todo)
                }
            }
        }
    }
}

@Composable
fun TodoItemView(todo: TodoItem) {
    Text(text = "${todo.id}: ${todo.title}", modifier = Modifier.padding(8.dp))
}