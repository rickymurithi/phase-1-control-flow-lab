function scuberGreetingForFeet(distance) {
  //code!
  if (distance > 2500) {
    return 'No can do.'
  }else if (distance > 2000) {
    return 'I will gladly take your thirty bucks.'
  }else if (distance <= 400) {
    return 'This one is on me!'
  }
}

function ternaryCheckCity(city) {
  //code!
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tip) {
  //code!
  switch(tip){
    case 'generous':
      return 'Thank you so much.'
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break;
  }
}