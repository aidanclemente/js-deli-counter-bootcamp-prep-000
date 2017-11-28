  var katzDeliLine = [];

function takeANumber(katzDeliLine, newPerson) {
   katzDeliLine.push(`${newPerson}`);
   return (`Welcome, ${newPerson}. You are number ${katzDeliLine.length} in line.`);
<<<<<<< HEAD
};
=======
}
>>>>>>> eb1faf5fd73feb84eea5f814eee7b4531b073b2b

function nowServing(katzDeliLine) {
  let i = 0;

while (i<katzDeliLine.length){
  i++;
}
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
<<<<<<< HEAD
    return (`Currently serving ${katzDeliLine.shift()}.`);
  };
};

var line = [];
function currentLine(katzDeliLine) {
  let i = 0;

  while (i<katzDeliLine.length) {
    line.push(` ` + [i+1] + `. ` + katzDeliLine[i]);
    i++;
  }
    if (katzDeliLine.length > 0) {
      return (`The line is currently:  ${line}`);
    } else {
      return "The line is currently empty.";
    };
};
=======
    return katzDeliLine.shift();
  }
}
>>>>>>> eb1faf5fd73feb84eea5f814eee7b4531b073b2b
