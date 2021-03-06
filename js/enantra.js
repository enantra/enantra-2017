window.onload = function () {
  var sidecar = document.getElementById('sidecar')
  var trigger = document.getElementById('trigger-sidecar')
  var collapse = document.getElementById('collapse-sidecar')
  trigger.addEventListener('click', function () {
    var frame = document.createElement('iframe')
    frame.frameborder = '0'
    frame.src = 'https://register.enantra.org/enantra?embed=true'
    sidecar.appendChild(frame)
    sidecar.classList.remove('is-collapsed')
    trigger.classList.add('is-collapsed')
  })
  collapse.addEventListener('click', function () {
    sidecar.removeChild(sidecar.lastChild)
    sidecar.classList.add('is-collapsed')
    trigger.classList.remove('is-collapsed')
  })


  var miniEvents = {
    'strategy': {
      'pop-title': 'Strategy master',
      'content': {
        'description': 'An event that focuses on the financial areas of a business. It is formed to analyze and develop the skills of an entrepreneur to handle and tackle money in terms of a financial crisis.',
        'format': [
          'Round 1 : Each team will be given a budget for a financial situation for which they have to create a business model. They will be given time to create their model and present it in front of the judges.',
          'Round 2: The company for which they built the model is bankrupt. The teams have to come up with various ideas to sustain the company. Teams are given 40 minutes time to discuss and prepare. The teams can present their ideas in the form of a skit, mind maps, etc. Each team has to explain how their idea will pull the company out of bankruptcy. Realistic approach is appreciated. Each team will be judged based on various criteria and the best will be awarded.'
        ],
        'rules': [
          'Group participation',
          'Each team may consist of 8-10 members',
          'Teams will be given 50 minutes for the 1st round and 40 minutes for the 2nd round.',
          'Google search is allowed',
          'Vulgarity &amp obscenity would lead to disqualification.',
          'College ID cards and enantra registration ID must be in possession of each of participants during the event.',
          'Teams will be judged based on relevance, creativity, probability of occurrence,time management and budget allocation.',
          'No negative marking',
          'Performance time: 5-10 minutes(including Q&A session)',
          'Violation of rules may lead to disqualification'
        ],
        'contacts': [
          'Bala Abirami +919489531936',
          'Vishnupriya +919790709266'
        ]
      }
    },
    'idol': {
      'pop-title': 'E! Idol',
      'content': {
        'description': 'A first of a kind event that pulls out the entrepreneurship skills and measures the capacity to be a sole proprietor.',
        'format': [
          'Round 1: Firstly, the participant has to introduce themselves and describe their likes and dislikes in the best possible way.',
          'Round 2: The second round is block and tackle which tests one’s spontaneity and quick thinking.',
          'Round 3: The participant has to create and describe the details of a company they own. Participants have to impress the judge and the best ones will be selected for the final round.',
          'Round 4: The final round is a surprise round.'
        ],
        'rules': [
          'Individual participation ',
          'Preparation Time: 1st round - 10 minutes, 3rd round - 15 minutes',
          'Performance time: 1st round - 3 minutes, 2nd round - 5 minutes, 3rd round - 5 - 7 minutes',
          'Phone/internet usage is not allowed',
          'Vulgarity & obscenity would lead to disqualification.',
          'College ID cards and enantra registration ID must be in possession of each of participants during the event.',
          'Participants will be judged on various criteria like relevance, creativity, presentation, etc.',
          'No negative marking',
          'Violation of rules may lead to disqualification.',
          'Malpractice is not encouraged.',
          'Judges decision will be final.'
        ],
        'contacts': [
          'Bala Abirami +919489531936',
          'Vishnupriya +919790709266'
        ]
      }
    },
    'marathon': {
      'pop-title': 'Marketing Marathon',
      'content': {
        'description': 'An event in which participants get to advertise products and showcase their skills.',
        'format': [
          'Pre-requisite round (Ad-Selfie): Each team has to take selfies with a product they would like to endorse with a catchy and captivating tagline. The selfie with maximum number of likes gets direct entry to the 2nd round.',
          'Round 1 (News Analysis): In the 1st round, each team will be provided with a news article. The team has to analyse the article in 30 seconds and present their views and opinions on it for 2 minutes infront of the judges. Questions can be raised by the judges. The team with the most relevant and clear presentation gets selected for the next round.',
          'Round 2(Adzap): Each team will be provided with an innovative product and they have to prepare and enact a 1-minute ad film. Preparation time is 10 minutes. The best teams chosen by the judges will be qualified for the next round.',
          'Round 3 (Campaign for a Cause): In the final round, the teams have to campaign for a cause (for the society, environment, etc) and collect money. Teams can go around Chennai pitching and they are requested to assemble in CEG at 1.30 sharp.'
        ],
        'rules': [
          'For pre requisite round, teams have to register before January 7th, 2017.',
          'Group/individual participation.',
          'College ID cards and enantra registration ID must be in possession of each of participants during the event.',
          'Teams may consist 4-7 members.',
          'Elimination is present after every round',
          'Performance time: 1st round - 2 minutes, 2nd round- 1 minute',
          'Preparation time: 2nd round - 10 minutes',
          'Phone/internet usage is strictly restricted during the game.',
          'Vulgarity & obscenity would lead to disqualification.',
          'Violation of rules or indulging in malpractices may lead to disqualification.',
          'Teams will be judged based on creativity, innovative thinking, performance, presentation, relevance to the given product.',
          'Judges decision will be final.'
        ],
        'contacts': [
          'Bala Abirami +919489531936',
          'Vishnupriya +919790709266'
        ]
      }
    },
    'grandmaster': {
      'pop-title': 'Grandmaster',
      'content': {
        'description': 'An interesting event that puts your knowledge to test. Questions will be thrown by the participant for which the answers will be a mere yes or no. Lucky winners are the smart ones who finds the personality in the grandmaster’s mind.',
        'format': [
          'One of the Enantra member will be questioned by participants. Every participant gets 30 minutes time. The participant has to find a personality the organizer is thinking of within 21 questions. The 21 questions should be framed in such a way that the answer will be a yes or no. The participant who guesses it right within minimum time will be awarded. If the game exceeds the time limit, then the participant is disqualified. The identity to be found changes regardless of each game’s status.'
        ],
        'rules': [
          'Individual participation',
          'College ID cards and Enantra ID must be in possession of each of participants during the event',
          'Entities are companies & Personalities are entrepreneurs',
          'Only 21 questions are allowed for round 1 and 15 questions for round 2',
          'Organizer will give either a yes or a no as an answer',
          'Violation of rules leads to disqualification',
          'Phones/internet usage is strictly prohibited during the game',
          'In case of suspicion of malpractices, participant will be disqualified on spot',
          'Judges decision will be final'
        ],
        'contacts': [
          'Bala Abirami +919489531936',
          'Vishnupriya +919790709266'
        ]
      }
    },
    'quiz': {
      'pop-title': 'Quiz',
      'content': {
        'description': 'A quiz based on business and entrepreneurs. An event that puts one’s general knowledge to test.',
        'format': [
          'Round 1: The 1st round will be a paper-pen quiz. Participants will be given a questionnaire which needs to be solved in 30 minutes. Selected participants will be qualified for the next round.',
          'Round 2: The 2nd level is a buzzer round. Buzzer round is for 20 minutes. The team with maximum points wins.'
        ],
        'rules': [
          'Group/Individual participation',
          'Teams may consist of 2-3 members each.',
          'College ID cards and Enantra ID must be in possession of each of participants during the event',
          'Buzzer round is for 20 minutes ',
          'Buzzer round has negative marking ',
          'Phones are not allowed',
          'Usage of internet is restricted',
          'No negative marking',
          'Minimum of 3 teams will be qualified for finals',
          'Teams that are suspected of malpractices will be disqualified on spot',
          'Violation of rules may lead to disqualification'
        ],
        'contacts': [
          'Bala Abirami +919489531936',
          'Vishnupriya +919790709266'
        ]
      }
    },
    'spin': {
      'pop-title': 'Spin the wheel',
      'content': {
        'description': 'It’s a fun event. The game has a spinning wheel.  Every sector on the wheel has a prize and a task stuck to it.  The participant has to spin it and do the task to win the prize.',
        'format': [
          'The spinning wheel can be spun only once. The task associated can be an enactment of a situation, product marketing, etc. If re-spin occurs, the participant gets to spin the wheel one more time.'
        ],
        'rules': [
          'Individual/team participation',
          'Each team may consist of 2-3 members',
          'Participant performance needs to be relevant to the task',
          'They will be judged on the basis of creative thinking, time management, relevance to the given task',
          'Prize will not be given if the performance is not relevant ',
          'Preparation time: 5 minutes ',
          'Performance time: 2-3 minutes ',
          'College ID cards and Enantra ID must be in possession of each of participants during the event',
          'Phone usage is not allowed',
          'Violation of rules may lead to disqualification ',
          'Prizes can be seized in case of malpractices ',
          'Organizer decision will be final'
        ],
        'contacts': [
          'Bala Abirami +919489531936',
          'Vishnupriya +919790709266'
        ]
      }
    }
  }

  Object.keys(miniEvents).forEach(function (miniEvent) {
    var content = miniEvents[miniEvent].content
    var description = document.createElement('section')
    var descriptionTitle = '<h2>Description</h2>'
    description.innerHTML = descriptionTitle + content.description

    var format = document.createElement('section')
    var formatTitle = document.createElement('h2')
    formatTitle.innerText = 'Format'
    format.appendChild(formatTitle)

    content.format.forEach(function (text) {
      var p = document.createElement('p')
      p.innerText = text
      format.appendChild(p)
    })

    var rules = document.createElement('section')
    var rulesTitle = document.createElement('h2')
    rulesTitle.innerText = 'Rules'
    rules.appendChild(rulesTitle)

    var ul = content.rules.reduce(function (ul, text) {
      var li = document.createElement('li')
      li.innerText = text
      ul.appendChild(li)
      return ul
    }, document.createElement('ul'))
    ul.classList.add('rules')

    rules.appendChild(ul)

    var contacts = document.createElement('section')
    var contactTitle = '<h2>Contact</h2>'

    var str = content.contacts.reduce(function (ul, text) {
      ul += (text + '<br/>')
      return ul
    }, '')

    contacts.innerHTML = contactTitle + str

    var div = document.createElement('div')
    div.appendChild(description)
    div.appendChild(format)
    div.appendChild(rules)
    div.appendChild(contacts)
    miniEvents[miniEvent].content = div.innerHTML
  })

  var popups = [].slice.call(document.getElementsByClassName('js-popup'))
  var fillTitle = document.getElementById('js-fill-title')
  var fillBox = document.getElementById('js-fill-box')

  popups.forEach(function (popup) {
    popup.addEventListener('click', function () {
      var currentEvent = miniEvents[popup.getAttribute('data-event')]
      fillTitle.innerHTML = currentEvent['pop-title']
      fillBox.innerHTML = currentEvent.content
    })
  })
}