var crt = require('./create.js');
var $ = require('jquery');
require('../css/pageB.scss');

$('#wrap').append($(crt.createEle('p','PageB: Hello jvid')));
$('#p2').css('color','red');
// document.getElementById('wrap').appendChild(crt.createEle('p','PageB: Hello jvid'));

// document.getElementById('p2').style.color = 'red';