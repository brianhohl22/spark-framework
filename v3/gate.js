/* Preview-only access code for the GitHub Pages copy, same code and session key as v2.
   Not part of the site: leave this file and its <script> line out of the Finalsite build.
   It only discourages casual visitors; the page files themselves are public. */
(function () {
  var KEY = "spark_auth";
  var HASH = "99f23d6b45c872f7d3237de6121da6e4225b9da34960d9327b4d2e743100110e";
  var root = document.documentElement;
  try {
    if (sessionStorage.getItem(KEY) === "ok") return;
  } catch (e) { /* storage blocked: ask for the code each page */ }
  if (!(window.crypto && crypto.subtle && window.TextEncoder)) return;
  root.classList.add("gate-locked");

  function hex(buf) {
    return Array.prototype.map.call(new Uint8Array(buf), function (b) {
      return ("0" + b.toString(16)).slice(-2);
    }).join("");
  }

  document.addEventListener("DOMContentLoaded", function () {
    var form = document.createElement("form");
    form.className = "gate";
    form.innerHTML =
      '<h1 class="gate__title">SPARK site preview</h1>' +
      "<p>This is a private preview. Please enter the access code to continue.</p>" +
      '<label for="gate-code">Access code</label>' +
      '<input id="gate-code" type="password" autocomplete="off" required>' +
      '<button type="submit" class="button">Enter</button>' +
      '<p class="gate__error" id="gate-error" role="alert" hidden>That code did not work. Please try again.</p>' +
      "<p>If you received an invitation from the SPARK team, the access code is in that message. Otherwise, please contact the SPARK team.</p>";
    document.body.insertBefore(form, document.body.firstChild);
    var input = document.getElementById("gate-code");
    input.focus();
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      crypto.subtle.digest("SHA-256", new TextEncoder().encode(input.value)).then(function (buf) {
        if (hex(buf) === HASH) {
          try { sessionStorage.setItem(KEY, "ok"); } catch (e) { /* unlock this page only */ }
          root.classList.remove("gate-locked");
          form.parentNode.removeChild(form);
        } else {
          document.getElementById("gate-error").hidden = false;
          input.value = "";
          input.focus();
        }
      });
    });
  });
})();
