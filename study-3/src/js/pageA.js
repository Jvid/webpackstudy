var crt = require('./create.js');
var $ = require('jquery');
require('../css/pageA.scss')

$('#wrap').append($(crt.createEle(undefined,"PageA: Hello Jingduo")));
// document.getElementById('wrap').appendChild(crt.createEle('h1',"PageA: Hello Jingduo"));