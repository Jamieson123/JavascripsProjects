const apiKey = '10c41a8ef9416ceb9212b17194cf99ea';
const cityInput = document.getElementById('city-input');
const weatherBtn = document.getElementById('get-weather-btn');
const weatherResult = document.getElementById('weather-result');
const locationDiv = document.querySelector('.location');
const degreeNum = document.querySelector('.num');
const weatherIcon = document.querySelector('.icon');
const descriptionDiv = document.querySelector('.description');
const humidityDiv = document.querySelector('.humidity');

// Pre-made list of cities
const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte", "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington", "Boston", "El Paso", "Detroit", "Nashville", "Portland", "Memphis", "Oklahoma City", "Las Vegas", "Louisville", "Baltimore", "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Mesa", "Kansas City", "Atlanta", "Long Beach", "Omaha", "Raleigh", "Colorado Springs", "Miami", "Virginia Beach", "Oakland", "Minneapolis", "Tulsa", "Arlington", "New Orleans", "Wichita", "Cleveland", "Tampa", "Bakersfield", "Aurora", "Honolulu", "Anaheim", "Santa Ana", "Riverside", "Corpus Christi", "Lexington", "Henderson", "Stockton", "Saint Paul", "Cincinnati", "St. Louis", "Pittsburgh", "Greensboro", "Lincoln", "Anchorage", "Plano", "Orlando", "Irvine", "Newark", "Durham", "Chula Vista", "Toledo", "Fort Wayne", "St. Petersburg", "Laredo", "Jersey City", "Chandler", "Madison", "Lubbock", "Scottsdale", "Reno", "Buffalo", "Gilbert", "Glendale", "North Las Vegas", "Winston–Salem", "Chesapeake", "Norfolk", "Fremont", "Garland", "Irving", "Hialeah", "Richmond", "Boise", "Spokane", "Baton Rouge", "Tacoma", "San Bernardino", "Modesto", "Fontana", "Des Moines", "Moreno Valley", "Santa Clarita", "Fayetteville", "Birmingham", "Oxnard", "Rochester", "Port St. Lucie", "Grand Rapids", "Huntsville", "Salt Lake City", "Frisco", "Yonkers", "Amarillo", "Glendale", "Huntington Beach", "McKinney", "Montgomery", "Augusta", "Aurora", "Akron", "Little Rock", "Tempe", "Columbus", "Overland Park", "Grand Prairie", "Tallahassee", "Cape Coral", "Mobile", "Knoxville", "Shreveport", "Worcester", "Ontario", "Vancouver", "Sioux Falls", "Chattanooga", "Brownsville", "Fort Lauderdale", "Providence", "Newport News", "Rancho Cucamonga", "Santa Rosa", "Peoria", "Oceanside", "Elk Grove", "Salem", "Pembroke Pines", "Eugene", "Garden Grove", "Cary", "Fort Collins", "Corona", "Springfield", "Jackson", "Alexandria", "Hayward", "Clarksville", "Lakewood", "Lancaster", "Salinas", "Palmdale", "Hollywood", "Springfield", "Macon", "Kansas City", "Sunnyvale", "Pomona", "Killeen", "Escondido", "Pasadena", "Naperville", "Bellevue", "Joliet", "Murfreesboro", "Midland", "Rockford", "Paterson", "Savannah", "Bridgeport", "Torrance", "McAllen", "Syracuse", "Surprise", "Denton", "Roseville", "Thornton", "Miramar", "Pasadena", "Mesquite", "Olathe", "Dayton", "Carrollton", "Waco", "Orange", "Fullerton", "Charleston", "West Valley City", "Visalia", "Hampton", "Gainesville", "Warren", "Coral Springs", "Cedar Rapids", "Round Rock", "Sterling Heights", "Kent", "Columbia", "Santa Clara", "New Haven", "Stamford", "Concord", "Elizabeth", "Athens", "Thousand Oaks", "Lafayette", "Simi Valley", "Topeka", "Norman", "Fargo", "Wilmington", "Abilene", "Odessa", "Columbia", "Pearland", "Victorville", "Hartford", "Vallejo", "Allentown", "Berkeley", "Richardson", "Arvada", "Ann Arbor", "Rochester", "Cambridge", "Sugar Land", "Lansing", "Evansville", "College Station", "Fairfield", "Clearwater", "Beaumont", "Independence", "Provo", "West Jordan", "Murfreesboro", "Palm Bay", "El Monte", "Carlsbad", "North Charleston", "Temecula", "Clovis", "Springfield", "Meridian", "Westminster", "Costa Mesa", "High Point", "Manchester", "Pueblo", "Lakeland", "Pompano Beach", "West Palm Beach", "Antioch", "Everett", "Downey", "Lowell", "Centennial", "Elgin", "Richmond", "Peoria", "Broken Arrow", "Miami Gardens", "Billings", "Jurupa Valley", "Sandy Springs", "Gresham", "Lewisville", "Hillsboro", "Ventura", "Greeley", "Inglewood", "Waterbury", "League City", "Santa Maria", "Tyler", "Davie", "Lakewood", "Daly City", "Boulder", "Allen", "West Covina", "Sparks", "Wichita Falls", "Green Bay", "San Mateo", "Norwalk", "Rialto", "Las Cruces", "Chico", "El Cajon", "Burbank", "South Bend", "Renton", "Vista", "Davenport", "Edinburg", "Tuscaloosa", "Carmel", "Spokane Valley", "San Angelo", "Vacaville", "Clinton", "Bend", "Woodbridge"];

// Initialize Awesomplete with the list of cities
new Awesomplete(cityInput, { list: cities });

weatherBtn.addEventListener('click', () => {
    const city = cityInput.value;
    getWeather(city);
});

function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    if (data.cod !== 200) {
        weatherResult.innerHTML = `<p>${data.message}</p>`;
        return;
    }

    const { name, main, weather } = data;
    const weatherIconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`; // Fixed URL

    locationDiv.innerHTML = name;
    degreeNum.innerHTML = `${main.temp}°C`;
    weatherIcon.src = weatherIconUrl;
    descriptionDiv.innerHTML = weather[0].description;
    humidityDiv.innerHTML = `Humidity: ${main.humidity}%`;
}
