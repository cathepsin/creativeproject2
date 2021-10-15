document.getElementById("stockSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("stockInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "https://api.twelvedata.com/time_series?symbol=" + value + ",EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=a0f9d5c9c5284e5bae1eb967b10927eb";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
    });
});
