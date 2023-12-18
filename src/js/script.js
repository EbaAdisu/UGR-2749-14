mb = document.getElementById('menuButton')
mb.onclick = () => {
    dd = document.getElementById('dropdownMenu')
    dd.classList.toggle('dropdown__content')
}

document.addEventListener("DOMContentLoaded", function() {

    var welcomeMessage = document.getElementById("welcomeMessage");

    var words = "Welcome to my Portfolio";

    var initialDelay = 1000;

    var wordDelay = 100;

    setTimeout(function() {
      displayWords(0);
    }, initialDelay);

    function displayWords(index) {
      if (index < words.length) {
        welcomeMessage.append(words[index]);

        setTimeout(function() {
          displayWords(index + 1);
        }, wordDelay);
      }
    }
  });
const navItems = document.querySelectorAll('.dropdown__content li');

navItems.forEach(item => {
  item.style.transition = 'transform 0.3s ease-in-out'
  item.addEventListener('mouseover', () => {
    
    item.style.transform = 'scale(1.15)';
  });

  item.addEventListener('mouseout', () => {
    
    item.style.transform = 'scale(1)';
  });
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  openAlert();
    
    document.getElementById("myForm").reset();
});

function openAlert() {
  document.getElementById("customAlert").style.display = "block";
  document.getElementById("backdrop").style.display = "block";
}

function closeAlert() {
  document.getElementById("customAlert").style.display = "none";
  document.getElementById("backdrop").style.display = "none";
}