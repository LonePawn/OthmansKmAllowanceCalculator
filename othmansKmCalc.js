/*
	The hard copy / paper-based table look-up method of calculating travel allowance (km allowance in particular) is faced with a few challenges:
	- increase in environmental footprint (printing of copies of the look-up table) - poor against the NSBP principles
	- the copies beginning to fade out and becoming illegible as copies of copies gradually degrade in quality
	- look-up tables are not friendly to some, who find them confusing
	- although, the time it takes for an experienced staff to look-up a distance is minimal, we believe the look-up and computation time
		can still be considerably reduced for all levels of staff experience

	While we acknowledge that the look-up table is well structured for easy look-up, this is an attempt to convert the table to an easy to use, light-weight browser program 
	which is free from the afore-mentioned drawbacks.

	developed by:
	GVD Admin Office - 02 March 2020.
*/

// Although this program is intended for use where I work, it can actually be used by any organisation. Simply change the kilometer allowance below to the approved allowance
// in your organisation and you are good to go.
const kmAllowance = 30; //currently approved allowance per km is 30 Naira. Alter this line to reflect updated amount when necessary. 

// below are the distances in kilometers btw all state capitals in Nigeria fetched from the authorised hard copy table where I work.
// You can fine tune distances if they differ from the distances approved in your organisation but really, it won't make any much difference.
var abakalikiDistances = [656,477,566,506,193,146,824,338,1204,360,1103,994,84,974,1116,642,660,737,626,692,856,1167,1206,300,476,1205,256,682,546,230,318,1356,202,273,346,954];
var abeokutaDistances = [722,340,200,468,444,1143,314,756,764,1384,1140,572,1304,1110,75,82,238,1312,1015,835,1006,1101,902,520,1596,991,663,167,559,671,970,595,691,524,1560];
var abujaDistances = [400,420,404,440,419,493,573,729,957,512,393,606,490,645,761,482,691,297,186,396,570,100,193,875,280,156,428,533,616,740,513,593,647,704];
var adoekitiDistances = [60,360,412,945,220,604,679,1207,1130,402,1124,1021,264,481,164,940,940,761,1010,1071,640,296,536,640,596,170,473,504,894,510,605,438,1236];
var akureDistances = [310,342,885,168,711,619,1147,1070,422,1265,1057,204,341,199,880,682,749,1046,1100,800,236,1279,500,632,110,413,524,830,430,545,370,1166];
var asabaDistances = [44,824,138,1027,297,1135,1080,109,979,1005,430,467,507,859,692,745,1007,1090,435,362,1200,353,673,396,97,225,1232,166,247,213,960];
var awkaDistances = [803,,166,1245,259,1115,970,62,950,904,457,494,520,815,671,724,986,1077,416,456,1245,332,926,425,141,255,1211,126,207,257,746];
var bauchiDistances = [880,962,1002,312,310,740,155,670,1060,1202,909,410,130,410,901,518,326,601,462,469,590,900,879,970,777,860,943,995,416];
var benincityDistances = [882,490,1274,880,254,1044,1046,300,322,399,998,758,786,1049,1252,673,207,1353,506,600,259,240,290,1020,279,375,210,1107];
var birninkebbiDistances = [1310,1101,660,1120,1117,322,679,826,520,1266,830,550,651,596,753,832,1404,890,456,635,1124,1202,168,1272,1353,1092,1400];
var calabarDistances = [908,1050,276,1152,1309,510,772,849,624,370,1034,1296,1464,514,579,1465,532,860,695,200,196,1535,151,67,300,1132];
var damaturuDistances = [208,1099,256,710,1274,1421,1292,364,444,724,430,603,640,895,130,783,874,1407,1273,1172,1013,1251,1030,1523,322];
var dutseDistances = [910,895,416,953,110,846,542,430,330,136,296,634,650,410,700,650,950,1076,1150,520,1030,1150,1192,550];
var enuguDistances = [898,1046,558,376,653,735,608,772,1003,1202,705,392,1201,270,590,462,146,229,1272,118,189,265,870];
var gombeDistances = [710,1223,1358,1064,279,206,566,457,675,482,756,400,623,745,1303,1030,1122,931,1010,1094,1146,262];
var gusauDistances = [1017,1150,857,1082,330,260,260,463,650,692,914,774,558,972,1180,1280,274,1150,1240,1270,971];
var ibadanDistances = [132,157,1117,928,750,1005,1065,825,504,1532,920,592,90,450,650,890,580,676,510,1543];
var ikejaDistances = [291,1264,1168,889,1139,1211,941,531,1665,820,725,237,564,620,1023,600,689,532,1612];
var ilorinDistances = [958,776,597,846,907,660,319,1372,863,432,115,667,843,730,770,865,609,319];
var jalingoDistances = [542,822,731,1084,450,640,416,360,888,1073,888,888,1188,756,674,924,142];
var josDistances = [278,418,592,196,469,592,336,457,776,745,840,644,727,811,861,540];
var kadunaDistances = [220,420,474,502,874,500,297,715,910,1003,480,890,975,1028,820];
var kanoDistances = [172,618,766,574,756,503,915,1173,1278,546,1163,1237,1209,714];
var katsinaDistances = [788,918,794,860,606,1000,1142,1430,380,1322,1406,1258,875];
var lafiaDistances = [700,788,82,297,387,490,587,840,456,555,606,736];
var lokojaDistances = [1063,342,309,305,424,521,985,405,490,549,945];
var maiduguriDistances = [930,1052,1372,1142,1419,1123,1323,1106,1258,436];
var makurdiDistances = [440,618,408,505,1116,374,473,524,674];
var minnaDistances = [552,735,838,674,716,808,851,1124];
var osogboDistances = [495,623,340,564,645,469,225];
var owerriDistances = [112,1411,186,250,116,1088];
var portharcourtDistances = [1203,114,120,104,1105];
var sokotoDistances = [1376,1475,1527,1187];
var umuahiaDistances = [88,201,917];
var uyoDistances = [224,1073];
var yenegoaDistances = [1424];
var yolaDistances = [""]; // all yola distances have already been implicitly covered in the above

