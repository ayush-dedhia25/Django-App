$(document).ready(function() {
	
	// Default elements hiding
	$("#end-date").hide();
	
	// On click function (start date button)
	$("#button1").click(function() {
		const date = $("#input1").val();
		// alert(date);
		validateDate(date);
	});
	
	// On click function (end date button)
	$("#button2").click(function() {
		const finalDate = $("#input2").val();
		alert(finalDate);
		validateDate(finalDate);
		
		$.ajax({
			url: '/post',
			type: 'POST',
			data: {
				date_first: $("#input1").val(),
				date_last: finalDate
			},
			success: function(response) {
				alert(response);
			},
			error: function(error) {
				alert("😭 😭 😭");
			}
		});
		
	});
	
	// Function to validate date input
	function validateDate(inputDate) {
		const today = new Date();
		const dd = String(today.getDate()).padStart(2, '0');
		const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
		const yyyy = today.getFullYear();
		const fullDate = yyyy + '/' + mm + '/' + dd;
		
		if (inputDate === "")  {
			alert("Error: This field cannot be kept blank.");
			return false;
		}
		
		if (inputDate.length !== 10) {
			alert("The date is invalid.\n\n1. Check the date that you entered. \n2. Try using hyphens '-' to seperate Year-Month-Day");
			return false;
		}
		
		const splitDate = inputDate.split("-");
		
		const year = splitDate[0];
		const month = splitDate[1];
		const day = splitDate[2];
		
		if (year > yyyy) {
			alert("You cannot see the future. Lol! Please fix the year.");
			return false;
		}
		
		if (month > 12) {
			alert("Does your calender contains more then 12 months? Please fix the month.");
			return false;
		}
		
		if (day > 31) {
			alert("On which planet do you live in? On earth there are only 31 or 30 days in a month not more than that.");
			return false;
		}
		
		$("#end-date").show();
		
		return inputDate;
	}
	
});
