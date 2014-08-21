if (typeof String.prototype.startsWith != 'function') {
  // see below for better implementation!
  String.prototype.startsWith = function(str) {
    return this.indexOf(str) === 0;
  };
}
var BeautifyCommits = {
  process: function _process() {
    var jsContent = document.getElementById("commit-input-content").value;
    document.getElementById("commit-output").innerHTML = "";
    this.separate(jsContent);
  },
  separate: function _sep(text) {
    var commitArray = text.split("\n");
    var classname;
    for (var i = 0, j = commitArray.length; i < j; i++) {

      if (commitArray[i].startsWith("-")) {
        classname = "removed";
      } else if (commitArray[i].startsWith("+")) {
        classname = "added";
      } else if ((commitArray[i].startsWith("#")) || (commitArray[i].startsWith("@")) || (commitArray[i].startsWith("diff"))) {
        classname = "info";
        if (commitArray[i].startsWith("diff")) {
          classname += " bold";
        }
      } else {
        classname = "none";
      }
      document.getElementById("commit-output").innerHTML += "<div id='line' class='" + classname + "'><code>" + commitArray[i] + "</code></div>";
    }
  }

};
