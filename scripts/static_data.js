let subjects = [
  {
    title: "জীববিজ্ঞান ১",
    value: "bio1",
    chapters: ['কোষ ও এর গঠন', 'কোষ বিভাজন', 'কোষ রসায়ন', 'অণুজীব', 'শৈবাল ও ছত্রাক', 'ব্রায়োফাইটা ও টেরিডোফাইটা', 'নগ্নবীজী ও আবৃতবীজী উদ্ভিদ', 'টিস্যু ও টিস্যু তন্ত্র', 'উদ্ভিদ শারীরতত্ত্ব', 'উদ্ভিদ প্রজনন', 'জীব প্রযুক্তি', 'জীবের পরিবেশ, বিস্তার ও সংরক্ষণ']
  },
  {
    title: "জীববিজ্ঞান ২",
    value: "bio2",
    chapters: ['প্রাণির বিভিন্নতা ও শ্রেণিবিন্যাস', 'প্রাণির পরিচিতি', 'মানব শারীরতত্ত্বঃ পরিপাক ও শোষণ', 'মানব শারীরতত্ত্বঃ রক্ত ও সঞ্চালন', 'মানব শারীরতত্ত্বঃ শ্বসনক্রিয়া ও শ্বসন', 'মানব শারীরতত্ত্বঃ বর্জ্য ও নিষ্কাশন', 'মানব শারীরতত্ত্বঃ চলন ও অঙ্গচালনা', 'মানব শারীরতত্ত্বঃ সমন্বয় ও নিয়ন্ত্রণ', 'মানবদেহের প্রতিরক্ষা', 'জ্বিনতত্ত্ব ও বিবর্তন', 'প্রাণির আচরণ']
  },
  {
    title: "রসায়ন ১",
    value: "chem1",
    chapters: ['ল্যাবরেটরির নিরাপদ ব্যবহার', 'গুণগত রসায়ন', 'মৌলের পর্যায়ভিত্তিক ধর্ম ও রাসয়নিক বন্ধন', 'রাসায়নিক পরিবর্তন', 'কর্মমুখী রসায়ন']
  },
  {
    title: "রসায়ন ২",
    value: "chem2",
    chapters: ['পরিবেশ রসায়ন', 'জৈব রসায়ন', 'পরিমানগত রসায়ন', 'তড়িৎ রসায়ন', 'অর্থনৈতিক রসায়ন']
  },
  {
    title: "পদার্থ ১",
    value: "phy1",
    chapters: ['ভৌত জগত ও পরিমাপ', 'ভেক্টর', 'গতিবিদ্যা', ' নিউটনীয় বলবিদ্যা', 'কাজ, ক্ষমতা, শক্তি', 'মহাকর্ষ ও অভিকর্ষ', 'পদার্থের গাঠনিক ধর্ম', 'পর্যাবৃত্তিক গতি', 'তরঙ্গ', 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব ']
  },
  {
    title: "পদার্থ ২",
    value: "phy2",
    chapters: ['তাপগতিবিদ্যা', 'স্থির তড়িৎ', 'চল তড়িৎ', 'তড়িৎ প্রবাহের চৌম্বক ক্রিয়া ও চুম্বকত্ব', 'তাড়িতচৌম্বকীয় আবেশ ও পরবর্তী প্রবাহ', 'জ্যামিতিক আলোকবিজ্ঞান', 'ভৌত আলোকবিজ্ঞান', 'আধুনিক পদার্থবিজ্ঞানের সূচনা', 'পরমাণুর মডেল এবং নিউক্লিয়ার পদার্থবিজ্ঞান', ' সেমিকন্ডাক্টর ও ইলেকট্রনিক্স', 'জ্যোতির্বিজ্ঞান']
  },
];





//get practice exams by subject and chapter
function getPractice(subject, chapter, callback){
    store.collection('subjectExams').doc(subject).collection(chapter).get().then(doc=>{
       let exams = [];
        doc.forEach(exam=> {
          exams.push({...exam.data(), id: exam.id});
        });
        callback(exams);
    }).catch((error)=>{
        console.log(error);
    });
}



//one letter
function oneLetter(word){
  return word[0];
}

//shuffle questions
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



//course data modify
function courseData(data) {
  let mdata = {
    ...data,
    fee: parseInt(data.fee) == 0 ? 'Free':data.fee+'tk',
    model_test: parseInt(data.model_test),
    prev_fee: parseInt(data.prev_fee),
    previous_year: parseInt(data.previous_year),
    subject_exam: parseInt(data.subject_exam),
    discount: (100-((parseInt(data.fee)/parseInt(data.prev_fee))*100)).toPrecision(3),
    total_exam: parseInt(data.model_test)+parseInt(data.previous_year)+parseInt(data.subject_exam)
   }

   return mdata;
}

//getdatetimesplit
function splitDate(date){
  return date.split(" ");
}

//form date
function dateForm(date){
  let d = date.split(' ');
  return d[2]+' '+d[1] + ' ' + d[3] 
}

//form time
function timeForm(date) {
  let d = date.split(' ')[4];
   d = d.split(':');
  let time = parseInt(d[0]) > 12 ? (parseInt(d[0])-12)+':'+d[1]+'PM' : parseInt(d[0])+':'+d[1]+'AM';
   return time;
}

//enrolltimer
function enrollTimer(date, callback){
var countDownDate = new Date(date).getTime();
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if(callback){
    callback(days + "d " + hours + "h "+ minutes + "m " + seconds + "s ")
  }
  if (distance < 0) {
    clearInterval(x);
    if(callback){
      callback("Running");
    }
  }
}, 1000);
}

