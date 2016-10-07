console.log("Here1");
$.ajax({
  crossDomain:true,
  contentType: "application/json; charset=utf-8",
  url: "http://services.vision-mi-bluegrasscoms.com/services/stats/visionstats.aspx",
  dataType: "jsonp",
  success: onDataReceived,
  error: errorHandler
});
function onDataReceived(data)
{
	$("#NumberOfAssessments").text(""+data.NumberOfAssessments);
	$("#ValueOfAssessments").text("£"+data.ValueOfAssessments);
	$("#NumberOfParts").text(""+data.NumberOfParts);
	$("#TotalLossSaved").text(""+data.TotalLossVehicles);
}
	function errorHandler(xhr, ajaxOptions, thrownError)
	{
	  //  alert(xhr.status);
      //  alert(thrownError);
	}
