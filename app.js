var accordion = document.getElementsByClassName('contentBox')

for (var i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function() {
    // this.classList.toggle('active')
    
    if (this.classList.contains('active')) {
      this.classList.remove('active')
    }
    else {
      for (var i = 0; i < accordion.length; i++) {
        accordion[i].classList.remove('active')
      }
      this.classList.add('active')
    }
  })
}