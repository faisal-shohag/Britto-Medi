const router = new Navigo(null, true, '#!');
const app = document.getElementById('app');

router.on({
    '/': function() {
        $('.top-title').text('Britto Medi');
        $('.countdown').hide();

        app.innerHTML = `
        <div class="body">
        
        <div class="section">
        <div class="section-heading">
        <div class="sec-sec1"><div class="icon"><img src="../images/megaphone.png"></div><div class="text">Daily Quiz</div></div>
        </div>
        <div class="q-card grad-1">
      
        <div id="dq" class="question">
        <center><div class="spinner-border text-light" role="status"></div></center>
        </div>

        <div id="dopt" class="options">

        </div>
        </div>
        </div>


        <div class="section">
        <div class="section-heading">
        <div class="sec-sec1"><div class="icon"><img src="../images/bell.png"></div><div class="text">Live Exams</div></div>
        <div class="more">See All</div>
        </div>
          
        <div class="live-card siliguri">
           <div class="live-bg"><img src="../images/delta.png"/></div>
            <div class="title">🧗🏼ডেলটা সিলেকশন</div>
            <div calss="time">12 Nov 2022</div>
            <div class="countdown">Registration in 3 weeks</div>
            <div class="details">Details</div>
        </div>
    
        </div>


        <div class="section">
        <div class="section-heading">
        <div class="sec-sec1"><div class="icon"><img src="../images/choose.png"></div><div class="text">Practice Exams</div></div>
        <div class="more">2100+ Questions</div>
        </div>
        <a href="#!/select_practice">
        <div class="horz-scroll siliguri">
       
        <div class="sub-sq">
        <div class="icon"><img src="../images/molecular.png"/></div>
        <div class="title">জীববিজ্ঞান ১</div>
        </div>

        <div class="sub-sq">
        <div class="icon"><img src="../images/butterfly.png"/></div>
        <div class="title">জীববিজ্ঞান ২</div>
        </div>

        <div class="sub-sq">
        <div class="icon"><img src="../images/chemistry.png"/></div>
        <div class="title">রসায়ন ১</div>
        </div>

        <div class="sub-sq">
        <div class="icon"><img src="../images/test-tube.png"/></div>
        <div class="title">রসায়ন ২</div>
        </div>

        <div class="sub-sq">
        <div class="icon"><img src="../images/physics.png"/></div>
        <div class="title">পদার্থ ১</div>
        </div>

        <div class="sub-sq">
        <div class="icon"><img src="../images/magnet.png"/></div>
        <div class="title">পদার্থ ২</div>
        </div>

        </div>

        <center><div class="button-custom">Select Manually</div></center>
       
        </div>
        </a>


        <div class="section">
        <div class="section-heading">
        <div class="sec-sec1"><div class="icon"><img src="../images/courses.png"></div><div class="text">Courses</div></div>
       <div class="more">See more</div>
        </div>
     
        <div class="vert-scroll siliguri">

       <a href="#!/course"> <div class="course-card">
         <div class="photo"><img src="../images/reading.png"/></div>
         <div class="details">
         <div class="title">মেডিকেল Startup</div>
         <div class="sub-title">3 Model Tests + 3 Subject Exams</div>
         <div class="fee"><del class="del">600tk</del> Free <span class="discount">(100% off)</span></div>
         </div>
         </div></a>
          
         <div class="course-card">
         <div class="photo"><img src="../images/delta.png"/></div>
         <div class="details">
         <div class="title">মেডিকেল ডেলটা 2023</div>
         <div class="sub-title">Full Course ori <small>[Only 50 students]</small></div>
         <div class="fee"><del class="del">1530tk</del> 918tk <span class="discount">(40% off)</span></div>
         </div>
         </div>

         <div class="course-card">
         <div class="photo"><img src="../images/medical-book.png"/></div>
         <div class="details">
         <div class="title">মেডিকেল পেপারস ক্র্যাক</div>
         <div class="sub-title">সাবজেক্ট এক্সামস <small>[Only 100 students]</small></div>
         <div class="fee"><del class="del">1000tk</del> 300tk <span class="discount">(70% off)</span></div>
         </div>
         </div>

         <div class="course-card">
         <div class="photo"><img src="../images/world-book-day.png"/></div>
         <div class="details">
         <div class="title">মেডিকেল GK Genius</div>
         <div class="sub-title">সাধারণ জ্ঞান <small>[Only 100 students]</small></div>
         <div class="fee"><del class="del">600tk</del> 190tk <span class="discount">(67% off)</span></div>
         </div>
         </div>

        </div>


        </div>

    
        
        </div>
        `

        //daily quiz
        db.ref('app/dailyQuize').on("value", snap=> {
          $('#dq').text(snap.val().data.q);
          const dopt = document.getElementById('dopt');
          dopt.innerHTML = '';
          for(let i=0; i<snap.val().data.options.length; i++){
            dopt.innerHTML +=`
            <div id="dq_${i+1}" class="option">${snap.val().data.options[i]} </div>
            `
          }

          $('.q-card .option').click(function(){
            let val = parseInt(($(this)[0].id).split('_')[1]);
            $('#dq_'+snap.val().data.ans).css({'background' : 'green', 'color': '#fff'});
            if(val != snap.val().data.ans){
              $('#dq_'+val).css({'background': 'red', 'color': '#fff'});
            }
            
          })
        });
    },
    '/select_practice': function() {
        $('.top-title').text('Practice Exams');
        app.innerHTML = `
        <div class="body">
        <form id="select-exam">
        <div class="row">
        <div class="col">
        <select name="sl_sub" id="sl_sub" class="form-select" aria-label="Default select example">
  
        </select>
        </div>

        <div class="col">
        <select id="sl_chap" class="form-select" aria-label="Default select example">
        </select>
        </div>
        </div>
        </form>

        <center class="load animate__animated animate__bounceIn"><div class="spinner-border text-primary" role="status">
        <span class="sr-only kalpurush">B</span>
        </div></center>
         
        <div class="prac_exams">
        </div>
        </div>
      </div>
        
        `

        const prac_exams = document.querySelector('.prac_exams');
        let sl_opt = ``;
        for(let i=0; i<subjects.length; i++){
            sl_opt+=`<option  value="${subjects[i].value}_${i}">${subjects[i].title}</option>`;
        }
        $('#sl_sub').html(sl_opt);
        let sl_chapOpt = ``;
        for(let i=0; i<subjects[0].chapters.length; i++){
           sl_chapOpt+=`<option  value="chap-${i+1}">${subjects[0].chapters[i]}</option>`;
        }
        $('#sl_chap').html(sl_chapOpt);
        $('#sl_sub').change(function(e){
            $('.load').show();
            let id= this.value;
             id = id.split('_');
             let ind = parseInt(id[1]);
             let sl_chapOpt = ``;
             for(let i=0; i<subjects[ind].chapters.length; i++){
                sl_chapOpt+=`<option  value="chap-${i+1}">${subjects[ind].chapters[i]}</option>`;
             }
             $('#sl_chap').html(sl_chapOpt);
             getPractice(id[0], 'chap-1', function(data){
                prac_exams.innerHTML = '';
                $('.load').hide();
                for(let i=0; i<data.length; i++) {
                   prac_exams.innerHTML += `
                   <a href="#!/start_practice/${id[0]}/chap-1/${data[i].id}"><div class="exam_thumbnail kalpurush">
                   <div class="icon">${oneLetter(data[i].details.exam_name)}</div>
                   <div class="details">
                   <div class="title">${data[i].details.exam_name} </div>
                   <div class="time">${data[i].questions.length} Questions | ${parseInt(data[i].questions.length/2)} minutes</div>
                   </div>
                   </div></a>
                   `
                }
       
       
               });


               $('#sl_chap').change(function(){
                let chap = this.value;
                $('.load').show();
                getPractice(id[0], chap, function(data){
                    prac_exams.innerHTML = '';
                    $('.load').hide();
                    for(let i=0; i<data.length; i++) {
                       prac_exams.innerHTML += `
                       <a href="#!/start_practice/${id[0]}/${chap}/${data[i].id}"><div class="exam_thumbnail kalpurush">
                       <div class="icon">${oneLetter(data[i].details.exam_name)}</div>
                       <div class="details">
                       <div class="title">${data[i].details.exam_name} </div>
                       <div class="time">${data[i].questions.length} Questions | ${parseInt(data[i].questions.length/2)} minutes</div>
                       </div>
                       </div></a>
                       `
                    }
           
                   });
               })
        });

        getPractice('bio1', 'chap-1', function(data){
         prac_exams.innerHTML = '';
         $('.load').hide();

         for(let i=0; i<data.length; i++) {
            prac_exams.innerHTML += `
            <a href="#!/start_practice/bio1/chap-1/${data[i].id}"><div class="exam_thumbnail kalpurush">
            <div class="icon">${oneLetter(data[i].details.exam_name)}</div>
            <div class="details">
            <div class="title">${data[i].details.exam_name} </div>
            <div class="time">${data[i].questions.length} Questions | ${parseInt(data[i].questions.length/2)} minutes</div>
            </div>
            </div></a>
            `
         }


        });

        $('#sl_chap').change(function(){
            let chap = this.value;
            $('.load').show();
            getPractice('bio1', chap, function(data){
                $('.load').hide();
                prac_exams.innerHTML = '';
                for(let i=0; i<data.length; i++) {
                   prac_exams.innerHTML += `
                   <a href="#!/start_practice/bio1/${chap}/${data[i].id}"> <div class="exam_thumbnail kalpurush">
                   <div class="icon">${oneLetter(data[i].details.exam_name)}</div>
                   <div class="details">
                   <div class="title">${data[i].details.exam_name} </div>
                   <div class="time">${data[i].questions.length} Questions | ${parseInt(data[i].questions.length/2)} minutes</div>
                   </div>
                   </div>
                   </a>
                   `
                }
       
               });
        });



        
    },
    '/start_practice/:subj/:chap/:key': function(params){
        $('.top-title').text('');
        app.innerHTML=`<div class="exam-doc" id="practice-exam"></div>`;
        store.collection('subjectExams').doc(params.subj).collection(params.chap).doc(params.key).get().then(snap=> {
            // $('.app_loader').hide();
                  $('.countdown').show();
                  let myexam = snap.data();
                  $('.exam-doc').html(`
                  <div class="body">
                      <div class="exam-container">
                     <div class="exam_top">
                      <div class="exam-title kalpurush">
                      <div class="exam_name">${myexam.details.exam_name}</div><small>সময়: ${parseInt(myexam.questions.length/2)} মিনিট | নেগেটিভ: ${0} </small>
                      </div>
                      <div style="display: none;" class="score">
                      <div class="mark"></div>
                      <div class="score-wa"></div>
                      <div class="score-na"></div>
                      <div class="score-time"></div>
                      </div>
                      <div class="exam-nb kalpurush"></div>
                     </div>
                     <div class="parc">
                     <div>
                     Obtained
                     <div class="parcentage" id="correctP"></div>
                     </div>
                     <div>
                     Wrong
                     <div class="parcentage" id="wrongP"></div>
                     </div>
                     <div>
                     Negative
                     <div class="parcentage" id="negativeP"></div>
                     </div>
                     <div>
                     Answered
                     <div class="parcentage" id="answeredP"></div>
                     </div>
                     </div>
                  
                      <div class="questions"></div>
                     
                     <center> <div class="submit btn-primary kalpurush" id="submit">Submit</div></center>
                     
                      </div>
                      </div>
                  `);
                  $('.parc').hide();
                  var ans = [],
                    exp = [],
                    userAns = [],
                    score = 0,
                    wrong = 0,
                    na = 0,
                    neg = 0;
                  questions = myexam.questions;
                  shuffle(questions);
                  // console.log(questions);
                  $(".exam-nb").html(`${myexam.details.notice}`);
        
                   for (let q = 0; q <questions.length; q++) {
                    $(".score").hide();
                    ans.push(parseInt(questions[q].ans)+q*4);
                    exp.push(questions[q].ex);
                    var elem = document.querySelector(".exam-container .questions");
                    document.querySelector(".exam-container .questions").innerHTML += `
                       <div class="q-wrap">
                              <div class="q-logo"></div>
                          <div class="question">
                             ${q + 1}. ${questions[q].q}
                          </div>
                          <div class="option">
                              <div class="opt" id="${
                                q + 1 + q * 3
                              }"><div class="st"></div><div>${questions[q].opt[0]}</div></div>
                              <div class="opt" id="${
                                q + 2 + q * 3
                              }"><div class="st"></div><div>${questions[q].opt[1]}</div></div>
                              <div class="opt" id="${
                                q + 3 + q * 3
                              }"><div class="st"></div><div>${questions[q].opt[2]}</div></div>
                              <div class="opt" id="${
                                q + 4 + q * 3
                              }"><div class="st"></div><div>${questions[q].opt[3]}</div></div>
                          </div>
                          <div class="explanation" id="exp-${q}"></div>
                      </div>
                       `;
                  }
        
                  $(".opt").on("click", function () {
                    userAns.push(parseInt($(this)[0].id));
                    $($(this)[0].parentNode.children[0]).off("click");
                    $($(this)[0].parentNode.children[1]).off("click");
                    $($(this)[0].parentNode.children[2]).off("click");
                    $($(this)[0].parentNode.children[3]).off("click");
                    $($(this)[0]).css({
                      background: "#384dc5",
                      color: "var(--light)",
                      "font-weight": "bold",
                      "box-shadow" : "0px 2px 5px rgba(0,0,0,.2)"
                    });
                  });
                  MathJax.typeset();
        
                  //timer
                  var sec = 0;
                  var minute = parseInt(questions.length/2);
                  var initialMin = parseInt(questions.length/2);
                 // console.log("exam: "+minute);
                  // if(localStorage.getItem('sec') != null) sec = parseInt(localStorage.getItem('sec'));
                  // if(localStorage.getItem('min') != null) minute = parseInt(localStorage.getItem('min'));
                 // console.log("local: "+minute);
                //  var timerAud = new Audio('./sounds/Sound-effect-Clock-Ticking-1.mp3');
                  var timer = setInterval(function () {
                    if (sec === 0) {
                      minute--;
                      sec = 60;
                    }
                    sec--;
                    let min=minute, secs=sec;
                    if(minute<10) min = "0"+min;
                    if(sec<10) secs = "0"+secs;
        
                    // if(minute === 0 && sec===30){
                    //   timerAud.play();
                    // }
        
                    if (minute <= 0 && sec <= 0) {
                      $("#submit").click();
                      // localStorage.removeItem('sec');
                      // localStorage.removeItem('min');
                      clearInterval(timer);
                      
                    } else {
                      // localStorage.setItem('sec', sec);
                      // localStorage.setItem('min', min);
                      // console.log(localStorage.getItem('sec'))
                      $(".countdown").html(
                        `<img src="../images/clock.png" height="30px"> <div> ${min} : ${secs}</div>`
                      );
                    }
                  }, 1000);
        
                  jQuery(document).ready(function ($) {
                    if (window.history && window.history.pushState) {
                      $(window).on("popstate", function () {
                        clearInterval(timer);
                        $(".countdown").hide(20);
                      });
                    }
                  });
        
                  $("#submit")
                    .off()
                    .click(function () {
                      $('.parc').show();
                              clearInterval(timer);
                              $("html, body").animate({ scrollTop: 0 }, "slow");
                              $("#submit").hide();
                              let e;
                              $(".explanation").show();
                           
                              let found;
                              for (let k = 0; k < ans.length; ++k) {
                                e = k;
                                e = "#exp-" + e;
                                $(e).html(
                                  `<b style="color: green;">Solution:</b><br>${exp[k]}`
                                );
        
                                $("#" + ans[k] + " .st").addClass("cr");
        
                                $(
                                  $($($("#" + ans[k])[0].parentNode)[0].parentNode)[0]
                                    .children[0]
                                ).html(
                                  '<div class="not-ans"> <i class="icofont-warning-alt"></i></div>'
                                );
                              }
        
                              for (let i = 0; i < userAns.length; ++i) {
                                found = true;
                                for (let j = 0; j < ans.length; ++j) {
                                  if (parseInt(userAns[i]) === ans[j]) { 
                                    score++;
                                    $("#" + userAns[i] + " .st").addClass("cr");
                                    $(
                                      $(
                                        $($("#" + userAns[i])[0].parentNode)[0]
                                          .parentNode
                                      )[0].children[0]
                                    ).html(
                                      '<div class="correct"> <i class="icofont-check-circled"></i> </div>'
                                    );
                                    found = true;
                                    break;
                                  } else found = false;
                                }
        
                                if (!found) {
                                  wrong++;
                                  $("#" + userAns[i] + " .st").addClass("wa");
                                  $(
                                    $(
                                      $($("#" + userAns[i])[0].parentNode)[0].parentNode
                                    )[0].children[0]
                                  ).html(
                                    '<div class="wrong"> <i class="icofont-close-circled"></i>  </div>'
                                  );
                                }
                              }
                              MathJax.typeset();
        
                              $(".score").show();
                              $(".mark").html(
                                `<i class="icofont-check-circled"></i><br>স্কোর</br> <small>সঠিক: ${score} </small> <br/> <span class="score-num">${score-(wrong*neg)}/${questions.length}</span>`
                              );
                              $(".score-wa").html(
                                `<i class="icofont-close-circled"></i><br/>ভুল </br><small>নেগেটিভ: ${wrong*neg}</small><br/> <span class="score-num">${wrong}</span>`
                              );
                              $(".score-na").html(
                                `<i class="icofont-warning-alt"></i><br />ফাঁকা </br> <span class="score-num">${
                                  questions.length - (score + wrong)
                                }</span>`
                              );
                              $(".score-time").html(
                                `<i class="icofont-ui-clock"></i><br />সময় <br> <span class="score-num">${
                                  initialMin - 1 - minute
                                }:${59 - sec}</span>`
                              );
                              
                              
                              $('#correctP').html(`${((score/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#wrongP').html(`${((wrong/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#negativeP').html(`${(((wrong*neg)/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#answeredP').html(`${(100-(((questions.length - (score + wrong))/(questions.length))*100)).toPrecision(3)}%
                              `)                                 
                          Swal.fire("সাবমিট হয়েছে!", "", "success");
                })
          })
   
   
   
    },
    '/auth': function(){
      $('.top-title').text('Sign In');
      app.innerHTML = `
      <div class="body">
  <div class="container mt-5 mb-5 d-flex justify-content-center">
      <div class="card px-1 py-4">
          <div class="card-body">
              <div class="row">
                  <div class="col-sm-12">
                      <div class="form-group">
                      
                          <div class="input-group"> 
                          
                          <input class="form-control" id="phoneNumber" name="phone" type="text" placeholder="Mobile number without +88"> </div>
                          <div class="form-tips kalpurush">Phone number without "+88" ex: 0131xxxxx</div>
                      </div>
                  </div>
              </div>
  <br>
              
            <div id="recaptcha-container"></div>
              <br>
              <div class="warn kalpurush">
         <button class="btn btn-primary" id="confirm-code">Send varification code</button>
           </div>

           
          <div class="varify">
          <div class="vf">
          <div class="row">
          <div class="col-sm-12">
          <div class="form-group">
          <div class="input-group">
          <input class="form-control" type="text" id="code" placeholder="Enter code here" />
          </div>
          </div>
          </div>
          </div></div><br>
          <button class="btn btn-primary btn-block confirm-button" id="sign-in-button" >Sign In</button>
          </div>
          </div>
  
          </div>
      </div>
  </div>
  
  </div>
         
          `
  
          authExecute();
    },
    'profile/:uid': function(){
      $('.top-title').html(`Profile`);
      app.innerHTML = `
      <div class="body">
      <div class="avatar-circle">
      <img src="../images/doctor.png">
      </div>

      <div class="profile-details">
      <div class="profile-name">
      <div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>
      <div class="profile-inst"></div>
      </div>
    </div>
      `

      authCheck(data=>{
        $('.top-title').text(data.name);
        $('.profile-name').text(data.name);
        $('.profile-inst').text(data.inst);
      })
    },
    '/course':function(){
      $('.top-title').html(`Course`);
      app.innerHTML =`
      
      <div class="course-wrap">
      
      <div class="course-top">
      <div class="course-title">Passion Warm Up</div>
      <div class="course-sub-title">Let's begin the journey!</div>
      <div class="course-image"><img src="../images/reading.png"></div>
      <div class="course-countdown">12:50:32</div>

      <div class="course-materials">
      <div class="mat"><i class="icofont-book-alt"></i> 3 Paper Exams</div>
      <div class="mat"><i class="icofont-clip-board"></i> 3 Model Tests</div>
      </div>
      </div>


      <div class="course-bottom">
      <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><i class="icofont-info-circle"></i> Details</button>
  </li>
  
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><i class="icofont-comment"></i> Comments</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
   <div class="blabla siliguri">
   <b>Passion Warm Up</b> একটি ফ্রি এক্সাম কোর্স। 
   সামনে অনেকেরই HSC Exam কিন্তু HSC এর পর মেডিকেল Cracker'দের জন্য সুখবর হলো সবগুলো এক্সামই Medical Based Question দিয়ে 
   তৈরি। তাই HSC এবং প্যাশন দুটোকেই নিজের করে নাও একটি কোর্স দিয়ে।
   </div>

   <div class="details-resource siliguri">
   <div class="text"><i class="icofont-certificate-alt-2"></i> Total Exams:</div><div class="value">12</div>
   </div>

   <div class="details-resource siliguri">
   <div class="text"><i class="icofont-book-alt"></i> Subject Exams:</div><div class="value">6</div>
   </div>

   <div class="details-resource siliguri">
   <div class="text"><i class="icofont-book-alt"></i> Previous Year:</div><div class="value">3</div>
   </div>

   <div class="details-resource siliguri">
   <div class="text"><i class="icofont-clip-board"></i> Model Tests:</div><div class="value">3</div>
   </div>

   <div class="details-resource siliguri">
   <div class="text"><i class="icofont-taka"></i> Fee:</div><div class="fee"><del>300tk</del> 50tk </div> <div class="discount">(83% OFF)</div>
   </div>

   <div class="details-resource siliguri">
   <div class="text"><i class="icofont-wall-clock"></i> Starting From:</div><div class="value"> 03 Oct 2022</div>
   </div>

   <center><div class="course-download">Download Course Paper</div></center>
    
   <center><div class="enroll siliguri">Enroll Now</div></center>

  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  
  <div class="comments-off">
  <img src="../images/no-message.png">
  <div class="text">Comment is turned off!</div>
  </div>
  
  </div>
</div>

      </div>
      
      </div>
      
      
      
    
      `
    }



}).resolve();




