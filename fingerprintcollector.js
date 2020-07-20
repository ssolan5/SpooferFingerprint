 (function() {  

                //$('<div id="fonts_utf_testbox"></div>').appendTo("body");
                element = document.createElement('div');
                element.setAttribute("id", "fonts_utf_testbox");
                document.body.appendChild(document.getElementById("fonts_utf_testbox"));

                var M = ["default", "sans-serif", "serif", "monospace", "cursive", "fantasy"]
              , B = [8377, 9601, 8378, 42813, 65533, 8376, 1478, 7838, 2431, 61443, 7386, 6109, 9134, 3330, 2946, 4442, 9253, 12334, 43056, 11014, 8676, 8381, 11387, 8368, 64494, 63504, 65535, 127, 4256, 120720, 1792, 6480, 12437, 21293, 1564, 8419, 65529, 536, 1423, 2276, 2483, 7248, 9753];
                function P(o) {

                return ("00000000" + o.toString(16)).slice(-8)
            }
            function p(o) {
                for (var i = o.toString(16).toUpperCase(); i.length < 4; )
                    i = "0" + i;
                return "U+" + i
            }
            function g(o, i) {
                return (69069 * o + i) % 4294967296
            }
            for (var o = document.getElementById("fonts_utf_testbox"), k = {}, y = {}, i = 0; i < M.length; i++) {
                var a = M[i]
                  , e = document.createElement("div")
                  , n = document.createElement("span");
                e.id = "div_" + a,
                n.id = "span_" + a,
                "default" !== a && (n.style.fontFamily = a),
                n.textContent = "A",
                o.appendChild(e),
                e.appendChild(n),
                k[a] = e,
                y[a] = n
            }
                var o, i, a, e, n, t = 0, r = [];
                for (o = 0; o < B.length; o++) {

                    var l = B[o]
                      , s = (n = l) <= 65535 ? String.fromCharCode(n) : (n -= 65536,
                    String.fromCharCode(55296 + (n >> 10), 56320 + n % 1024))
                      , d = [p(l)];
                    for (i = 0; i < M.length; i++) {
                        var c = k[a = M[i]];
                        (e = y[a]).textContent = s;

                        var S = e.offsetWidth
                          , u = c.offsetHeight;
                        t = g(t, S),
                        t = g(t, u);
                        var h = S + "," + u;
                        h.length < 4 && (h += "\t"),
                        h.length < 8 && (h += "\t"),
                        d.push(h)
                    }

                    r.push(d.join("\t"))
                }

                //console.log(r);
                for (i = 0; i < M.length; i++)
                    (e = y[a = M[i]]).textContent = "";

                var m = P(t);

                console.log(m);

                //$("#fonts_utf_fp").addClass("wball mono upper").html(m),
                //$("#fonts_utf_report .n").removeClass("n").prepend(ico(1)),
                //$("#fonts_utf_report .unknown").addClass("n");
                var C = window.navigator.userAgent;
                65 < C.length && (C = C.substring(0, 60) + "\n" + C.substring(60)),
                C = C || "";
                var f = new Date
                  , T = ["Checksum: 1-" + P(t), "Date: " + f.toLocaleString(), "User-Agent: " + C];
                console.log("glyph\tdefault\t\tsans-serif\tserif\t\tmonospace\tcursive\t\tfantasy\n\n" + r.concat([""]).concat(T).join("\n"));

})();

