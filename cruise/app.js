(function () {
  var KEY = "getaway-shorex-v1";
  var boxes = Array.prototype.slice.call(document.querySelectorAll('input[type="checkbox"]'));
  var countEl = document.getElementById("count");
  var totalEl = document.getElementById("total");

  function money(n) {
    return "$" + n.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function picked() {
    return boxes.filter(function (b) { return b.checked; });
  }

  function save() {
    try {
      localStorage.setItem(KEY, JSON.stringify(picked().map(function (b) { return b.id; })));
    } catch (e) { /* storage unavailable; the page still works */ }
  }

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return;
      var on = JSON.parse(raw);
      if (!Array.isArray(on)) return;
      boxes.forEach(function (b) { b.checked = on.indexOf(b.id) !== -1; });
    } catch (e) { /* nothing stored, or storage blocked */ }
  }

  function render() {
    var p = picked();
    var sum = p.reduce(function (t, b) { return t + parseFloat(b.dataset.price); }, 0);
    if (!p.length) {
      countEl.textContent = "Nothing selected yet";
      totalEl.textContent = "59 excursions across two ports";
    } else {
      countEl.textContent = p.length === 1 ? "1 excursion selected" : p.length + " excursions selected";
      totalEl.textContent = "Listed prices add up to " + money(sum) + " per adult";
    }
  }

  function listText() {
    var p = picked();
    var lines = ["Selected shore excursions", "Norwegian Getaway, 14-18 September 2026", ""];
    if (!p.length) {
      lines.push("Nothing selected yet.");
      return lines.join("\n");
    }
    ["Great Stirrup Cay", "Nassau"].forEach(function (port) {
      var inPort = p.filter(function (b) { return b.dataset.port === port; });
      if (!inPort.length) return;
      lines.push(port);
      lines.push(new Array(port.length + 1).join("-"));
      inPort.forEach(function (b) {
        lines.push("- " + b.dataset.name);
        lines.push("  " + b.dataset.dur + ", $" + parseFloat(b.dataset.price).toFixed(2) + " per adult");
      });
      lines.push("");
    });
    var sum = p.reduce(function (t, b) { return t + parseFloat(b.dataset.price); }, 0);
    lines.push("Total of listed prices: " + money(sum) + " per adult");
    lines.push("");
    lines.push("Prices as published by Norwegian on 23 August 2026. Nothing here is booked.");
    return lines.join("\n");
  }

  boxes.forEach(function (b) {
    b.addEventListener("change", function () { save(); render(); });
  });

  document.getElementById("clear").addEventListener("click", function () {
    boxes.forEach(function (b) { b.checked = false; });
    save();
    render();
  });

  document.getElementById("dl").addEventListener("click", function () {
    var blob = new Blob([listText()], { type: "text/plain;charset=utf-8" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "shore-excursion-picks.txt";
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); a.remove(); }, 2000);
  });

  load();
  render();
})();
