window.onload = function () {
  document.getElementsByClassName('container-loader')[0].remove()
}

function sidecarSetup () {
  var sidecar = document.getElementById('sidecar')
  var trigger = document.getElementById('trigger-sidecar')
  var collapse = document.getElementById('collapse-sidecar')

  trigger.addEventListener('click', function () {
    var frame = document.createElement('iframe')
    frame.frameborder = '0'
    frame.src = 'https://e-reg.herokuapp.com/enantra?embed=true'
    sidecar.appendChild(frame)
    sidecar.classList.remove('is-collapsed')
    trigger.classList.add('is-collapsed')
  })

  collapse.addEventListener('click', function () {
    sidecar.removeChild(sidecar.lastChild)
    sidecar.classList.add('is-collapsed')
    trigger.classList.remove('is-collapsed')
  })
}

sidecarSetup()

var titleID = document.getElementById('content-title')
var bodyID = document.getElementById('content-body')
var mainContent = 'No festival is complete without a plethora of events for you to participate! Mov' +
    'e around the mouse to view details about various events'
// array of contents
var content = [
  'Coming soon\n',
  'Coming soon\n We\'ve got some good workshops planned for you guys!',
  'Influential speakers across India will share their knowledge on startups, entrep' +
      'reneurship and their personal struggles',
  'It is an arena in which aspiring entrepreneur-contestants make business presenta' +
      'tions to a panel of investors, who then choose whether or not to invest in that ' +
      'particular startup. Applications are received from all over India.',
  'Google\'s Startup Weekend comes to Enantra\n Google\'s famous Startup weekend comes to Enantra. Come, and create something that defines you!',
  'After a weekend long of work, it\'s time to relax with a night long show of Entre-tainment!\n'
]
// array of titles
var titles = [
  "<h4><i class='fa fa-ravelry' aria-hidden='true'></i></h4>",
  "<h4><i class='fa fa-snowflake-o' aria-hidden='true'></i></h4>",
  "<h4><i class='fa fa-bell' aria-hidden='true'></i></h4>",
  "<h4><i class='fa fa-rocket' aria-hidden='true'></i></h4>",
  "<h4><i class='fa fa-pie-chart' aria-hidden='true'></i></h4>",
  "<h4><i class='fa fa-inr' aria-hidden='true'></i></h4>"
]

// functions to change
function revokeChanges () {
  titleID.style.animation = 'flip .2s 0s'
  bodyID.style.animation = 'flip .2s 0s'
  // for unsupported
  titleID.style.WebkitAnimation = 'flip .2s 0s'
  bodyID.style.WebkitAnimation = 'flip .2s 0s'
  titleID.innerHTML = "<h4><i class='fa fa-superpowers' aria-hidden='true'></i></h4>"
  bodyID.innerHTML = mainContent
}
function makeChanges (i) {
  titleID.innerHTML = titles[i]
  bodyID.innerHTML = content[i]
  if (i === 0 || i === 1) {
    titleID.style.animation = 'slide-up 2s 0.2s'
    bodyID.style.animation = 'slide-up 2s 0.2s'
    // for unsupported browsers
    titleID.style.WebkitAnimation = 'slide-up 2s 0.2s'
    bodyID.style.WebkitAnimation = 'slide-up 2s 0.2s'
  } else if (i === 2) {
    titleID.style.animation = 'slide-left 1s 0.2s'
    bodyID.style.animation = 'slide-left 1s 0.2s'
    // for unsupported browsers
    titleID.style.WebkitAnimation = 'slide-left 1s 0.2s'
    bodyID.style.WebkitAnimation = 'slide-left 1s 0.2s'
  } else if (i === 3) {
    titleID.style.animation = 'slide-right 1s 0.2s'
    bodyID.style.animation = 'slide-right 1s 0.2s'
    // for unsupported browsers
    titleID.style.WebkitAnimation = 'slide-right 1s 0.2s'
    bodyID.style.WebkitAnimation = 'slide-right 1s 0.2s'
  } else if (i === 4 || i === 5) {
    titleID.style.animation = 'slide-down 2s 0.2s'
    bodyID.style.animation = 'slide-down 2s 0.2s'
    // for unsupported browsers
    titleID.style.WebkitAnimation = 'slide-down 2s 0.2s'
    bodyID.style.WebkitAnimation = 'slide-down 2s 0.2s'
  }
}

for (var i = 0; i < 6; i++) {
  var id = 'mi-' + (i + 1)
  var marker = document.getElementById(id)
  marker.onmouseover = (function (i) {
    return function () {
      makeChanges(i)
    }
  })(i)

  marker.onmouseout = revokeChanges
}

function checkTime (ts, te, now) {
  return (now >= numFromTime(ts) && now < numFromTime(te))
}

function makeSlot (slot, now) {
  var b = document.createElement('b')
  b.innerText = slot.display.h
  var h3 = document.createElement('h3')
  h3.appendChild(b)
  h3.appendChild(document.createTextNode(' ' + slot.display.m + slot.display.a))
  var desc = document.createElement('div')
  desc.innerHTML = slot.desc
  var small = document.createElement('small')
  small.innerHTML = slot.location
  var div = document.createElement('div')
  div.appendChild(small)
  var li = document.createElement('li')
  li.appendChild(h3)
  li.appendChild(desc)
  li.appendChild(div)
  li.classList.add('slot')
  return li
}

