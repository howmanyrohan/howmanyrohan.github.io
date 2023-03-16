function getDateTime() {
	const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	const d = new Date();
	
	document.getElementById("WeekDay").innerHTML = days[d.getDay()];

	document.getElementById("Day").innerHTML = d.getDate();
	document.getElementById("Month").innerHTML = months[d.getMonth()];
	document.getElementById("Year").innerHTML = d.getFullYear();

	function getTime() {
		const cd = new Date();
		document.getElementById("Hours").innerHTML = cd.getHours();
		document.getElementById("Minutes").innerHTML = ": " + cd.getMinutes();
		document.getElementById("Seconds").innerHTML = ": " + cd.getSeconds();
	}
	getTime();
	setInterval(getTime, 500)

	const DateTimeDisplay = document.getElementById("DateTimeDisplay")
}
getDateTime();

