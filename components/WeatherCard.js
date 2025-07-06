import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function WeatherCard({ data }) {
  const weather = data.weather[0];
  const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;

  const formatTime = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <View style={styles.card}>
      <Text style={styles.city}>📍 {data.name}, {data.sys.country}</Text>
      <Image source={{ uri: iconUrl }} style={styles.icon} />
      <Text style={styles.condition}>☁️ {weather.main} - {weather.description}</Text>

      <Text style={styles.temp}>🌡️ Temp: {data.main.temp} °C</Text>
      <Text>🥵 Feels Like: {data.main.feels_like} °C</Text>
      <Text>🔻 Min: {data.main.temp_min} °C | 🔺 Max: {data.main.temp_max} °C</Text>

      <Text>💧 Humidity: {data.main.humidity}%</Text>
      <Text>⚖️ Pressure: {data.main.pressure} hPa</Text>

      <Text>🌬️ Wind: {data.wind.speed} m/s, {data.wind.deg}°</Text>
      <Text>☁️ Cloud Cover: {data.clouds.all}%</Text>

      <Text>🌅 Sunrise: {formatTime(data.sys.sunrise)}</Text>
      <Text>🌇 Sunset: {formatTime(data.sys.sunset)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#e0f7fa',
    padding: 20,
    marginTop: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
  },
  city: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    width: 100,
    height: 100,
  },
  condition: {
    fontSize: 16,
    marginBottom: 10,
    textTransform: 'capitalize',
  },
  temp: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
});
