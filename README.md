# Problem Set: React Weather Report

Directions
Create a small, practice React app named react-weather-report.
Run this command to create this practice project.

$ npm create -y vite@latest react-weather-report -- --template react

Change into this directory, and run the server.
There is no submission for this problem set. Be prepared to share your work in small groups.

Practice
Create a small weather app that has two components: App and Temperature.
The Temperature component must display a numeric temperature. Also, this component must include two buttons:
One button increases the temperature by one degree
One button decreases the temperature by one degree
Pick either Fahrenheit or Celsius measurements.

When the temperature displayed is within certain ranges, the color of the temperature must change:

| Temperature (°C) | Temperature (°F) | Color  |
| ---------------- | ---------------- | ------ |
| 26+              | 80+              | Red    |
| 20–25            | 70–79            | Orange |
| 15–19            | 60–69            | Yellow |
| 10–14            | 50–59            | Green  |
| 9 or below       | 49 or below      | Teal   |

