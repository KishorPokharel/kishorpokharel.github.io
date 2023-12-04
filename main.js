const scrollRate = 60;

this.window.addEventListener("keydown", (e) => {
  if (e.key === "k") {
    this.window.scrollBy(0, -scrollRate);
  }
  if (e.key === "j") {
    this.window.scrollBy(0, scrollRate);
  }
  if (e.key === "g") {
    this.window.scrollTo(0, 0);
  }
  if (e.key === "G") {
    this.window.scrollTo(0, document.body.scrollHeight);
  }
});
