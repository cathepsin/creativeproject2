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
});
});
