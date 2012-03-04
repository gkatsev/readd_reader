// ==UserScript==
// @name           readd_reader
// @namespace      tag:gkatsev.com,2012-01-03:readd_reader
// @description    Readd google reader link to google header
// @include        http://*.google.com/*
// @version        0.1
// ==/UserScript==

(function(){
  var spanb2 = document.createElement('span')
    , spants = document.createElement('span')
    , anchor = document.createElement('a')
    , li = document.createElement('li')
    , reader = document.querySelector('#gb_32')
    , more = document.querySelector('#gbztm')
    , moreLI = more.parentNode
    , ol = more.parentNode.parentNode



  spanb2.classList.add('gbtb2')
  spants.classList.add('gbts')
  spants.innerHTML = 'Reader'

  anchor.classList.add('gbzt')
  anchor.id='gb_32'
  anchor.href='//www.google.com/reader/?hl=en&tab=wy'
  anchor.onclick = function(){ gbar.logger.il(1,{t:32}); }
  anchor.onmouseover = function(){ anchor.classList.add('gbzt-hvr') }
  anchor.onmouseout = function(){ anchor.classList.remove('gbzt-hvr') }

  anchor.appendChild(spanb2)
  anchor.appendChild(spants)

  li.classList.add('gbt')
  li.appendChild(anchor)

  reader.parentNode.removeChild(reader)

  ol.insertBefore(li, moreLI)

  if(/.*google\.com\/reader.*/.test(location)){
    anchor.classList.add('gbz0l')
    anchor.classList.add('gbp1')
  }
})()
