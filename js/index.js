(function () {
  let trainPosition = -750;
  let trainWidth = 870;
  let basictrainWidth = 870;
  if (document.documentElement.clientWidth < 960) {
    trainWidth = 410;
    basictrainWidth = 410;
  }
  if (document.documentElement.clientWidth < 740) {
    trainPosition = -320;
    trainWidth = 343;
    basictrainWidth = 343;
  }
  train.style.width = `${trainWidth}px`;
  function animateTrain() {
    if (trainPosition >= document.documentElement.clientWidth - basictrainWidth - 100) {
      trainWidth -= 20;
      train.style.width = `${trainWidth}px`;
    }
    if (trainPosition >= document.documentElement.clientWidth - 100) {
      trainPosition = -750;
      train.style.left = `${trainPosition}px`;
      trainWidth = basictrainWidth;
      train.style.width = `${trainWidth}px`;
    }
    train.style.left = `${trainPosition}px`;
    trainPosition += 20;
  }

  if (document.documentElement.clientWidth >= 740 && document.documentElement.clientWidth < 960) {
    train.src = 'img/train_tablet.png';
    setInterval(animateTrain, 75);
  } else if (document.documentElement.clientWidth < 740) {
    train.src = 'img/train_mobile.png';
    setInterval(animateTrain, 85);
  } else {
    train.src='img/train.png';
    setInterval(animateTrain, 65);
  }
})();
