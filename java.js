document.getElementById("stockSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("stockInput").value;
  if (value === "")
    return;
  console.log(value);

  const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const date = json.current_date;
    console.log(json);
});
});
