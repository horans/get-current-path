/****************************************************
*  project: get current path                        *
*  description: main script                         *
*  author: horans@gmail.com                         *
*  url: github.com/horans/get-current-path          *
*  update: 180831                                   *
****************************************************/
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "gcp" }] */
function gcp () {
  var cs = document.currentScript
  var cl
  if (cs) {
    cl = cs.src
  } else {
    var ss = document.getElementsByTagName('script')
    cs = ss[ss.length - 1]
    cl = cs.getAttribute.length !== undefined ? cs.src : cs.getAttribute('src', -1)
  }
  return cl.substring(0, cl.lastIndexOf('/') + 1)
}
