let submit = document.getElementById('submit');

submit.onclick = function () {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let tip = document.getElementsByClassName('tip');
  if (username.value == 'wz' && password.value == '123') {
    tip[1].style.display = 'none';

  }
  else {
    tip[1].style.display = 'block';
  }
};