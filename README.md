# National-Park-Trip-Planner

## Description
This project was created to allow users to easily plan a National Park visit based on location, weather, park information, and park events. It also introduced us to the dynamics of a group project and all the ups and downs associated with that, including frustrations with the "Github" platform. Essentially, the project is a culmination of all the material we have learned in class thus far. This application allows users to render National Park information based on state selection. Once a state is selected, a list of National Parks for the given state will be displayed. The user can then select a park of their liking using a “select” button which will then render a 5-day forecast for the park along with event information. With most projects, we ran into some issues creating the UI. Specifically, rendering a "6 P.M." time-slot for each day in the 5-day forecast and fetching coordinate locations for each National Park were fairly challenging. We ended up using the slice method on both occasions to grab the information we needed from both APIs.

## Usage
1. The user will be shown a National Park list based on the state selection they make in the state dropdown menu.

2. All parks in the selected state will populate the first collapsible container. Brief park information will be displayed along with an image of the park. Below this image, a "select" button will be created.

3. Once the user has chosen a park of their liking, they will click the button associated with that park which will then render a "5-day forecast" for the selected park in the second collapsible container along with "park events" in the third. 

## Credits

Nic Serra (GitHub: nserra310) - HTML/CSS/Google Materialize

Sean Thomason (GitHub: Sthomason161) - HTML/CSS/Google Materialize

Sina Farheidar-Smith (GitHub: sinafarheidar) - National Parks API and Javascript/JQuery

Zach Nylen (GitHub: znylen88) - Open Weather API and Javascript/JQuery

## 3rd Party APIs

1. OpenWeatherAPI

2. NationalParksAPI

## Deployed App

https://znylen88.github.io/National-Park-Trip-Planner/
