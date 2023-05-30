// Het img element wordt geselecteerd.
// En het src attribuut wordt aangepast.
const photoEl = document.querySelector('div.profile-photo img');
photoEl.src = 'img/baldcat.png';

// Het h3 element met de klasse name wordt geselecteerd.
// En de innerlijke html wordt aangepast.
const nameEl = document.querySelector('h3.name');
nameEl.innerHTML = 'Tom Roolfs';


const birthdayEl = document.querySelector('span.birthday');
birthdayEl.innerHTML = '22-03-2004';

const emailEl = document.querySelector('span.email');
emailEl.innerHTML = 'tomwillem04@gmail.com';

const profileEl = document.querySelector('p.profile');
profileEl.innerHTML = 'Ik ben Tom Roolfs, ik ben 18 jaar oud en ik doe software development op het MBO Utrecht.';

const educationArr = [
   
   { 'title': 'Basis school',
     'duration': '8 jaar',
     'school': 'OBS Vleuterweide',
     'description': 'Normale openbare basisschool'
    },

    { 'title': 'Middelbare school',
    'duration': '5 jaar',
    'school': 'Minkema College',
    'description': 'Minkema college Woerden'
   },

   { 'title': 'MBO Software development',
   'duration': '2 jaar',
   'school': 'MBO Utrecht',
   'description': 'MBO Utrecht opleiding software development. 2e jaar van de 3 jaar.'
  }
]

const educationListEl = document.querySelector('div.education ul');

educationArr.forEach((education) => {

let newItem = document.createElement('li');

let innerHTML = '<h4>'+education.title+'</h4>';
    innerHTML += '<span class="duration">'+education.duration+'</span>';
    innerHTML += '<span class="school">'+education.school+'</span>';
    innerHTML += '<p>'+education.description+'</p>';

newItem.innerHTML = innerHTML;

educationListEl.appendChild(newItem);

});

const jobsArr = [
   
    { 'title': 'Gamma',
      'duration': '1 jaar',
      'business': 'Vulploeg medewerker',
      'description': 'Winkel bijvullen etc.'
     },
 
     { 'title': 'Kfc',
     'duration': '1 jaar',
     'business': 'Kfc medewerker',
     'description': 'Van alles en nog wat'
    },
 
    { 'title': 'Geertjes hoeve',
    'duration': 'half jaar',
    'business': 'Uitloop en bar',
    'description': 'Eten uitlopen en achter de bar staan'
   }
 ]
 
 const jobsListEl = document.querySelector('div.jobs ul');
 
 jobsArr.forEach((jobs) => {
 
 let newItem = document.createElement('li');
 
 let innerHTML = '<h4>'+jobs.title+'</h4>';
     innerHTML += '<span class="duration">'+jobs.duration+'</span>';
     innerHTML += '<span class="business">'+jobs.business+'</span>';
     innerHTML += '<p>'+jobs.description+'</p>';
 
 newItem.innerHTML = innerHTML;
 
 jobsListEl.appendChild(newItem);
 
 });