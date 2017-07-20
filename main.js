mathBot = {
  centralProcessor: function() {
    var endNum = 1000;
    var totalNum = 0;
    for(checkNum = 0; checkNum < endNum; checkNum++) {
      if(checkNum % 3 === 0 || checkNum % 5 === 0) {
        totalNum = totalNum + checkNum;
      }
    }
    systemDisplay.mainDisplay(totalNum);
  }
}

systemDisplay = {
  mainDisplay: function(inputNum) {
    var answer = document.createElement('button');
    var page = document.getElementById('buttonPlace');
    var music = document.getElementById('dial');
    page.innerHTML = '';
    answer.textContent = inputNum  + ' (click to remove)';
    answer.id = 'finalAnswer';
    answer.onclick = this.removeItem;
    page.appendChild(answer);
    music.play();
  },

  removeItem: function() {
    var page = document.getElementById('buttonPlace');
    page.innerHTML = '';
    var music = document.getElementById('low');
    music.play();
  }
}
