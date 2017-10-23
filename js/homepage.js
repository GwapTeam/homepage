/*
 Homepage JS
 */
if (window.scrollY) {
  scroll(0, 0);
}

///////////////////////////////////
// Page ID Anchor
///////////////////////////////////
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
};

function pageAnchorScroll() {

  let scrollTo = (to) => {
    let currentTop = window.pageYOffset;
  
    // http://d.hatena.ne.jp/nakamura001/20111117/1321539246

    (function easeScroll(count, i) {
      i += 1;
      if (Math.round(currentTop / 10) == Math.round(to / 10)) return;
      if (i < count) {
        window.scroll(0, easeInOutQuad(i / 100, currentTop, to - currentTop, 1));
        setTimeout(
          function () {
            easeScroll(count, i)
          },
          1
        );
      }
    })(100, 0);
  }

  let anchor = Array.from(document.getElementsByTagName("a"));
  anchor.filter(x => x.hash)
    .map(x=> {
      let element = document.getElementById(x.hash.replace(/#/g, ""))
      if (element) {
          let destinationRect = element.getBoundingClientRect();
          x.addEventListener(
            "click", y => {
              y.preventDefault();
              scrollTo( destinationRect.top - 80);
            }
          )
      }
  })
}
window.addEventListener("load", pageAnchorScroll, false);
