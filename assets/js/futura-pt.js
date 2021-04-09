/*
Copyright (c) 2016 Keitaro AB

Use of this source code is governed by an MIT license
that can be found in the LICENSE file or at
https://opensource.org/licenses/MIT.
*/

(function (d) {
  var config = {
    kitId: 'eaz5jri',
    scriptTimeout: 3000,
    async: true
  },
          h = d.documentElement, t = setTimeout(function () {
            h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
          }, config.scriptTimeout), tk = d.createElement("script"), f = false, s = d.getElementsByTagName("script")[0], a;
  h.className += " wf-loading";
  tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  tk.async = true;
  tk.onload = tk.onreadystatechange = function () {
    a = this.readyState;
    if (f || a && a != "complete" && a != "loaded")
      return;
    f = true;
    clearTimeout(t);
    try {
      Typekit.load(config)
    } catch (e) {
    }
  };
  s.parentNode.insertBefore(tk, s);
})(document);