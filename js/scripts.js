$(document).ready(function() {
  $("form#stress-form").submit(function() {
    event.preventDefault();
    $("#recommend1").hide();
    $("#recommend2").hide();
    $("#recommend3").hide();

    var sign = 0;
    var symptom = 0;
    var manage = 0;
    var issues;

    //alert('got to if statements');

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
    if (manage/issues < 0.4 && manage/issues > 0.2) {
      $("#recommend1").show();
    } else if (manage/issues >= 0.4) {
      $("#recommend2").show();
    } else {
      $("#recommend3").show();
    }
  });
});
