const leftPaddle = document.getElementsByClassName('paddle-left')[0];
const rightPaddle = document.getElementsByClassName('paddle-right')[0];

getCurrentPaddlePosition = (element) => {
  return parseInt(element.style.top.substr(0, 2));
}

isNotOutOfBounds = (element, direction) => {
  if (getCurrentPaddlePosition(element) <= 3 && direction === 'up') {
    return false;
  } else if (getCurrentPaddlePosition(element) >= 97 && direction === 'down') {
    return false;
  } else {
    return true;
  }
}

setNewPaddlePosition = (element, direction) => {
  if (direction === 'up' && isNotOutOfBounds(element, direction)) {
    return (getCurrentPaddlePosition(element) - 3).toString();
  } else if (direction === 'down' && isNotOutOfBounds(element, direction)) {
    return (getCurrentPaddlePosition(element) + 3).toString();
  }
}

gameControls = (e) => {
  switch(e.keyCode) {
    case 87:  { // w = player left up
      leftPaddle.style.top = setNewPaddlePosition(leftPaddle, 'up') + '%';
      break;
    }
    case 83: { // s = player left down
      leftPaddle.style.top = setNewPaddlePosition(leftPaddle, 'down') + '%';
      break;
    }
    case 38: { // up-arrow = player right up
      rightPaddle.style.top = setNewPaddlePosition(rightPaddle, 'up') + '%';
      break;
    }
    case 40: { // down-arrow = player right down
      rightPaddle.style.top = setNewPaddlePosition(rightPaddle, 'down') + '%';
    }
  }
}

document.body.addEventListener('keyup', gameControls);