var x;
//live banner timer
function liveBannerTimer(date, end, callback){
  let s = new Date(date);
  let e = new Date(end);
  if(e.getTime()>s.getTime()){
    date = end;
  }else {
    date = date;
  }

  var countDownDate = new Date(date).getTime();
   x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    if(callback){
      callback(days + "d " + hours + "h "+ minutes + "m " + seconds + "s ")
    }
    if (distance < 0) {
      clearInterval(x);
      if(callback){
        callback("Finished");
      }
    }
  }, 1000);
  }


function getLives(callback){
  store.collection('lives').get().then(docs=>{

    let lives = [];
    let ended = [];
    docs.forEach(item=>{
      let start = new Date(item.data().start_time);
      let d = new Date();
      if(start.getTime() >= d){
        lives.push({...item.data(), id: item.id});
      }else{
        ended.push({...item.data(), id: item.id});
      }
      
    });

    lives.sort((a, b) => {
      return new Date(a.start_time) - new Date(b.start_time);
    })
    if(callback){
      callback(lives);
    }


  });


}

function getPast(callback){
  store.collection('lives').get().then(docs=>{

    let pasts = [];
    docs.forEach(item=>{
      let end = new Date(item.data().end_time);
      let d = new Date();
      if(end.getTime() < d){
        pasts.push({...item.data(), id: item.id});
      }
      
    });

    pasts.sort((a, b) => {
      return new Date(a.start_time) - new Date(b.start_time);
    })
    if(callback){
      callback(pasts);
    }


  });


}





//random id
function randomString(length) {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'.split('');

  if (! length) {
      length = Math.floor(Math.random() * chars.length);
  }

  var str = '';
  for (var i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


var z;

function liveTimer(date, end, element, sdate){
 $(element).html(``);
 
  var countDownDate = new Date(date).getTime();
  z = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
  
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      if(end==-1){
        $(sdate).html(`<div class="running">Running</div>`);
        $(element).html(`
        <div class="t-num">${hours}H</div>
        <div class="t-num">${minutes}M</div>
        <div class="t-num">${seconds}S</div>
        `)
      }else{
        $(element).html(`
        <div class="t-num">${days}D</div>
        <div class="t-num">${hours}H</div>
        <div class="t-num">${minutes}M</div>
        <div class="t-num">${seconds}S</div>
        `);
      }
      
    if (distance < 0) {
      clearInterval(x);
      if(end==-1){
        $(element).html('~.~');
        $(sdate).html(`<div class="running">Finished</div>`);
      }else{
        liveTimer(end, -1, element, sdate);
      }
      
    }
  }, 1000);
  }


  var y;
//live det timer
function liveDetailsTimer(date, end, element, sdate, button){
  $(element).html(``);
  $(sdate).html(``);
   var countDownDate = new Date(date).getTime();
   y = setInterval(function() {
     var now = new Date().getTime();
     var distance = countDownDate - now;
   
     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
       if(end==-1){
         $(sdate).html(`Running`);
         $(element).html(`
         <div class="t-num">${hours}H</div>
         <div class="t-num">${minutes}M</div>
         <div class="t-num">${seconds}S</div>
         `);
       }else{
        $(sdate).html(`Beginning`);
        $(element).html(`
         
         <div class="t-num">${days}D</div>
         <div class="t-num">${hours}H</div>
         <div class="t-num">${minutes}M</div>
         <div class="t-num">${seconds}S</div>
         `);
       }
       
     if (distance < 0) {
       clearInterval(y);
       if(end==-1){
         $(element).html('<div class="finished">Finished</div>');
         $(sdate).html(``);
         $(button).html(`<button id="btn-result" class="btn btn-primary">See Result</div>`);
         $('#btn-result').click(function(){
          router.navigate('#!/live/start/'+button.split('-')[1]);
        })
       }else{
        $(button).html(`<button id="btn-running" class="btn btn-primary">Start</div>`);
        if(UID){
          $( document ).ready(function() {
            $('#btn-running').click(function(){
              router.navigate('#!/live/start/'+button.split('-')[1]);
            })
        }); 
        }else{
          Swal.fire({
            icon: 'warning',
            text: 'Please login first!'
          })
        }
        
        
        liveDetailsTimer(end, -1, element, sdate, button);
       }
       
     }
   }, 1000);
   }