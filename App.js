import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ActivityIndicator, Keyboard, SafeAreaView, ScrollView } from 'react-native';
import axios from 'axios';
import WeatherCard from './components/WeatherCard'; // Adjust the import path as necessary

const API_KEY = '0f7bc8ce84b7b66d8ba9df224f55d38d'; // Replace with your OpenWeather API key

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    Keyboard.dismiss();
    if (!city) return alert('Please enter a city name');
    setLoading(true);
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      setWeather(res.data);
    } catch (error) {
      alert('City not found! Please try again.');
      setWeather(null);
    }
    setLoading(false);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>🌦️ Weather App</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter city name"
          value={city}
          onChangeText={setCity}
        />
        <Button title="Get Weather" onPress={getWeather} />

        {loading && <ActivityIndicator size="large" color="#000" style={{ marginTop: 20 }} />}

        {weather && <WeatherCard data={weather} />}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f2f9fc',
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 12,
    borderRadius: 20,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    marginBottom: 20,
  //borderRadius: 20,
    backgroundColor: '#007bff',
  },
});
