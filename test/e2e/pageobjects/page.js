function Page() {}

Page.prototype.open = function(path) {
  $.url('/' + path)
}

module.exports = new Page();