// Create a gigantic data structure that holds all the distances
var distances = [abakalikiDistances, abeokutaDistances, abujaDistances, adoekitiDistances, akureDistances, asabaDistances, awkaDistances, bauchiDistances, benincityDistances, birninkebbiDistances,
calabarDistances, damaturuDistances, dutseDistances, enuguDistances, gombeDistances, gusauDistances, ibadanDistances, ikejaDistances, ilorinDistances, jalingoDistances, josDistances, kadunaDistances,
kanoDistances, katsinaDistances, lafiaDistances, lokojaDistances, maiduguriDistances, makurdiDistances, minnaDistances, osogboDistances, owerriDistances, portharcourtDistances, sokotoDistances,
umuahiaDistances, uyoDistances, yenegoaDistances, yolaDistances];

// keep an array of all state capitals.
// It will be used to validate source and destination inputs and also extract the index of a city in the giant array above
var cities = ["abakaliki", "abeokuta", "abuja", "adoekiti", "akure", "asaba", "awka", "bauchi", "benincity", "birninkebbi", "calabar", "damaturu", "dutse", "enugu", "gombe", "gusau", 
"ibadan", "ikeja", "ilorin", "jalingo", "jos", "kaduna", "kano", "katsina", "lafia", "lokoja", "maiduguri", "makurdi", "minna", "osogbo", "owerri", "portharcourt", "sokoto", "umuahia",
"uyo", "yenegoa", "yola"];

// keep copies of the state capitals array that will be used for filtering by input
var srcList = cities.slice();
var dstList = cities.slice();

// The following data structure is currently redundant. However, it can be used to later improve the code if necessary.
// Keep in mind this code is just a quick sketch-up to quickly get a working program so improvements can and should be made if the program is to be extended with more features
class Itenerary
{
	constructor(pNo, src, dst)
	{
		this.passengers = pNo;
		this.source = src;
		this.destination = dst;
	}

	getPassengers()
	{
		return this.passengers;
	}

	getSource()
	{
		return this.source;
	}

	getDestination()
	{
		return this.Destination;
	}
}

/*
	This function calculate and display the outputs on the readonly text boxes
	@param src: the starting place of the journey
	@param dst: the destination of the journey
*/
function calculateAllowance(src, dst)
{
	var _src = src.toLowerCase();
	var _dst = dst.toLowerCase();
	if (getCityIndex(_src) < 0)
	{
		//invalid source place
		alert("Invalid starting city. Please select a valid starting city for the journey.");
	}
	else if (getCityIndex(_dst) < 0)
	{
		//invalid source place
		alert("Invalid destination city. Please select a valid destination city for the journey.");
	}
	else
	{
		var passengers = document.getElementById("pNo").innerHTML;
		var distance = getDistance(_src, _dst);

		var formatter = new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'NGN',
		});
		var singleAllowance = formatter.format(distance*kmAllowance*2);
		var totalAllowance = formatter.format(distance*passengers*kmAllowance*2);

		// display the results
		document.getElementById("distance").value = distance;
		document.getElementById("singleAllowance").value = singleAllowance;
		document.getElementById("totalAllowance").value = totalAllowance;
	}
}

