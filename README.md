Ultimate Gas Turbine Engine Analyzer

An advanced, unified application for analyzing gas turbine thermodynamic cycles, designed for engineers, students, and researchers. This tool allows for the real-time analysis of 7 different engine architectures (both aero and stationary power plants).

🚀 Features
7 Different Architectures:

Aero: Turbojet, Turbofan, Turboprop, Turboshaft.

Power Plants: Reheat Brayton, Regenerative Brayton, Combined Regen-Reheat.

Interactive T-s Diagrams: Full cycle visualization with automatic numbering of thermodynamic stations.

Parametric Studies (Flight Envelope): Analysis of the effect of altitude and Mach number on power output and specific fuel consumption.

Design Maps (Contours): 2D Contour plots for optimizing Compressor Pressure Ratio (CPR) and Turbine Inlet Temperature (TIT).

Comprehensive Theory: Built-in theory section with mathematical equations (rendered via MathJax) that dynamically adapts to the selected engine.

Data Export: Easily export all input parameters and calculated results to a CSV file (Excel-compatible).

PWA Capability: Full Progressive Web App support for installation on Android/iOS mobile devices and offline operation.

🛠 Technologies Used
HTML5 / CSS3: Responsive UI designed for both Desktop and Mobile experiences.

JavaScript (ES6): Custom thermodynamic solvers for calculating the cycles.

Chart.js: Utilized for T-s diagrams and parametric line charts.

Plotly.js: Utilized for generating 2D Contour Maps.

MathJax: Used for rendering complex LaTeX mathematical formulas.

📱 Installation Instructions 

This application is a PWA, which means you can install it directly to your phone's home screen without needing to download anything.

Open the provided link using Chrome (Android) or Safari (iOS).

Android: Tap the 3 vertical dots in the top right corner of the browser and select "Install app".

iOS: Tap the Share button at the bottom of the screen and select "Add to Home Screen".

📊 Thermodynamic Station Structure
The tool follows standard turbomachinery numerical notation:

0: Ambient (Free-stream)

1: Intake Exit / Diffuser Exit

2: Compressor Exit

3: Turbine Inlet (TIT)

4-5: Intermediate expansion or reheat states

9/19: Exhaust Nozzle Exits (Core/Bypass)

📄 License & Disclaimer
This tool is provided for educational and research purposes. The calculations are based on standard ideal/real gas models utilizing average specific heat assumptions for cold and hot sections.

Developed to simplify the thermodynamic analysis of complex gas turbine cycles.

Prof A.Tourlidakis
Department of Mechanical Engineering 
University of Western Macedonia
Kozani 50100, Greece
atourlidakis@uowm.gr
