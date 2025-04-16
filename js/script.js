// Copyright (c) 2025 Isaaq Simon rights reserved
//
// Created by: Isaaq Simon
// Created on: April 2025
// This file contains the JS functions for index.html
// Function to calculate the volume of a right triangular pyramid
function calculateVolume() {
  // Get input values and convert to float
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const h = parseFloat(document.getElementById("h").value);

  // Check if all values are valid numbers
  if (isNaN(a) || isNaN(b) || isNaN(h)) {
    document.getElementById("result").innerText = "Please enter valid numbers for all fields.";
    return;
  }

  // Apply the volume formula: (1/6) * a * b * h
  const volume = (1 / 6) * a * b * h;

  // Display volume rounded to 2 decimal places
  document.getElementById("result").innerText = 
    "Volume: " + volume.toFixed(2) + " cm³";
}