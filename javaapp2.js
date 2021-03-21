
var txt;

var r = confirm("did you like our website");
if (r == true) {
  txt = "its great news";
} else {
  txt = "you are welcome anytime";
}
var reminder = prompt("plz dont forget to provide us with your full name and phone number")
alert("you are welcome " + reminder)
alert("and dont forget o chose your colour from above")

var welCome = prompt("you are welcomed here can you tell us which one of these is your fav place[PETRA],[JERASH],[AQABA] ?");

while (welCome !== 'petra' && welCome !== 'jerash' && welCome !== 'aqaba') {

  welCome = prompt('please choose petra ,jerash or aqaba');
}

var numberOfphotos = prompt('chose the number of your photos')

var photo = ''

var counter = ''

if (welCome == 'petra') {
  photo = ('<img src="petra.jpg"/> </br>');
}
else if (welCome == 'jerash') {
  photo = ('<img src="jerash.jpg"/> </br>');
}
else {
  photo = ('<img src="aqaba.jpg"/> </br>');
}

for (i = 0; i < numberOfphotos; i++) {
  counter += photo;

}
document.write(counter)



