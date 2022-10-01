const router = new Navigo(null, true, '#!');
const app = document.getElementById('app');

router.on({
    '/': function() {
        $('.top-title').text('Britto Edu.');
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
        <a href="#!/live/list"><div class="more">See All</div></a>
        </div>
          
        <div class="live-card siliguri">
           <div id="live_banner">
           <center><div class="spinner-border text-light" role="status">
           <span class="visually-hidden">Loading...</span>
         </div></center>
           </div>
            <div id="live_countdown" class=""></div>
            <div class="details"></div>
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
        <div class="sec-sec1"><div class="icon"><img src="../images/courses.png"></div><div class="text">Courses<small>(Coming soon...)</small></div></div>
       <div class="more">...</div>
        </div>
     
        <div id="course_list" class="vert-scroll siliguri">
        <center><div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></center>
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

        //Running Exam 
        db.ref('app/live').on('value', snap=>{
          store.collection('lives').doc(snap.val().id).get().then(live=>{
            let l = live.data();
            $('#live_banner').html(`
          <div class="live-bg"><img src="${l.img_link}"/></div>
            <div class="title">${l.title}</div>
            <div id="s-time" class="time">${dateForm(l.start_time)} ${timeForm(l.start_time)}</div>
            <div class="badge"><img src="../images/${l.type}.png"/></div>
          `);
          $('.live-card .details').html(`<a href="#!/live/details/${snap.val().id}">Details</a>`)
            clearInterval(z);
          liveTimer(l.start_time, l.end_time, '#live_countdown', '#s-time');
          })
        })


        //live
        // getLives(lives=>{
        //   let l = lives[0];
        //   // console.log(lives);
        //   $('#live_banner').html(`
        //   <div class="live-bg"><img src="${l.img_link}"/></div>
        //     <div class="title">${l.title}</div>
        //     <div class="time">${dateForm(l.start_time)} ${timeForm(l.start_time)}</div>
        //     <div class="badge"><img src="../images/${l.type}.png"/></div>
        //   `);

        //   liveBannerTimer(l.start_time, l.end_time, time=>{
        //     $('#live_countdown').html(time);
        //   });

        //   $('.live-card .details').html(`<a href="#!/live/details/${l.id}">Details</a>`)
        // });


        //courses
        store.collection('courses').get().then(snap=> {
          let course_list = document.getElementById('course_list');
          course_list.innerHTML = '';
          snap.forEach(item=>{
           let data =  courseData(item.data());
            course_list.innerHTML += `
          <a href="#!"> <div class="course-card">
         <div class="photo"><img src="${data.img_link}"/></div>
         <div class="details">
         <div class="title">${data.title}</div>
         <div class="sub-title">Total exam: ${data.total_exam}</div>
         <div class="fee"><del class="del">${data.prev_fee}tk</del> ${data.fee} <span class="discount">(${data.discount}% off)</span></div>
         </div>
         </div></a>
            
            `

            // $('.interested').click(function(){
            //   if(UID){
            //     let id = ($(this)[0].id).split('-')[1];
            //     console.log(id);
            //     Swal.fire({
            //       icon: 'info',
            //       text: 'This course is coming soon. We will let you know!'
            //     })

            //   } else {
            //     Swal.fire({
            //       icon: 'warning',
            //       text: 'Please login first!',
            //       footer: 'Britto Edu.'
            //     })
            //   }
             
            // })


          });

        }).catch(err=>{
          console.log(err);
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
          <div class="britto">
          <img src="../images/puzzle.png"/>
          <div class="britto-text">Britto Edu.</div>
          </div>

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
          </div>
          </div><br>
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
    '/course/:id':function(params){
      $('.top-title').html(`Course`);
      app.innerHTML =`
      <div class="course-wrap">
      <div class="center_loader"><div class="spinner-border text-success" role="status">
      <span class="visually-hidden"></span>
      </div></div>
      </div>
      <div class="enroll siliguri" data-bs-toggle="modal" data-bs-target="#enrollModal">Enroll Now</div>
      
      
      <div class="modal fade" id="enrollModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel"><img src="../images/BKash.png"> Send money 
              
              <div id="transLoader">
              <div class="spinner-border text-success" role="status">
              <span class="visually-hidden">Loading...</span>
              </div>
              </div>
              
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body trans_modal_body modal-dialog-scrollable">
             <div id="transText"> প্রথমে bKash থেকে <span id="amount"></span> 01318067123 নম্বরে send money করো। এরপর 
              TRANS ID টি নিচে লিখে সেন্ড করো। অল্প সময়ের মধ্যেই তোমার সাথে যোগাযোগ করা হবে।</div>

              <div class="input-group">
              <span class="input-group-text" id="inputGroup-sizing-default">TRANS ID</span>
              <input id="transId" type="text" class="form-control" aria-label="Sizing example input" placeholder="ex: 9IH5CGI6LH" aria-describedby="inputGroup-sizing-default">
              </div>
              
            </div>
            <div class="modal-footer">
              <button id="sendTrans" type="button" class="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
      
      `

      $('#sendTrans').click(function(){
            $('#transLoader').show();
            let transId = $('#transId').val();
            store.collection('courses').doc(params.id).update({
              moneyId:{
                [UID]: {
                  transId: transId,
                  std_name: std_name,
                  status: 0
                }
              }
            }).then(()=>{
              $('#transLoader').hide();
              Swal.fire({
                icon: 'success',
                text: 'Transaction id sent!'
              });
            })

      });
      store.collection('courses').doc(params.id).onSnapshot(snap=> {
         let data =  courseData(snap.data());
         $('#amount').text(data.fee);
          $('.course-wrap').html(`
          <div class="course-top">
          <div class="course-title">${data.title}</div>
          <div class="course-sub-title">${data.sub_title}</div>
          <div class="course-image"><img src="${data.img_link}"></div>
          <div class="course-countdown">${splitDate(data.start_time)[1]} ${splitDate(data.start_time)[2]}</div>

          <div class="course-materials">
          
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
          
          <div class="blabla siliguri">${data.details}</div>

          <div class="details-resource siliguri">
          <div class="text"><i class="icofont-certificate-alt-2"></i> Total Exams:</div><div class="value">${data.total_exam}</div>
          </div>

          <div class="details-resource siliguri">
          <div class="text"><i class="icofont-book-alt"></i> Subject Exams:</div><div class="value">${data.subject_exam}</div>
          </div>

          <div class="details-resource siliguri">
          <div class="text"><i class="icofont-book-alt"></i> Previous Year:</div><div class="value">${data.previous_year}</div>
          </div>

          <div class="details-resource siliguri">
          <div class="text"><i class="icofont-clip-board"></i> Model Tests:</div><div class="value">${data.model_test}</div>
          </div>

          <div class="details-resource siliguri">
          <div class="text"><i class="icofont-taka"></i> Fee:</div><div class="fee"><del>${data.prev_fee}tk</del> ${data.fee} </div> <div class="discount">(${data.discount}% OFF)</div>
          </div>

          <div class="details-resource siliguri">
          <div class="text"><i class="icofont-wall-clock"></i> Starting From:</div><div class="value"> ${dateForm(data.start_time)}</div>
          </div>

          

          <a href="${data.course_plan_link}"><center><div class="course-download"><i class="icofont-download"></i> Download Course Plan</div></center></a>

   
    
         
          </div>
          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          
          <div class="comments-off">
          <img src="../images/no-message.png">
          <div class="text">Comments are turned off!</div>
          </div>

          <div class="social siliguri">
          Join:
          <a target="_blank" href="https://t.me/britto_medi"><div style="color: green;"><i class="icofont-telegram"></i></div></a>
          <a target="_blank" href="https://t.me/brittomedi"><div><i class="icofont-telegram"></i></div></a>
          <a target="_blank" href="https://www.facebook.com/groups/482665923338855/"><div><i class="icofont-facebook"></i></div></a>
          </div>
          
          </div>
          </div>

          </div>


          `);

          enrollTimer(data.start_time, time=>{
            $('.course-materials').html(time);
          });

          //
          // console.log(data);
          if(UID){
            if(data.moneyId){
              console.log(data.moneyId[UID].status)
              if(data.moneyId[UID].status == 0){
                $('.enroll').text('Pending');
                $('#transText').html(`তুমি এর আগে একটি TRANS ID send করেছো। তোমার Send করা Id টিঃ ${data.moneyId[UID].transId}.  কিছুক্ষণের মধ্যেই তোমার সাথে যোগাযোগ করা হবে।`);
                $('#sendTrans').show();
                $('#sendTrans').html(`Send Again`);
  
              }
              else if(data.moneyId[UID].status == 1){
                $('.enroll').html(`<i class="icofont-verification-check"></i> PAID!`);
                $('.trans_modal_body').html(`
                <div class="paid">
                <i class="icofont-taka-true"></i>
                Paid
                </div>
  
                `);
                $('#sendTrans').hide();
              }else{
                $('#sendTrans').show();
                $('.enroll').text('Rejected!');
                $('#transText').html(`<center>[REJECTED]</center><br>তুমি এর আগে একটি TRANS ID send করেছো। তোমার Send করা Id টিঃ ${data.moneyId[UID].transId}. ID টি সঠিক নয়। আবার সেন্ড করো অথবা 01318067123 এই নম্বরে কল করে সাহায্য নাও।`);
              }
            }
          }else{
            $('#sendTrans').hide();
            $('.trans_modal_body').html(`
            <center>
              সাইন ইন করো প্রথমে।<br>
            <a href="#!/auth"><button class="btn btn-primary">Sign In</button></a></center>
            `);
          }
          

          

      });


    },
    '/live/list': function(){
      $('.top-title').html(`Lives`);

      app.innerHTML = `
      <div class="body">
      
      <div class="list-wrap">
      <div class="list-title">Upcoming</div>
      <div class="list_upcoming" id="live_list">
     <center> <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
       </div></center>
      </div>
      </div>

      <div style="display: none;" class="adv" id="live-adv-banner"><img src="../images/Ads/Live Banner.png"></div>
     
      <div class="list-wrap">
      <div class="list-title">Past Exams</div>
      <div class="list_past" id="past_list>
     <center> <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
       </div></center>
      </div>
      </div>

      </body>
      `

      getLives(live=>{
        const list_upcoming = document.querySelector('.list_upcoming');
       list_upcoming.innerHTML = '';
  
        if(live.length==0){
          list_upcoming.innerHTML = `<div class="sad">
          <div class="sad_img"><img src="../images/anxiety.png"></div>
          <div class="sad_text">No Exam is Here!</div>
          <div class="sad_subtext">...</div>
          </div>`;
        }
        for(let i=0; i<live.length; i++){
          list_upcoming.innerHTML +=`
          <div class="live-card kalpurush">
          <div class="live-bg"><img src="${live[i].img_link}"/></div>
          <div class="title">${live[i].title}</div>
          <div id="s-time-${i}" class="time">${dateForm(live[i].start_time)} ${timeForm(live[i].start_time)}</div>
          <div class="badge"><img src="../images/${live[i].type}.png"/></div>
          <div class="live_countdown-${i} lc"></div>
          <a href="#!/live/details/${live[i].id}">Details</a>
          </div>
        `;
        clearInterval(x);
        liveTimer(live[i].start_time, live[i].end_time, '.live_countdown-'+i, '#s-time-'+i);
        
        }

        getPast(live=>{
          const list_past = document.querySelector('.list_past');
          list_past.innerHTML = '';
          if(live.length==0){
            list_past.innerHTML = `<div class="sad">
            <div class="sad_img"><img src="../images/anxiety.png"></div>
            <div class="sad_text">No Exam is Here!</div>
            <div class="sad_subtext">...</div>
            </div>`;
          }
          for(let i=0; i<live.length; i++){
            list_upcoming.innerHTML +=`
            <div class="live-card kalpurush">
            <div class="live-bg"><img src="${live[i].img_link}"/></div>
            <div class="title">${live[i].title}</div>
            <div id="s-time-${i}" class="time">${dateForm(live[i].start_time)} ${timeForm(live[i].start_time)}</div>
            <div class="badge"><img src="../images/${live[i].type}.png"/></div>
            <div class="live_countdown-${i} lc"></div>
            <a href="#!/live/details/${live[i].id}">Details</a>
            </div>
          `;
          }
        
          //liveTimer(live[i].start_time, live[i].end_time, '.live_countdown-'+i, '#s-time-'+i);
          
          })

        
       

        

        // $('.live-card .details').html(`<a href="#!/live/details/${l.id}">Details</a>`)

        

      })

    },
    '/live/details/:id': function(params){
      $('.top-title').html(`Live`);
      app.innerHTML = `
      <div class="body">
      <div class="live-post">

      <center><div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
      </div></center>
      </div>

      <div class="comments kalpurush">
          <div class="comment-title"><div>Comments<span id="cmnt_count"></span></div></div>
          
          <div class="comment-form"></div>
          <div id="all_comments">
          <center><div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div></center>
          </div>
      </div>
      `
      getLive();
      function getLive(){
     return store.collection('lives').doc(params.id).get().then(doc=>{
        // console.log(params.id);
        let data = doc.data();
        $('.top-title').html(`${data.title}`);
          $('.live-post').html(`
          <div class="post">
          <div class="post-top">
          <div class="avatar">
          <div class="img"><img src="${data.img_link}"/></div>
          <div>
          <div class="title">${data.title}</div>
          <div class="sub-title">${data.sub_title}</div>
          </div>
          </div>
          <div>
          <div class="date">${dateForm(data.start_time)}</div>
          <div class="time">${timeForm(data.start_time)}</div>
          </div>
          </div>
          <div class="post-body">${data.details}
          <div class="live-nb">#পরীক্ষায় অংশগ্রহণ করতে অবশ্যই Registration করতে হবে। নিচে Register বাটনে ক্লিক করে Registration করে রাখো।</div>
          </div>
          <center id="opt-loader"><div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
      </div></center>
          <div class="live_option">
          <button id="live_register"  class="btn btn-success live-rg-${params.id}">Register</button>
          <div id="live_det">
            <div id="status"></div>
            <div id="timer"></div>
          </div>
          <div class="st-${params.id} start-button"></div>
          </div>
          </div>
          </div>
          `);
          $('.live_option').hide();
          setTimeout(function(){
            $('.live_option').show();
            $('#opt-loader').hide();
          },2000)

          
          clearInterval(y);
          liveDetailsTimer(data.start_time, data.end_time, '#live_det #timer', '#live_det #status', `.st-${params.id}`)
          if(UID){
           
           
         
            if(data.reg_std && data.reg_std[UID]){
              $('#live_register').text('Registered');
              $('#live_register').removeClass('btn-success');
              $('#live_register').addClass('btn-secondary');
              $('#live_register').click(function() {
                Swal.fire({
                  'icon': 'info',
                  text: 'You have already registered!'
                });
              });
            }else {
              
              $('#live_register').click(function() {
                if(data.isReg){
                  Swal.fire({
                    icon: 'question',
                    text: 'Do you want to register?',
                    confirmButton: true,
                    cancelButton: true,
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No'
                  }).then(res=>{
                    if(res.isConfirmed){
                        store.collection('lives').doc(params.id).set({
                          reg_std:{
                            [UID]: {
                              name: std_name,
                              attend: false,
                              score: 0
                            }
                          }
                        },{merge: true}).then(()=>{
                          Swal.fire({
                            icon: 'success',
                            text: 'Registration completed!'
                          });
                          getLive();
                        }).catch(err=>{
                          console.log(err);
                        })
                    }
                  });
                }else{
                  Swal.fire({
                    icon: 'warning',
                    text: 'Registration is turned off!'
                  })
                }
                  
              });
            }

            $('.comment-form').html(`<form id="comment_form">
            <div class="form-group">
            <textarea class="form-control" id="comment_value" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Comment</button>
            </form>`);
              document.getElementById('comment_form').addEventListener('submit',e=>{
                e.preventDefault();
                let cmnt =  $('#comment_value').val();
                if(cmnt.trim() != ''){
                  store.collection('lives').doc(params.id).collection('comments').add({     
                        comment: cmnt,
                        name: std_name,
                        UID: UID,
                        at: (new Date()).toISOString()
                  }).then(()=>{
                    Toast.fire({
                      icon: 'success',
                      title: 'Commented!'
                    })
                  })
                }
              })


          } else {
            $('#live_register').click(function() {
              Swal.fire({
                'icon': 'warning',
                text: 'Please sign in first!'
              });
            });

            $('.comment-form').html(`
            <div class="reg_nb">You must sign in to comment!</div>
            `)
          }
        
      });
    }

    //comments
    let all_comments = document.getElementById('all_comments');
    store.collection('lives').doc(params.id).collection('comments').onSnapshot(snap=>{
      let comments = []; 
      comments.sort((a, b) => new Date(b.at) - new Date(a.at));
      
      all_comments.innerHTML = ``;
      snap.forEach(item=>{
        comments.push({...item.data(), id: item.id});
       });
       $('#cmnt_count').html(`(${comments.length})`);
       if(comments.length === 0) all_comments.innerHTML = `<div class="no-cmnt">No comments. Be the first to comment.</div>`
        
       comments.forEach(cmnt=>{
        let edit = `<div id="${cmnt.id}" class="comment-delete">Delete</div>`
        if(cmnt.UID != UID){
          edit = '';
        }
        all_comments.innerHTML += `
        <div class="comment-wrap">
        <div class="comment-avatar">
        ${edit}
        <img height="30px" src="../images/doctor.png">
        <div class="comment-det">
        <div class="name">${cmnt.name}</div>
        <div class="time">${moment(cmnt.at).fromNow(true)} ago</div>
        </div>
        </div>
        <div class="comment-body">${cmnt.comment}</div>
        </div>
        `
      });

      $('.comment-delete').click(function(){
        let id = $(this)[0].id;
        store.collection('lives').doc(params.id).collection('comments').doc(id).delete().then(()=> {
          Toast.fire({
            icon: 'success',
            title: 'Deleted!'
          })
        }).catch(err=>{
          console.log(err);
        });
      });

       
    })




    },
    '/live/start/:id': function(params){
      $('.top-title').html(``);

      app.innerHTML = `
      <center><div class="spinner-border text-primary" role="status">
      <span class="visually-hidden">Loading...</span>
      </div></center>
      `

    store.collection('lives').doc(params.id).get().then(snap=>{
        if(!snap.data().isPublished){
        //Not Published Result  
            if(UID){
              //Logged IN
              if(snap.data().reg_std && snap.data().reg_std[UID]){
                //Registered
                  if(!snap.data().reg_std[UID].attend){
                    if(snap.data().show_q){
                    //Not Attend Before 
                        store.collection('lives').doc(params.id).set({
                          reg_std: {
                            [UID]:{
                              attend: true,
                              score:0
                            }

                          }
                        }, {merge: true});
                        if(new Date(snap.data().end_time) > new Date()){
                          //Available by time
                          if(snap.data().show_q){new Date()
                            //Show Question
                            app.innerHTML = `
                            <div id="live_question" class="live_questions"></div>
                            `
                            $('.countdown').show();
                            let myexam = snap.data();
                            $('.live_questions').html(`
                            <div class="body">
                                <div class="exam-container">
                              <div class="exam_top">
                                <div class="exam-title kalpurush">
                                <div class="exam_name">${myexam.title}</div><small>Time: ${myexam.duration} min | NFEW: ${myexam.neg} </small>
                                </div>
                                <div style="display: none;" class="score">
                                <div class="score-time"></div>
                                </div>
                                <div class="exam-nb kalpurush"></div>
                              </div>

                            
                                <div class="questions"></div>
                              
                              <center> <div class="submit btn-primary kalpurush" id="submit">Submit</div></center>
                              
                                </div>
                                </div>
                            `);
                            var ans = [],
                              exp = [],
                              userAns = [],
                              score = 0,
                              wrong = 0,
                              na = 0,
                              neg = 0;
                            questions = myexam.questions;
                            // shuffle(questions);
                            // console.log(questions);
                            // $(".exam-nb").html(`${myexam.details.notice}`);
                  
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
                            var minute = parseInt(myexam.duration);
                            var initialMin = parseInt(myexam.duration);
                            var timer = setInterval(function () {
                              if (sec === 0) {
                                minute--;
                                sec = 60;
                              }
                              sec--;
                              let min=minute, secs=sec;
                              if(minute<10) min = "0"+min;
                              if(sec<10) secs = "0"+secs;
                              if (minute <= 0 && sec <= 0) {
                                $("#submit").click();
                                clearInterval(timer);
                                
                              } else {
                                $(".countdown").html(
                                  `<img src="../images/clock.png" height="20px"> <div> ${min} : ${secs}</div>`
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
                                        clearInterval(timer);
                                        $("html, body").animate({ scrollTop: 0 }, "slow");
                                        $("#submit").hide();
                                        let e;
                                        let found;
                                        for (let k = 0; k < ans.length; ++k) {
                                          e = k;
                                          e = "#exp-" + e;
                                        }
                  
                                        for (let i = 0; i < userAns.length; ++i) {
                                          found = true;
                                          for (let j = 0; j < ans.length; ++j) {
                                            if (parseInt(userAns[i]) === ans[j]) { 
                                              score++;
                                              found = true;
                                              break;
                                            } else found = false;
                                          }
                  
                                          if (!found) {
                                            wrong++;
                                          }
                                        }
                                        MathJax.typeset();
                  
                                        $(".score").show();
                                        
                                        $(".score-time").html(
                                          `<i class="icofont-ui-clock"></i><br />সময় <br> <span class="score-num">${
                                            initialMin - 1 - minute
                                          }:${59 - sec}</span>`
                                        );

                                        console.log(score);
                                        let myAns = userAns.join('|');
                                        store.collection('lives').doc(params.id).set({
                                          reg_std: {
                                            [UID]: {
                                              score: score,
                                              ans: myAns,
                                              time: {
                                                min: initialMin - 1 - minute,
                                                sec: 59-sec
                                              }
                                            }
                                          }
                                        }, {merge: true}).then(()=>{
                                          app.innerHTML = `
                                          <div class="sad">
                                          <div class="sad_img"><img src="../images/goal.png"></div>
                                          <div class="sad_text">Successfully Submitted!</div>
                                          <div class="sad_subtext">Result will publish soon!</div>
                                          </div>
                                          `
                                          Swal.fire({
                                            icon: 'success',
                                            text: 'Successfully submitted!'
                                          })
                                        })
                                          
                                    
                          })

                  
                          }
                        }else{
                          //Not available by time
                          app.innerHTML=`
                          <div class="sad">
                          <div class="sad_img"><img src="../images/goal.png"></div>
                          <div class="sad_text">Exam finished!</div>
                          <div class="sad_subtext">Result will be publish soon!</div>
                          </div>
                          `    
                        }
                    } else {
                      app.innerHTML=`
                          <div class="sad">
                          <div class="sad_img"><img src="../images/queue.png"></div>
                          <div class="sad_text">Exam is in queue!</div>
                          <div class="sad_subtext">Question is examining by Expert! It may take a while. We will let you know when start!</div>
                          </div>
                          `  
                    }
                  

                  }else{
                    //Attend before
                    app.innerHTML = `
                      <div class="sad">
                      <div class="sad_img"><img src="../images/goal.png"></div>
                      <div class="sad_text">You have participated in this exam!</div>
                      <div class="sad_subtext">Result will be published soon!</div>
                      </div>
                      `
                  }


              }else{
                //Not Registered
                app.innerHTML = `
                <div class="sad">
                <div class="sad_img"><img src="../images/oops.png"></div>
                <div class="sad_text">You have not registered to this exam!</div>
                <div class="sad_subtext">But you will be able to see the result after published!</div>
                </div>
                `
              }

            }else{
              //Not logged In
              app.innerHTML=`
                  <div class="sad">
                  <div class="sad_img"><img src="../images/goal.png"></div>
                  <div class="sad_text">Please login!</div>
                  </div>
                  `
            }
      }else{
        //PUBLISHED RESULT
        $('.top-title').html(`${snap.data().title}`);
        app.innerHTML = `
        <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="answer_tab" data-bs-toggle="tab" data-bs-target="#answer" type="button" role="tab" aria-controls="home" aria-selected="true">Answesheet</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="result_tab" data-bs-toggle="tab" data-bs-target="#standing" type="button" role="tab" aria-controls="profile" aria-selected="false">Result</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="answer" role="tabpanel" aria-labelledby="home-tab">
        <div class="answersheet"></div>
        </div>
        <div class="tab-pane fade" id="standing" role="tabpanel" aria-labelledby="profile-tab">
        <div class="standings"></div>
        </div>
      </div>

        `
        let myexam = snap.data();
                  $('.answersheet').html(`
                  <div class="body">
                      <div class="exam-container">
                     <div class="exam_top">
                      <div class="exam-title kalpurush">
                      <div class="exam_name">${myexam.title}</div><small>Time: ${parseInt(myexam.duration)} min | NFEW: ${myexam.neg} </small>
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
                     
                     
                      </div>
                      </div>
                  `);
                  var ans = [],
                    exp = [],
                    userAns = (myexam.reg_std[UID].ans).split('|').map(Number),

                    score = 0,
                    wrong = 0,
                    na = 0,
                    neg = myexam.neg;

                    console.log(userAns);
                  questions = myexam.questions;
                  // shuffle(questions);
                   for (let q = 0; q <questions.length; q++) {
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
                  // MathJax.typeset();
        

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
                                `<i class="icofont-check-circled"></i><br>Score</br> <small>Correct: ${score} </small> <br/> <span class="score-num">${score-(wrong*neg)}/${questions.length}</span>`
                              );
                              $(".score-wa").html(
                                `<i class="icofont-close-circled"></i><br/>Wrong </br><small>Neg: ${wrong*neg}</small><br/> <span class="score-num">${wrong}</span>`
                              );
                              $(".score-na").html(
                                `<i class="icofont-warning-alt"></i><br />Empty </br> <span class="score-num">${
                                  questions.length - (score + wrong)
                                }</span>`
                              );
                               $(".score-time").html(
                                `<i class="icofont-ui-clock"></i><br />Time <br> <span class="score-num">${
                                  myexam.reg_std[UID].time.min
                                }:${myexam.reg_std[UID].time.sec}</span>`
                              );
                              
                              
                              $('#correctP').html(`${((score/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#wrongP').html(`${((wrong/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#negativeP').html(`${(((wrong*neg)/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#answeredP').html(`${(100-(((questions.length - (score + wrong))/(questions.length))*100)).toPrecision(3)}%
                              `)                                 
                
          
          $('#result_tab').click(function(){
            const standings = document.querySelector('.standings');
            standings.innerHTML = '';
            let Objresults = Object.entries(myexam.reg_std);
            console.log(Objresults);
            let results = [];
            for(let i=0; i<Objresults.length; i++){
              results.push({...Objresults[i][1], id:Objresults[i][0]});
            }
            results.sort((a, b)=>{
              return b.score - a.score;
            })
            // console.log(results);
            for(let i=0; i<results.length; i++){
              if(UID){
                if(UID === results[i].id){
                  standings.innerHTML += `
                  <div class="stand me">
                  <div class="std_name">${i+1}. ${results[i].name}</div>
                  <div class="score">${results[i].score}</div>
                  </div>
                  `
                }else{
                  standings.innerHTML += `
                  <div class="stand">
                  <div class="std_name">${i+1}. ${results[i].name}</div>
                  <div class="score">${results[i].score}</div>
                  </div>
                  `
                }
              }else{
                standings.innerHTML += `
                  <div class="stand">
                  <div class="name">${i+1}. ${results[i].name}</div>
                  <div class="score">${results[i].score}</div>
                  </div>
                  `
              }
              
            }
           
          })

      }
       
        
    })


      
    }





}).resolve();