function updateCurrent (now, agenda) {
  var anchor = document.getElementsByClassName('current')[0]
  if (anchor) {
    anchor
      .classList
      .toggle('current')
  }
  var slots = document.getElementsByClassName('slot')
  for (var i = 0; i < slots.length; i++) {
    if (checkTime(agenda[i].range[0], agenda[i].range[1], now)) {
      slots[i]
        .classList
        .toggle('current')
    }
  }
}

function makeDay (now, day, index) {
  var ul = document.createElement('ul')
  day
    .agenda
    .forEach(function (agenda) {
      ul.appendChild(makeSlot(agenda, now))
    })
  var after = document.createElement('li')
  after
    .classList
    .add('box')
  after
    .classList
    .add('after-hours')
  after.innerText = 'No event scheduled at this point in time\nChange the day or time.'
  ul.appendChild(after)
  return ul
}

var schedule = [
  {
    date: 'Day 1 &mdash; Mon, Jan 19',
    agenda: [
      {
        range: [
          '16:30', '18:59'
        ],
        display: {
          h: 6,
          m: 30,
          a: 'pm'
        },
        location: 'Vivekananda Auditorium',
        desc: 'Inauguration'
      }
    ]
  },
  {
    date: 'Day 2 &mdash; Tue, Jan 20',
    agenda: [
      {
        range: [
          '10:00', '10:29'
        ],
        display: {
          h: 10,
          m: '00',
          a: 'am'
        },
        location: 'Auditorium - All day long',
        desc: 'Six Degree Talks'
      }, {
        range: [
          '10:30', '10:59'
        ],
        display: {
          h: 10,
          m: 30,
          a: 'am'
        },
        location: 'Auditorium - All day long',
        desc: 'Runway'
      }, {
        range: [
          '11:00', '17:59'
        ],
        display: {
          h: '11',
          m: '00',
          a: 'am'
        },
        location: 'The playground',
        desc: 'Startup expo and Job fair'
      }, {
        range: [
          '18:00', '23:59'
        ],
        display: {
          h: '06',
          m: '00',
          a: 'pm'
        },
        location: 'Will be updated soon',
        desc: 'Startup weekend'
      }
    ]
  },
  {
    date: 'Day 3 &mdash; Sat, Jan 21',
    agenda: [
      {
        range: [
          '10:00', '10:29'
        ],
        display: {
          h: 10,
          m: '00',
          a: 'am'
        },
        location: 'Auditorium - All day long',
        desc: 'Six Degree Talks'
      }, {
        range: [
          '10:30', '10:59'
        ],
        display: {
          h: 10,
          m: 30,
          a: 'am'
        },
        location: 'Auditorium - All day long',
        desc: 'Runway'
      }, {
        range: [
          '11:00', '17:59'
        ],
        display: {
          h: '11',
          m: '00',
          a: 'am'
        },
        location: 'The playground',
        desc: 'Startup expo and Job fair'
      }
    ]
  },
  {
    date: 'Day 4 &mdash; Sun, Jan 22',
    agenda: [
      {
        range: [
          '10:00', '13:59'
        ],
        display: {
          h: 10,
          m: '00',
          a: 'am'
        },
        location: 'Auditorium - All day long',
        desc: 'Six Degree Talks'
      }, {
        range: [
          '14:00', '16:59'
        ],
        display: {
          h: '02',
          m: '00',
          a: 'pm'
        },
        location: 'Will be updated soon',
        desc: 'Startup Demo'
      }, {
        range: [
          '17:00', '18:29'
        ],
        display: {
          h: '05',
          m: '00',
          a: 'pm'
        },
        location: 'Will be updated soon',
        desc: 'Final pitch - Startup weekend'
      }, {
        range: [
          '18:30', '22:30'
        ],
        display: {
          h: '06',
          m: '30',
          a: 'pm'
        },
        location: 'Will be updated soon',
        desc: 'Entre-tainment'
      }
    ]
  }

]

function timeFromNum (num, sep, ampm) {
  var hh = parseInt(num)
  var mm = Math.round((num - hh) * 60)
  sep = sep || ''
  return (hh > 12 && ampm
    ? hh - 12
    : hh) + sep + ('00' + mm).substr(-2) + (ampm
    ? (hh > 11
      ? ' pm'
      : ' am')
    : '')
}

function numFromTime (time) {
  var set = time.split(/[.:]/)
  var hh = parseInt(set[0])
  var mm = set[1]
    ? parseInt(set[1])
    : 0
  return parseFloat((hh + mm / 60).toFixed(1))
}

function setClockPos () {
  setTimeout(function () {
    var anchor = document.getElementsByClassName('current')[0]
    var t = (anchor)
      ? Math.round(anchor.getBoundingClientRect().top) + 'px'
      : '1em'
    document
      .documentElement
      .style
      .setProperty('--y', t)
  }, 350)
}

