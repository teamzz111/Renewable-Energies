# Renewable Energies

A React Native mobile app that solves the solar-energy calculations from a renewable-energy course step by step: true solar time, solar declination, longitude correction, hour angle and solar irradiance.

> **Context:** university project (2019). It is kept here as a portfolio reference and is no longer maintained.

## Features

- **True solar time** (*Tiempo Solar Verdadero*), using the equation of time `E = 9.87·sin(2B) − 7.57·cos(B) − 1.5·sin(B)`.
- **Solar declination**, **longitude correction** and **hour angle** calculators.
- **Solar irradiance**: total, direct, reflected and diffuse. The inputs include orientation, elevation, surroundings and the tilt of the system.
- Three ways to enter a location: **pick a place on a map** (react-native-maps), enter coordinates, or type latitude and longitude.
- Date pickers for date-dependent calculations, and a menu of topics generated dynamically from JSON.
- The UI is in Spanish.

## Tech stack

React Native 0.59 · React 16.8 · JavaScript · React Navigation 3 · react-native-maps · react-native-datepicker · Jest

## Running locally

```bash
cd Energias
npm install
npx react-native run-android   # or: npx react-native run-ios
```

These are 2019 dependencies, so you will need a matching older React Native toolchain (Node 10/12 era) or an upgrade to build today. The map picker also needs your own Google Maps API key in `android/app/src/main/AndroidManifest.xml`.

## Author

Andrés Largo ([@teamzz111](https://github.com/teamzz111)).
