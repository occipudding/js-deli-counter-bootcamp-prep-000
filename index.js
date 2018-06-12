var katzDeli = [];
var katzDeliLine = [];
var newName = [];

function takeANumber(katzDeliLine, newName) {
  
  katzDeliLine.push(newName);
  
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine,newName) {
  
  if(!katzDeliLine.length) {
    return `There is nobody waiting to be served!`;
  } else {
    return 
  }
  
}