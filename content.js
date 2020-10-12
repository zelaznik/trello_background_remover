function removeBackgroundImage() {
  const root = document.querySelector('#trello-root');
  root.style = '';
  root.style.backgroundColor = 'lightsteelblue';
}

window.onload = function() {
  removeBackgroundImage();

  var oldHref = document.location.href;
  var bodyList = document.querySelector('body');
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (oldHref != document.location.href) {
        oldHref = document.location.href;
        removeBackgroundImage();
      }
    });
  });

  var config = {
    childList: true,
    subtree: true
  };

  observer.observe(bodyList, config);
}

removeBackgroundImage();
