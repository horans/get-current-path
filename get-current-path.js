/****************************************************
*  project: get current path                        *
*  description: main script                         *
*  author: horans@gmail.com                         *
*  url: github.com/horans/get-current-path          *
*  update: 180903                                   *
****************************************************/
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "gcp" }] */
function gcp (name) {
  var cs = document.currentScript
  var cl
  if (cs) {
    cl = cs.src
  } else {
    var ss = document.querySelectorAll('script[src' + (name ? ('*="' + name + '"') : '') + ']')
    cs = ss[ss.length - 1]
    cl = cs.getAttribute.length === undefined ? cs.getAttribute('src', -1) : cs.src
  }
  return cl.substring(0, cl.lastIndexOf('/') + 1)
}
