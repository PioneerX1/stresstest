$(document).ready(function() {
  $("form#stress-form").submit(function() {
    event.preventDefault();
    $("#recommend1").hide();
    $("#recommend2").hide();

    var sign = 0;
    var symptom = 0;
    var manage = 0;
    var issues;

    $("#results").show();
    //$("#sign-responses").show();
    $("input:checkbox[name=sign]:checked").each(function() {
      var temp = $(this).val();
      $("#sign-responses").append(temp + "<br>");
      sign++;
    });
    //$("#symptom-responses").show();
    $("input:checkbox[name=symptom]:checked").each(function() {
      var temp = $(this).val();
      $("#symptom-responses").append(temp + "<br>");
      symptom++;
    });
    //$("#manage-responses").show();
    $("input:checkbox[name=manage]:checked").each(function() {
      var temp = $(this).val();
      $("#manage-responses").append(temp + "<br>");
      manage++;
    });

    issues = sign + (2*symptom);
    //alert(sign + " " + symptom + " " + manage + " " + issues);
    if (manage/issues < 0.25) {
      $("#recommend1").show();
      //alert("Please see a doctor and do more to manage symptoms");
    } else {
      $("#recommend2").show();
      //alert("Good job managing stress, keep it up, and come back if signs or symptoms increase");
    }


  });
});