var now = moment()
var currentDay = 0
var f = makeDay(numFromTime(moment(now).format('HH:mm')), schedule[0], 0)

var main = document.getElementById('schedule')
main.appendChild(f)

var timeTraveler
var traveler = document.getElementById('traveler')
var header = document.getElementById('day')
var time = document.getElementById('time')

function changeSchedule (day) {
  var w = makeDay(numFromTime(moment(now).format('HH:mm')), schedule[day], 0)
  main.removeChild(main.lastChild)
  main.appendChild(w)
}

document.getElementById('day1').addEventListener('click', function () {
  currentDay = 0
  changeSchedule(0)
  setTime(0)
  runTimer()
})

document.getElementById('day2').addEventListener('click', function () {
  currentDay = 1
  changeSchedule(1)
  setTime(1)
  runTimer()
})

document.getElementById('day3').addEventListener('click', function () {
  currentDay = 2
  changeSchedule(2)
  setTime(2)
  runTimer()
})

document.getElementById('day4').addEventListener('click', function () {
  currentDay = 3
  changeSchedule(3)
  setTime(3)
  runTimer()
})

function setTime (day) {
  var now = moment()
  var value = numFromTime(moment(now).format('HH:mm'))
  traveler.value = value
  header.innerHTML = schedule[day].date
  updateCurrent(value, schedule[day].agenda)
  time.innerText = moment(now).format('h:mm a')
}

function runTimer () {
  setClockPos()
  timeTraveler = setInterval(function() { setTime(currentDay) }, 30000)
}

setTime(0)
runTimer()

traveler
  .addEventListener('input', function (e) {
    console.log(e.target.value)
    time.innerText = timeFromNum(e.target.value, ':', true)
    updateCurrent(e.target.value, schedule[currentDay].agenda)
    setClockPos()
    clearInterval(timeTraveler)
  }, false)

// resize capture
var resizeTimer
window.addEventListener('resize', function (e) {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(setClockPos, 60)
}, false)

// var xmlns = 'http://www.w3.org/2000/svg'
// function makeNSElement (tag, attrs) {
//   return modifyElement(document.createElementNS(xmlns, tag), attrs)
// }

// function modifyElement (ele, attrs) {
//   for (var k in attrs) {
//     ele.setAttribute(k, attrs[k])
//   }
//   return ele
// }

// var points = [
//   '0,0 0.3,0 0,0.3',
//   '0.6,0 1,0 1,0.3',
//   '0.8,0.8 1,0.7 1,1',
//   '0.5,0.7 1,0.7 0.8,0.8',
//   '0.5,0.7 1,1 0.8,0.8',
//   '0.5,0.7 0.3,1 0.5,1',
//   '0.5,0.7 0.5,1 0.8,1',
//   '0.5,0.7 0.8,1 1,1',
//   '0.8,0.6 1,0.3 1,0.7',
//   '0,0.5 0.3,0.5 0,0.8',
//   '0,0.3 0.3,0.5 0,0.5',
//   '0,0.3 0.3,0.5 0.2,0.4',
//   '0,0.3 0.3,0 0.2,0.4',
//   '0.6,0 0.5,0.3 1,0.3',
//   '0.3,0.5 0.5,0.3 0.6,0.4',
//   '0.5,0.3 1,0.3 0.6,0.4',
//   '0.5,0.7 0.3,0.5 0.6,0.4',
//   '0.2,0.4 0.5,0.3 0.3,0.5',
//   '0.3,0 0.2,0.4 0.5,0.3',
//   '0.3,0 0.6,0 0.5,0.3',
//   '0.3,0.5 0.5,0.7 0.3,1',
//   '0,0.8 0.3,0.5 0.1,0.9',
//   '0.1,0.7 0.3,0.5 0.3,1',
//   '0,0.8 0.1,0.9 0,1',
//   '0,1 0.1,0.9 0.3,1',
//   '0.3,1 0.1,0.9 0.3,0.5',
//   '0.6,0.4 0.8,0.6 0.5,0.7',
//   '0.6,0.4 0.8,0.6 1,0.3',
//   '0.5,0.7 1,0.3 1,0.7'
// ]

// var card = document.getElementById('card')
// points = points.map(function (point) {
//   return makeNSElement('polygon', {points: point})
// })

// var rep var t = 0 var btn = document.getElementById('mi-3') btn.onclick =
// function () {   rep = setInterval(function () {     if (t === points.length)
// {       clearInterval(rep)     } else {       card.appendChild(points[t++]) }
//   }, 100) } var handler =
// onVisibilityChange(document.getElementsByClassName('speaker-list')[0],
// function () {   console.log('event fired')   rep = setInterval(function () {
// if (t === points.length) {       clearInterval(rep)     } else {
// card.appendChild(points[t++])     }   }, 100) }) if (window.addEventListener)
// {   window.addEventListener('scroll', handler, false) } else if
// (window.attachEvent) {   window.attachEvent('onscroll', handler) }
