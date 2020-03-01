function Automobile( year, model, type ){
    this.year = year; //integer (ex. 2001, 1995)
    this.model = model; //string (ex. 320, E30)
    this.type = type; //string (ex. compact executive, grand tourer)
}


var automobiles = [ 
    new Automobile(1932, "3/15", "sports roadster"),
    new Automobile(1934, "3/20 PS", "compact car"),
    new Automobile(1940, "328", "roadster"),
    new Automobile(1946, "326", "mid-size luxury car"),
    new Automobile(1955, "327", "grand tourer"),
    new Automobile(1938, "320", "mid-size luxury car"),
    new Automobile(1950, "321", "mid-size luxury car"),
    new Automobile(1941, "335", "full-size luxury car"),
    new Automobile(1955, "340", "full-size luxury car"),
    new Automobile(1962, "501", "mid-size luxury car"),
    new Automobile(1962, "Isetta", "microcar"),
    new Automobile(1959, "503", "grand tourer"),
    new Automobile(1959, "507", "roadster"),
    new Automobile(1965, "700", "compact car"),
    new Automobile(1965, "3200 CS", "sports car"),
    new Automobile(1972, "New Class (sedans)", "mid-size luxury car"),
    new Automobile(1969, "New Class (coupes)", "grand tourer"),
    new Automobile(1977, "02 series", "compact executive car"),
    new Automobile(1975, "E9 New Six", "grand tourer"),
    new Automobile(1977, "E3 New Six", "full-size luxury car"),
    new Automobile(1981, "E12 5 series", "mid-size luxury car"),
    new Automobile(1983, "E21 3 series", "compact executive car"),
    new Automobile(1989, "E24 6 series", "grand tourer"),
    new Automobile(1987, "E23 7 series", "full-size luxury car"),
    new Automobile(1981, "E26 M1", "supercar"),
    new Automobile(1988, "E28 5 series", "mid-size luxury car"),
    new Automobile(1994, "E30 3 series", "compact executive car"),
    new Automobile(1994, "E32 7 series", "full-size luxury car"),
    new Automobile(1996, "E34 5 series", "mid-size luxury car"),
    new Automobile(1991, "Z1", "roadster"),
    new Automobile(1999, "E31 8 series", "grand tourer"),
    new Automobile(2000, "E36 3 series", "compact executive car"),
    new Automobile(2001, "E38 7 series", "full-size luxury car"),
    new Automobile(2002, "E36/7 Z3", "two-seat roadster and coupe"),
    new Automobile(2003, "E39 5 series", "mid-size luxury car"),
    new Automobile(2006, "E46 3 series", "compact executive car"),
    new Automobile(2006, "E53 X5", "mid-size luxury SUV"),
    new Automobile(2003, "E52 Z8", "roadster"),
    new Automobile(2008, "E65 7 series", "full-size luxury car"),
    new Automobile(2008, "E85 Z4", "two-seater roadster and coupe"),
    new Automobile(2010, "E60 5 series", "mid-size luxury car"),
    new Automobile(2010, "E83 X3", "compact luxury SUV"),
    new Automobile(2013, "E90 3 series", "compact executive car"),
    new Automobile(2013, "E70 X5", "mid-size luxury SUV"),
    new Automobile(1959, "E71 X6", "mid-size luxury SUV"),
    new Automobile(2015, "F01 7 series", "full-size luxury car"),
    new Automobile(2016, "E89 Z4", "roadster"),
    new Automobile(2015, "E84 X1", "sub-compact luxury crossover"),
    new Automobile(2018, "F06 6 series", "grand tourer"),
    new Automobile(2018, "F12/F13 6 series", "grand tourer"),
    new Automobile(2017, "F10 5 series", "mid-size luxury car"),
    new Automobile(2017, "F25 X3", "compact luxury SUV"),
    new Automobile(2019, "F20 1 series", "subcompact car"),
    new Automobile(2019, "F30 3 series", "compact executive car"),
    new Automobile(2020, "I01 I3", "fully electric/hybrid subcompact car"),
    new Automobile(2020, "F32 4 series", "compact executive car"),
    new Automobile(2020, "F22 2 series", "compact car"),
    new Automobile(2018, "F15 X5", "mid-size luxury SUV"),
    new Automobile(2020, "F45 2 series", "active tourer"),
    new Automobile(2020, "I12 I8", "hybrid sports car"),
    new Automobile(2018, "F26 X4", "compact luxury SUV"),
    new Automobile(2019, "F16 X6", "mid-size luxury SUV"),
    new Automobile(2020, "F48 X1", "compact luxury SUV"),
    new Automobile(2020, "G11 7 series", "full-size luxury car"),
    new Automobile(2020, "G30 5 series", "mid-size luxury car"),
    new Automobile(2020, "G32 6 series", "mid-size luxury car"),
    new Automobile(2020, "F39 X2", "compact SUV"),
    new Automobile(2020, "G01 X3", "compact luxury SUV"),
    new Automobile(2020, "G02 X4", "compact luxury SUV"),
    new Automobile(2020, "G05 X5", "mid-size luxury SUV"),
    new Automobile(2020, "G15 8 series", "grand tourer"),
    new Automobile(2020, "G29 Z4", "roadster"),
    new Automobile(2020, "G20 3 series", "compact executive car"),
    new Automobile(2020, "F40 1 series", "subcompact car"),
    new Automobile(2020, "G06 X6", "mid-size luxury SUV"),
    new Automobile(2020, "G07 X7", "full-size luxury SUV"),
    new Automobile(2020, "F44 2 series", "subcompact car"),
    ];

/* This function prints all of the cars that are listed in a html list form */
function printEverything() {
   let body = document.getElementsByTagName('body')[0];
   var listOfVehicles = automobiles;
   var incThroughArr;
   var currentVehicle;
   let ul = document.createElement('ul');
   ul.setAttribute('id', 'unorderedListOfBMWs');
   for(incThroughArr = 0; incThroughArr < listOfVehicles.length; incThroughArr++) {
      let li = document.createElement('li');
      li.setAttribute('id', 'vehicle');
      currentVehicle = listOfVehicles[incThroughArr];
      li.appendChild(document.createTextNode(currentVehicle.year + ' ' + currentVehicle.model + ' ' + currentVehicle.type));
      ul.appendChild(li);
   }
   body.appendChild(ul);
}

printEverything();
