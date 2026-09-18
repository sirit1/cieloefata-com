(function () {
  var WHO = "(?:Dios|Jehov[aá]|el\\s+Se[nñ]or(?:\\s+Jes[uú]s)?|Jes[uú]s(?:\\s+Cristo)?|Cristo)";
  var VERB = "(?:dijo|dice|respondi[oó]|habl[oó]|clam[oó]|contest[oó])";
  var CLITIC = "(?:le|les|la|lo|me|nos|os)\\s+";
  var TAIL = "(?:\\s+(?:a|al|con|en)\\s+[^:.]{1,48})?";
  var SUBJ = new RegExp("^(.*?" + WHO + "\\s+(?:" + CLITIC + ")?" + VERB + TAIL + "\\s*[:.]\\s+)([\\s\\S]+)$", "i");
  var VERB_S = new RegExp("^(.*?" + VERB + "\\s+(?:" + CLITIC + ")?" + WHO + TAIL + "\\s*[:.]\\s+)([\\s\\S]+)$", "i");
  var AMEN = /^((?:.*?)(?:en\s+verdad,?\s+en\s+verdad|de\s+cierto,?\s+de\s+cierto)\s+(?:te|os)\s+digo[,:]?\s*)([\s\S]+)$/i;
  function esc(s) {
    return s.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
  }
  function mark(raw) {
    var t = raw.trim();
    var m = t.match(SUBJ) || t.match(VERB_S);
    if (m) return esc(m[1]) + '<span class="palabra-dios">' + esc(m[2]) + "</span>";
    m = t.match(AMEN);
    if (m) return '<span class="palabra-dios">' + esc(m[1] + m[2]) + "</span>";
    return esc(t);
  }
  function run() {
    document.querySelectorAll(".cite, blockquote, .scripture").forEach(function (el) {
      if (el.querySelector(".palabra-dios")) return;
      el.innerHTML = mark(el.textContent || "");
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
  else run();
})();
