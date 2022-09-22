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
        <div class="sec-sec1"><div class="icon"><img src="../images/courses.png"></div><div class="text">Courses</div></div>
       <div class="more">See more</div>
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

        //live
        getLives(lives=>{
          let l = lives[0];
          $('#live_banner').html(`
          <div class="live-bg"><img src="${l.img_link}"/></div>
            <div class="title">${l.title}</div>
            <div class="time">${dateForm(l.start_time)} ${timeForm(l.start_time)}</div>
            <div class="badge"><img src="../images/${l.type}.png"/></div>
          `);

          liveBannerTimer(l.start_time, l.end_time, time=>{
            $('#live_countdown').html(time);
          });

          $('.live-card .details').html(`<a href="#!/live/details/${l.id}">Details</a>`)

          

        })


        //courses
        store.collection('courses').get().then(snap=> {
          let course_list = document.getElementById('course_list');
          course_list.innerHTML = '';
          snap.forEach(item=>{
           let data =  courseData(item.data());
            course_list.innerHTML += `
          <a href="#!/course/${item.id}"> <div class="course-card">
         <div class="photo"><img src="${data.img_link}"/></div>
         <div class="details">
         <div class="title">${data.title}</div>
         <div class="sub-title">Total exam: ${data.total_exam}</div>
         <div class="fee"><del class="del">${data.prev_fee}tk</del> ${data.fee} <span class="discount">(${data.discount}% off)</span></div>
         </div>
         </div></a>
            
            `
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

      <div class="adv" id="live-adv-banner"><img src="../images/Ads/Live Banner.png"></div>
     
      </body>
      `

      getLives(live=>{
        const list_upcoming = document.querySelector('.list_upcoming');
        live_list.innerHTML = '';

        for(let i=0; i<live.length; i++){
          list_upcoming.innerHTML +=`
          <div class="live-card kalpurush">
          <div class="live-bg"><img src="${live[i].img_link}"/></div>
          <div class="title">${live[i].title}</div>
          <div class="time">${dateForm(live[i].start_time)} ${timeForm(live[i].start_time)}</div>
          <div class="badge"><img src="../images/${live[i].type}.png"/></div>
          <div class="live_countdown-${i} lc"></div>
          <a href="#!/live/details/${live[i].id}">Details</a>
          </div>
        `;
        liveBannerTimer(live[i].start_time, live[i].end_time, time=>{
          $('.live_countdown-'+i).html(time);
        });
        
        }

        
       

        

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
      </div>
      `
      getLive();
      function getLive(){
     return store.collection('lives').doc(params.id).get().then(doc=>{
        console.log(params.id);
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
          <div class="live_option">
          <button id="live_register" class="btn btn-success">Register</button>
          </div>

          <div class="comments">
          <div class="comment-title"><div>Comments<span id="cmnt_count"></span></div>  <div id="refresh">Reload</div></div>
          
          <div class="comment-form"></div>
          <div id="all_comments">
          <center><div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div></center>
          </div>
          
          </div>

          </div>
          
          `);

          $('#refresh').click(function(){
            getLive();
          })

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
                Swal.fire({
                  icon: 'question',
                  text: 'Do you want to register?',
                  confirmButton: true,
                  cancelButton: true,
                  confirmButtonText: 'Yes',
                  cancelButtonText: 'No'
                }).then(res=>{
                  if(res.isConfirm){
                      store.collection('lives').doc(params.id).update({
                        reg_std:{
                          [UID]: {
                            name: std_name
                          }
                        }
                      }).then(()=>{
                        Swal.fire({
                          icon: 'success',
                          text: 'Registration completed!'
                        });
                        getLive();
                      })
                  }
                })
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
                  getLive();
                  store.collection('lives').doc(params.id).set({
                    comments: {
                      [randomString(6)]:{
                        comment: cmnt,
                        name: std_name,
                        at: (new Date()).toISOString()
                      }
                    }
                  }, {merge: true} ).then(()=>{
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

          let all_comments = document.getElementById('all_comments');
          if(data.comments){
            
            let comments = Object.entries(data.comments);
            comments.sort((a,b)=> new Date(b[1].at) - new Date(a[1].at));
            $('#cmnt_count').html(`(${comments.length})`)
            all_comments.innerHTML = ``;
            comments.forEach(cmnt=>{
              all_comments.innerHTML += `
              <div class="comment-wrap">
              <div class="comment-avatar">
              <img height="30px" src="../images/doctor.png">
              <div class="comment-det">
              <div class="name">${cmnt[1].name}</div>
              <div class="time">${moment(cmnt[1].at).fromNow(true)} ago</div>
              </div>
              </div>
              <div class="comment-body">${cmnt[1].comment}</div>
              </div>
              `
            })
          }else{
            all_comments.innerHTML = `<div class="no-cmnt">No comments. Be the first to comment.</div>`
          }

          

          

      })
      }
  }



}).resolve();




