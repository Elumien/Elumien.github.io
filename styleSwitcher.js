function switchStyles(size) {
  document.body.className = size;
}

document.addEventListener('DOMContentLoaded', function() {
  var styleSwitcher = document.getElementById("styleSwitcher");
  if (styleSwitcher) {
    styleSwitcher.addEventListener('change', function() {
      switchStyles(this.value);
    });
  }
});