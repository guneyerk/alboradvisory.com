(function () {
  var copy = document.getElementById("copy"), note = document.getElementById("copy-note"), addr = document.getElementById("addr");
  if (!copy || !addr) return;
  function selectAddr() { var r = document.createRange(); r.selectNodeContents(addr); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
  copy.addEventListener("click", function () {
    var text = addr.textContent.trim();
    var done = function () { note.textContent = "Copied to your clipboard."; };
    var fallback = function () { selectAddr(); note.textContent = "Address selected. Press Ctrl+C or ⌘C to copy."; };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback);
      else fallback();
    } catch (e) { fallback(); }
  });
})();
