document.getElementById("submit_button").addEventListener("click", function(event) {
  event.preventDefault();
  var sign = document.querySelector('input[name="sign"]:checked').value;
  var day = document.querySelector('input[name="day"]:checked').value;
  console.log(sign)
  console.log(day)

  const URL = 'https://aztro.sameerkumar.website/?sign='+sign+'&day='+day;
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(json);
    document.getElementById("signResults").style.backgroundImage= "url('images/"+sign+".svg')";
    document.getElementById("signResults").style.backgroundRepeat="no-repeat";
    let results = "";
      results += "<h2>Welcome " + sign + "!</h2>";
      results += "<p>Your color is " + json.color + "</p>";
      results += "<p>Your lucky number is " + json.lucky_number + "</p>";
      results += "<p>Your lucky time is " + json.lucky_time + "</p>";
      results += "<p>" + json.description + "</p>";
      document.getElementById("signResults").innerHTML = results;
});
});
