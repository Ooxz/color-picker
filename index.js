fetch("https://apis.scrimba.com/hexcolors/")
.then (response => response.json())
.then (data => console.log(data))