document.getElementById('container').onchange = function() {
  /* måste lägga till Number för att datorn ska förstå att det är siffror */
  var bill = Number(document.getElementById('billtotal').value);
  /* alert(bill);  "Tittar om var bill fungerar"*/
  var tipPercent = document.getElementById('tipInput').value;
  /* alert(tipPercent); "Tittar om dricks reagerar när man drar den" */
  var split = document.getElementById('splitInput').value;
  /* alert(split); "Tittar hur månnga människor är " */
  var tipValue = bill * (tipPercent / 100);
  var newBillEach = (bill + tipValue) / split;
  var tipEach = tipValue / split;

  document.getElementById('tipOutput').innerHTML = tipPercent + "%";
  document.getElementById('splitOutput').innerHTML = split;
  document.getElementById('newBill').innerHTML = "$" + newBillEach.toFixed(2);
  /* toFixed gör så att det inte blir så många nummer utan 2 decimaler */
  document.getElementById('tipEach').innerHTML = "$" + tipEach.toFixed(2);
}