/*
	This function looks-up the distance btw a source and destination from our giant, global data structure.
	Note that the function uses 3 other helper functions - getDistanceUsingIndex() and getCityIndex()
	@param src: The starting place
	@param dst: The detination
	@return: The distance btw src and dst based on what is found in the giant array of distances.
			If at least one of the arguments is not found in the list of places, -1 is returned.
*/
function getDistance(src, dst)
{
	return getDistanceUsingIndex(getCityIndex(src), getCityIndex(dst));
}



function filterSrcList(xters)
{
	var filteredSrcList = getFilteredSrcList(xters);
	var srcListBox = document.getElementById('srcListBox');

	// construct the listBox by editing the document string
	var optionsString = "";
	for(k = 0; k < filteredSrcList.length; k++)
	{
		optionsString += "<option value = '"+filteredSrcList[k]+"'>"+filteredSrcList[k].toUpperCase()+"</option>";
	}
	srcListBox.innerHTML = optionsString;
}

function filterDstList(xters)
{
	var filteredDstList = getFilteredDstList(xters);
	var dstListBox = document.getElementById('dstListBox');

	// construct the listBox by editing the document string
	var optionsString = "";
	for(k = 0; k < filteredDstList.length; k++)
	{
		optionsString += "<option value = '"+filteredDstList[k]+"'>"+filteredDstList[k].toUpperCase()+"</option>";
	}
	dstListBox.innerHTML = optionsString;
}

function populateListBoxes()
{
	var optionsString = "";
	for(k = 0; k < srcList.length; k++)
	{
		optionsString += "<option value = '"+srcList[k]+"'>"+srcList[k].toUpperCase()+"</option>";
	}
	var srcListBox = document.getElementById('srcListBox');
	srcListBox.innerHTML = optionsString;
	var dstListBox = document.getElementById('dstListBox');
	dstListBox.innerHTML= optionsString;
}

/*
	The event handler attached to the selection of an item in the 'From' list box (i.e. the starting place of the journey)
	@param e: The particular listbox element whose item was selected. This is needed so we can copy the selected city into the 'From' text box 
*/
function srcSelected(e)
{
	var srcText = document.getElementById('srcText');
	srcText.value = e.options[e.selectedIndex].value.toUpperCase();
}


/*
	The event handler attached to the selection of an item in the 'To' list box (i.e. the destination of the journey)
	@param e: The particular listbox element whose item was selected. This is needed so we can copy the selected city into the 'To' text box 
*/
function dstSelected(e)
{
	var dstText = document.getElementById('dstText');
	dstText.value = e.options[e.selectedIndex].value.toUpperCase();
}

/*
	decrements the number of passengers by 1. However, it does its own input validation so a user cannot select less than 1  passenger
*/
function decrementPassengers()
{
	var passengersElement = document.getElementById("pNo");
	var pNo = passengersElement.innerHTML;
	if(pNo > 1)
	{
		pNo--;
	}
	passengersElement.innerHTML = pNo;
}

/*
	increments the number of passengers by 1.
*/
function incrementPassengers()
{
	var passengersElement = document.getElementById("pNo");
	var pNo = passengersElement.innerHTML;
	pNo++;	
	passengersElement.innerHTML = pNo;
}




// code below here are helper functions.
// -------------------------------------------------------------

function getDistanceUsingIndex(srcIndex, dstIndex)
{
	var distance = -1;
	if (srcIndex > -1 && dstIndex > -1)
	{
		if (srcIndex == dstIndex)
		{
			distance = 0;
		}
		
		else if(srcIndex > dstIndex)
		{
			temp = srcIndex;
			srcIndex = dstIndex;
			dstIndex = temp;
			distance = distances[srcIndex][dstIndex-srcIndex-1];
		}
		
		else
		{
			distance = distances[srcIndex][dstIndex-srcIndex-1];
		}
	}
	return distance;
}

function getCityIndex(city)
{
	return foundIndex = cities.indexOf(city);
}

function getFilteredSrcList(xters)
{
	return getFilteredList(xters, srcList);
}

function getFilteredDstList(xters)
{
	return getFilteredList(xters, dstList);
}

function getFilteredList(xters, theList)
{
	var rValue = new Array();
	for(k = 0; k < theList.length; k++)
	{
		if(theList[k].indexOf(xters) >-1)
		{
			rValue.push(theList[k]);
		}
	}
	return rValue;
}

