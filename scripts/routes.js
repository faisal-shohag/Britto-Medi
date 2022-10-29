const router = new Navigo(null, true, '#!');
const app = document.getElementById('app');

// setTimeout(function(){
// if(myuid == 'DDkJGuxqAlNCxJO1QjnJT4bAoyX2'){

router.on({
    '/': function() {
      $('.top').show();
      $('.footer').show();
      $('.footertext').hide();
      $('.footerIcon').removeClass('footerIconActive');
      if($('.hm')[0].classList[3] === undefined){
        $('.hm').addClass('footerIconActive');
        $($($('.hm')[0].parentNode)[0].lastElementChild).show();
      }

        $('.top-title').text('Britto Edu.');
        $('.top .icon').html(`<img src="../images/puzzle.png">`);

        $('.countdown').hide();

        app.innerHTML = `
        <div class="body">
        <!--
        <div class="section">
        <div class="section-heading">
        <div class="sec-sec1"><div class="icon"><img src="../images/top-rated.png"></div><div id="top_title" class="text">Top 3 </div></div>
        </div>
        </div>

       <div id="last_exam" class="top-result"> 
        

        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>

        </div>
        -->
      
        
        <div style="display:none"  class="section">
        <div class="section-heading">
        <div class="sec-sec1"><div class="icon"><img src="../images/megaphone.png"></div><div class="text">Daily Quiz</div></div>
        </div>
        <div style="display:none" class="q-card grad-1">
      
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
        <div class="sec-sec1"><div class="icon"><img src="../images/routine.png"></div><div class="text">Live Exam Routine</div></div>
        <div class="more">...</div>
        </div>

        <center>
        <button id="hum" class="btn btn-success rtn"><img height="30px" src="https://i.postimg.cc/jj66mYgs/3634451.png"/> Humanity(2nd Time)</button>
        </center>
        <br>


        <div class="section">
        <div class="section-heading">
        <div class="sec-sec1"><div class="icon"><img src="../images/choose.png"></div><div class="text">Practice</div></div>
        <div class="more">3100+ Questions</div>
        </div>
        <div class="sl">
  <div class="sl_menu">
  <a href="#!/practice/subject/b1"> 
  <div class="sl_item">
  <div class="sl_icon"><img src="../images/literature.png"></div>
  <div class="sl_name">বাংলা ১ম পত্র</div>
  </div>
  </a>
  <a href="#!/practice/subject/b2">
  <div class="sl_item">
  <div class="sl_icon"><img src="../images/reading.png"></div>
  <div class="sl_name">বাংলা ২য়  পত্র</div>
  </div>
  </a>
  <a href="#!/practice/subject/e">
  <div class="sl_item">
  <div class="sl_icon"><img src="../images/grammar.png"></div>
  <div class="sl_name">English 2nd</div>
  </div>
  </a>

  <a href="#!/practice/subject/phy1">
<div class="sl_item">
<div class="sl_icon"><img src="../images/phy1.png"></div>
<div class="sl_name">পদার্থ ১ম</div>
</div>
</a>

<a href="#!/practice/subject/phy2">
<div class="sl_item">
<div class="sl_icon"><img src="../images/phy2.png"></div>
<div class="sl_name">পদার্থ ২য় </div>
</div>
</a>

<a href="#!/practice/subject/chem1">
<div class="sl_item">
<div class="sl_icon"><img src="../images/che1.png"></div>
<div class="sl_name">রসায়ন ১ম</div>
</div>
</a>

<a href="#!/practice/subject/chem2">
<div class="sl_item">
<div class="sl_icon"><img src="../images/che2.png"></div>
<div class="sl_name">রসায়ন ২য়</div>
</div>
</a>


<a href="#!/practice/subject/bio1">
<div class="sl_item">
<div class="sl_icon"><img src="../images/leaf.png"></div>
<div class="sl_name">জীববিজ্ঞান ১ম</div>
</div>
</a>

<a href="#!/practice/subject/bio2">
<div class="sl_item">
<div class="sl_icon"><img src="../images/zoology.png"></div>
<div class="sl_name">জীববিজ্ঞান ২য়</div>
</div>
</a>

<a href="#!/practice/subject/math1">
<div class="sl_item">
<div class="sl_icon"><img src="../images/math1.png"></div>
<div class="sl_name">উচ্চ. গণিত ১ম</div>
</div>
</a>

<a href="#!/practice/subject/math2">
<div class="sl_item">
<div class="sl_icon"><img src="../images/math2.png"></div>
<div class="sl_name">উচ্চ. গণিত ২য়</div>
</div>
</a>

<a href="#!/practice/subject/ict">
<div class="sl_item">
<div class="sl_icon"><img src="../images/ict.png"></div>
<div class="sl_name">ICT</div>
</div>
</a>

</div>
  </div>
        

        <div style="display: none" class="section">
        <div class="section-heading">
        <div class="sec-sec1"><div class="icon"><img src="../images/courses.png"></div><div class="text">Courses<small>(Coming soon...)</small></div></div>
       <div class="more">...</div>
        </div>
     
        <div style="display:none" id="course_list" class="vert-scroll siliguri">
        <center><div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div></center>
        </div>


        </div>

    
        
        </div>


      <div class="modal fade" id="routineModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">Routine</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div id="rtn-img"></div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>




      </div>

        `
           //Last Exam Result
        // store.collection('lives').doc('4jvrt5VYbdy4UdPJMLxo').get().then(snap=>{
        //     let myexam = snap.data();
        //   let Objresults = Object.entries(myexam.reg_std);
        //   // console.log(Objresults);
        //   let results = [];
        //   for(let i=0; i<Objresults.length; i++){
        //     results.push({...Objresults[i][1], id:Objresults[i][0]});
        //   }
        //   results.sort((a, b)=>{
        //     return b.score - a.score;
        //   })
        //   // console.log(results);
        //   $('#top_title').text('Top 3 ('+myexam.title+')')
        //   $('.top-result').html(`
        //   <div class="top_std second">
        // <div class="top_std_img"><img src="../images/doctor.png"></div>
        // <div class="top_std_name">${(results[1].name).split(' ')[0]}(${results[1].score})</div>
        // </div>

        // <div class="top_std first">
        // <div class="top_std_img"><img src="../images/doctor.png"></div>
        // <div class="top_std_name">${((results[0].name).split(' ')[0])}(${results[0].score})</div>
        // </div>

        // <div class="top_std third">
        // <div class="top_std_img"><img src="../images/doctor.png"></div>
        // <div class="top_std_name">${((results[2].name).split(' ')[0])}(${results[2].score})</div>
        // </div>

        // <a class="res_links" href="#!/live/start/4jvrt5VYbdy4UdPJMLxo"><div >See full result</div></a>
        //   `)
      
        // })

       
       

        //routine
        $('.rtn').click(function(){
          let g = $(this)[0].id;
          if(g=='sci'){
            $('#rtn-img').html(`<img src="../images/Ads/hsc_science.png"/>`)
            $('#routineModal').modal('show');
          }else{
            $('#rtn-img').html(`<img src="https://i.postimg.cc/MK8zdb8y/Routine-2.png"/>`)
            $('#routineModal').modal('show');
          }
        });
        https://i.postimg.cc/gc3BRJ2g/Study-Plan-for-Humanity.png
       // daily quiz
        // db.ref('app/dailyQuize').on("value", snap=> {
        //   $('#dq').text(snap.val().data.q);
        //   const dopt = document.getElementById('dopt');
        //   dopt.innerHTML = '';
        //   for(let i=0; i<snap.val().data.options.length; i++){
        //     dopt.innerHTML +=`
        //     <div id="dq_${i+1}" class="option">${snap.val().data.options[i]} </div>
        //     `
        //   }

        //   $('.q-card .option').click(function(){
        //     let val = parseInt(($(this)[0].id).split('_')[1]);
        //     $('#dq_'+snap.val().data.ans).css({'background' : 'green', 'color': '#fff'});
        //     if(val != snap.val().data.ans){
        //       $('#dq_'+val).css({'background': 'red', 'color': '#fff'});
        //     }
            
        //   })
        // });

        //Running Exam 
        db.ref('app/live').once('value', snap=>{
          store.collection('lives').doc(snap.val().id).get().then(live=>{
            let l = live.data();
            $('#live_banner').html(`
          <a href="#!/live/details/${snap.val().id}"><div class="live-bg"><img src="${l.img_link}"/></div>
            <div class="title">${l.title}</div>
            <div  class="time">${dateForm(l.start_time).split(' ')[0]} ${dateForm(l.start_time).split(' ')[1]} ${timeForm(l.start_time)} - ${timeForm(l.end_time)}</div>
            <div id="s-time" class=""><div class="spinner-border text-light" role="status">
            <span class="visually-hidden">Loading...</span>
          </div></div>
            <div class="badge"><img src="../images/${l.type}.png"/></div></a>
          `);
          $('.live-card .details').html(`<a href="#!/live/details/${snap.val().id}">Details</a>`)
            clearInterval(z);
          liveTimer(l.start_time, l.end_time, '#live_countdown', '#s-time');
          })
        })


        // live
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
        // store.collection('courses').onSnapshot(snap=> {
        //   let course_list = document.getElementById('course_list');
        //   course_list.innerHTML = '';
        //   snap.forEach(item=>{
        //    let data =  courseData(item.data());
        //     course_list.innerHTML += `
        //   <a href="#!"> <div class="course-card">
        //  <div class="photo"><img src="${data.img_link}"/></div>
        //  <div class="details">
        //  <div class="title">${data.title}</div>
        //  <div class="sub-title">Total exam: ${data.total_exam}</div>
        //  <div class="fee"><del class="del">${data.prev_fee}tk</del> ${data.fee} <span class="discount">(${data.discount}% off)</span></div>
        //  </div>
        //  </div></a>
            
        //     `

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


          // });

        // })
    },
    '/students': function(){
      $('.top').show();
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
      app.innerHTML = `
      <div classs="body">
      <div class="students"><div>
      </div>
      `
       const std = document.querySelector('.students');
       store.collection('users').orderBy("creationTime", "desc").limit(100).get().then(users=>{
       std.innerHTML = ``;
       let i = 0;
        users.forEach(usr=>{
          i++;
           usr = usr.data();
          if(UID){
            if(UID === usr.uid){
              std.innerHTML += `
              <div class="std me">
              
              <div class="std_p">
              <div class="std_rank">${i}</div>
              <div>
              <div class="std_name">${usr.name}</div>
              <div class="std_inst">${usr.inst}</div>
              <div class="std_inst">${usr.phone}</div>
              </div>
              </div>
              <div class="std_score">...</div>
              </div>
              `
            }else{
              std.innerHTML += `
              <div class="std">
              
              <div class="std_p">
              <div class="std_rank">${i}</div>
              <div>
              <div class="std_name">${usr.name}</div>
              <div class="std_inst">${usr.inst}</div>
              <div class="std_inst">${usr.phone}</div>
              </div>
              </div>
              <div class="std_score">...</div>
              </div>
              `
            }
          }else{
            std.innerHTML += `
            <div class="std">
            <div class="std_p">
            <div class="std_rank">${i}</div>
            <div>
            <div class="std_name">${usr.name}</div>
            <div class="std_inst">${usr.inst}</div>
            <div class="std_inst">${usr.phone}</div>
            </div>
            </div>
            <div class="std_score">...</div>
            </div>
              `
          }
        })
      })
    },
    '/select_practice': function() {
      $('.top').show();
      $('.footer').hide();
      $('.top-title').text('Practice Exams');
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
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
    "/practice/subject/:id": function(params){
      $('.top').show();
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
      $('.footer').hide();
      $('.top-title').text(tag[params.id]);
      app.innerHTML = `
      <div class="body">
      <div class="chapters">
      <ul class="o-vertical-spacing o-vertical-spacing--l">
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      </div>
      </div>
      `
      
      db.ref('app/practiceRef/'+params.id).once('value', snap=>{
        let html = ``;
        let chapters = [];
        snap.forEach(item=>{
          chapters.push({
            i:item.val().i,
            name: item.val().name,
            author: item.val().author,
            key: item.key
          })
        });
    
        //sorting
        chapters.sort(function(a, b){
          return a.i - b.i;
        });
    
        for(let i=0; i<chapters.length; i++){
          html += `
          <a href="#!/practice/list/${params.id}/${chapters[i].key}/${chapters[i].name}"> <div  class="chap_item ${params.id}_list"><div><div class="name_logo">${oneLetter(chapters[i].name)}</div></div><div><div class="chapterName">${chapters[i].name}</div><div class="author">${chapters[i].author}</div></div></div></a>
          `
        }
        //  console.log(chapters)
        $('.chapters').html(html);
        if($('.chapters')[0].innerHTML === ""){
          $('.chapters').html('<center><div class="big_no_exam animate_animated animate__bounceIn"><div class=""><i class="icofont-warning-alt"></i></div><div>পরীক্ষা নেই!</div></div></center>');
        }
      })
    
    
    },
    "/practice/list/:subj/:chap/:chapName": function(params){
      $('.top').show();
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
      $('.top-title').html(`${params.chapName}`)
      $('.footer').hide();
      $('.top_logo').html(`<div onclick="window.history.back()" class="top_app_title"><div class="animate__animated animate__fadeInRight top_dir"><i class="icofont-simple-left"></i></div> <div class="animate__animated animate__fadeIn top_text">${params.chapName}</div></div>`);
      app.innerHTML = `
      <div class="body">
      <div class="chapters" id="chaps">
      <ul class="o-vertical-spacing o-vertical-spacing--l">
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      </div>
      </div>
      `
      store.collection('subjectExams').doc(params.subj).collection(params.chap).onSnapshot(snap=>{
        const ex = document.querySelector('#chaps');
        ex.innerHTML="";
        
        snap.forEach(item=>{
          ex.innerHTML += `
          <a href="#!/start_practice/${params.subj}/${params.chap}/${item.id}"> <div class="chap_item ${params.subj}_list"><div><div class="name_logo">${oneLetter(item.data().details.exam_name)}</div></div><div><div class="chapterName">${item.data().details.exam_name}</div><div class="author">${item.data().questions.length}টি প্রশ্ন</div></div></div></a>
          `
        })
      })
    },
    '/start_practice/:subj/:chap/:key': function(params){
      $('.top').hide();
      $('.footer').hide();
      $('.top-title').text('');
        app.innerHTML=`<div class="exam-doc" id="practice-exam">
        <center><div class="spinner-grow text-success" role="status">
                      <span class="visually-hidden">Loading...</span>
                       </div></center>
        </div>`;
        store.collection('subjectExams').doc(params.subj).collection(params.chap).doc(params.key).get().then(snap=> {
            // $('.app_loader').hide();
                  $('.countdown').show();
                  let myexam = snap.data();
                  $('.exam-doc').html(`
                  <div class="body">
                      <div class="exam-container">
                     <div class="exam_top">
                      <div class="exam-title kalpurush">
                      <div class="exam_name">${myexam.details.exam_name}</div><small>সময়: ${bnNumber(myexam.questions.length)} মিনিট | নেগেটিভ: ০ </small>
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
                  
                      <div class="questions">
                      
                      </div>
                     
                     <center> <div class="exam_submit animate__animated animate__flipInX" id="submit">
                     <div class="ex-timer"></div>
                     <div class="ans-count animate__animated animate__bounceIn"><span id="u_ans"></span>/<span id="t_q"></span></div>
                     <div class="ex-submit">সাবমিট</div>
                     </div></center>
                     
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
                  $('#t_q').text(bnNumber(questions.length));
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
                             ${bnNumber(q + 1)}. ${questions[q].q}
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
                  
                  let click = 0;
                  $(".opt").on("click", function () {
                    $('.ans-count').show();
                    click++;
                    $('#u_ans').text(bnNumber(click));
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
                  var minute = parseInt(questions.length);
                  var initialMin = parseInt(questions.length);
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
                      // $('.questions').hide();
                      clearInterval(timer);
                      
                    } else {
                      // localStorage.setItem('sec', sec);
                      // localStorage.setItem('min', min);
                      // console.log(localStorage.getItem('sec'))
                      $(".ex-timer").html(
                        `<img src="../images/clock.png" height="30px"> <div> ${bnNumber(min)} : ${bnNumber(secs)}</div>`
                      );
                    }
                  }, 1000);
        
                  jQuery(document).ready(function ($) {
                    if (window.history && window.history.pushState) {
                      $(window).on("popstate", function () {
                        clearInterval(timer);
                            //   Swal.fire({
                            //           icon: 'question',
                            //           text: 'তুমি কি সত্যিই এক্সাম থেকে বের হতে চাও?',
                            //           showCancelButton: true,
                            //           confirmButtonText: 'হ্যাঁ',
                            //           cancelButtonText: 'না'
                            //         }).then(res=>{
                            //           if(res.isConfirmed){
                                        
                                        
                            //             this.history.back();
                            //             this.close();
                            //           }else{
                            //             history.pushState(null, document.title, location.href);
                            //           }

                            // })             
                      });
                    }
                  });

              

              
                 
        
                  $("#submit")
                    .off()
                    .click(function () {
                      Swal.fire({
                        icon: 'question',
                        text: 'তুমি কি সাবমিট করতে চাও?',
                        showConfirmButton: true,
                        showCancelButton: true,
                        confirmButtonText: 'হ্যাঁ',
                        cancelButtonText: 'না'

                    }).then(res=>{
                      if(res.isConfirmed) {

                      $('.parc').show();
                      clearInterval(timer);
                      $("html, body").animate({ scrollTop: 0 }, "slow");
                      $("#submit").unbind('click');
                      $("#submit .ex-submit").html(`
                      <i class="icofont-check-circled"></i>
                      `);
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
                        `<i class="icofont-check-circled"></i><br>স্কোর</br> <small>সঠিক: ${bnNumber(score)} </small> <br/> <span class="score-num">${bnNumber(score-(wrong*neg))}/${bnNumber(questions.length)}</span>`
                      );
                      $(".score-wa").html(
                        `<i class="icofont-close-circled"></i><br/>ভুল </br><small>নেগেটিভ: ${bnNumber(wrong*neg)}</small><br/> <span class="score-num">${bnNumber(wrong)}</span>`
                      );
                      $(".score-na").html(
                        `<i class="icofont-warning-alt"></i><br />ফাঁকা </br> <span class="score-num">${
                          bnNumber(questions.length - (score + wrong))
                        }</span>`
                      );
                      $(".score-time").html(
                        `<i class="icofont-ui-clock"></i><br />সময় <br> <span class="score-num">${
                          bnNumber(initialMin - 1 - minute)
                        }:${bnNumber(59 - sec)}</span>`
                      );
                      
                      
                      $('#correctP').html(`${(parseInt((score/questions.length)*100))}%
                      `)
                      $('#wrongP').html(`${(parseInt((wrong/questions.length)*100))}%
                      `)
                      $('#negativeP').html(`${(parseInt(((wrong*neg)/questions.length)*100))}%
                      `)
                      $('#answeredP').html(`${(parseInt(100-(((questions.length - (score + wrong))/(questions.length))*100)))}%
                      `)                                 
                  // Swal.fire("সাবমিট হয়েছে!", "", "success");

                      }
                    })
                })
          })
   
   
   
    },
    '/auth': function(){
      $('.top').show();
      $('.footer').hide();
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
    '/profile/:uid': function(params){
      $('.top-title').html(`Profile`);
      $('.top .icon').html(`<img src="../images/doctor.png">`);
      $('.top').show();
      $('.app_loader').show();
      $('.footer').show();
      $('.footertext').hide();
      $('.footerIcon').removeClass('footerIconActive');
      if($('.prfl')[0].classList[3] === undefined){
        $('.prfl').addClass('footerIconActive');
        $($($('.prfl')[0].parentNode)[0].lastElementChild).show();
      }
      app.innerHTML = `
      <div class="">

      <div class="profile-top">
      <center><div class="avatar-circle">
      <span id="my_photo"><div class="spinner-border text-dark" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></span>
      <div class="add_my_photo" id="upload_me"></div>
      </div></center>

      <div class="profile-details">
      <div class="profile-name">
      <div class="spinner-border text-dark" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
      </div>
      <div class="profile-inst"></div>
      </div>

      <div class="profile-data">
      
      <div class="stat-top">

      <div class="stat-item">
      <div class="text">Rank</div>
      <div class="count" id="myRank">...</div>
      </div>

      <div class="stat-item">
      <div class="text">Exam</div>
      <div class="count" id="myExam">0</div>
      </div>

      <div class="stat-item">
      <div class="text">Score</div>
      <div class="count" id="myScore">...</div>
      </div>


      </div>
      </div>
      </div>

     <br>

      <center><button class="btn btn-danger" onclick="signOut()"><i class="icofont-logout"></i> Logout</button></center>

    </div>
      `

     
        

      store.collection("globalRank").doc('hum').get().then(snap=> {
      let i=0;
      let ladder = [];
      let ss = Object.entries(snap.data());
      // console.log(ss);
      for(let i=0; i<ss.length; i++){
        ladder.push({
          name: ss[i][1].name,
          score: ss[i][1].score,
          inst: ss[i][1].inst,
          uid: ss[i][0]
        })
      }
      ladder.sort((a,b)=>{return b.score - a.score});

            for(let k=0; k<ladder.length; k++){
              if(ladder[k].uid == myuid){
                $('#myRank').text(k+1);
                $('#myScore').html(`${ladder[k].score}`)
                break;
              }
            }

      });

      store.collection('users').doc(params.uid).get().then(snap=>{
        let live_exams = snap.data().live_exams;
        live_exams = Object.entries(live_exams);
        $('#myExam').text(live_exams.length)
        // if(snap.data().photoUrl){
          $('#my_photo').html(`<img src="https://robohash.org/${snap.data().name}.png?set=set4"/>`);
        // }

        $('.top-title').text(snap.data().name);
        $('.profile-name').text(snap.data().name);
        $('.profile-inst').text(snap.data().inst);
        
      });
/*
      //upload profile photo
      const cloudName = "dj493l0jy"; // replace with your own cloud name
     const uploadPreset = "g4hfhkjb"; 

     document.getElementById("upload_me").addEventListener("click", function () {
      // $('.up_loading').show();
      myWidget.open();
     });

     
    //  cloudinary.uploader.destroy(params.uid, function(result) { console.log(result) });

     const myWidget = cloudinary.createUploadWidget({
        prepareUploadParams: function(cb, params){
            cb({public_id: params.uid})
        },
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        cropping: true, //add a cropping step
        showAdvancedOptions: false,  //add advanced options (public_id and tag)
        sources: [ "local"], // restrict the upload sources to URL and local files
        multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        clientAllowedFormats: ["jpg", "png"], //restrict uploading to image files only
        maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        theme: "indigo", //change to a purple theme
        croppingValidateDimensions: false,
        secure: true,
        // public_id: params.uid
      },(error, result) => {
        $('.up_loading').hide();
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          store.collection('users').doc(params.uid).set({
            photoUrl: result.info.secure_url
          }, {merge: true})
          .then(()=>{
            Swal.fire({
              icon: 'success',
              text: 'Successfully changed!'
            })
          })
        }
       
      });
      */



    },
    '/course/:id':function(params){
      $('.top').show();
      $('.footer').hide();
      $('.top-title').html(`Course`);
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
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
      $('.top').show();
      $('.footer').hide();
      $('.top-title').html(`Lives`);
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
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
      <div class="list_past" id="past_list">
     <center> <div class="spinner-border text-success" role="status">
      <span class="visually-hidden">Loading...</span>
       </div></center>
      </div>
      </div>

      </body>
      `

      getLives((live, ended)=>{
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
          <a href="#!/live/details/${live[i].id}">Register</a>
          </div>
        `;   
        }

        
          const list_past = document.querySelector('.list_past');
          list_past.innerHTML = '';
          if(ended.length==0){
            list_past.innerHTML = `<div class="sad">
            <div class="sad_img"><img src="../images/anxiety.png"></div>
            <div class="sad_text">No Exam is Here!</div>
            <div class="sad_subtext">...</div>
            </div>`;
          }
          for(let i=0; i<ended.length; i++){
            list_past.innerHTML +=`
            <div class="live-card kalpurush">
            <div class="live-bg"><img src="${ended[i].img_link}"/></div>
            <div class="title">${ended[i].title}</div>
            <div id="s-time-${i}" class="time">${dateForm(ended[i].start_time)} ${timeForm(ended[i].start_time)}</div>
            <div class="badge"><img src="../images/${ended[i].type}.png"/></div>
            <a href="#!/live/details/${ended[i].id}">Details</a>
            </div>
          `;
          }
        
         

        
       

        


      })

    },
    '/live/details/:id': function(params){
      $('.top').show();
      $('.footer').hide();
      $('.top-title').html(`Live`);
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
      app.innerHTML = `
      <div class="body">
      <div class="live-post">

      <center><div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
      </div></center>
      </div>

      <div style="display:none;" class="comments kalpurush">
          <div class="comment-title"><div>Comments<span id="cmnt_count"></span></div></div>
          
          <div class="comment-form"></div>
          <div id="all_comments">
          <center><div class="spinner-border text-secondary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div></center>
          </div>

         
          
          </div>

          <div class="title-with-count"></div>
          <div class="participants"></div>

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
          
          if(data.isPublished){
            $('#live_register').hide();
          }

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

            // $('.comment-form').html(`<form id="comment_form">
            // <div class="form-group">
            // <textarea class="form-control" id="comment_value" rows="3"></textarea>
            // </div>
            // <button type="submit" class="btn btn-primary">Comment</button>
            // </form>`);
            //   document.getElementById('comment_form').addEventListener('submit',e=>{
            //     e.preventDefault();
            //     let cmnt =  $('#comment_value').val();
            //     if(cmnt.trim() != ''){
            //       store.collection('lives').doc(params.id).collection('comments').add({     
            //             comment: cmnt,
            //             name: std_name,
            //             UID: UID,
            //             at: (new Date()).toISOString()
            //       }).then(()=>{
            //         Toast.fire({
            //           icon: 'success',
            //           title: 'Commented!'
            //         })
            //       })
            //     }
            //   })


          } else {
            $('#live_register').click(function() {
              Swal.fire({
                'icon': 'warning',
                text: 'Please sign in first!'
              });
            });

            // $('.comment-form').html(`
            // <div class="reg_nb">You must sign in to comment!</div>
            // `)
          }

           //participants
           let pt = Object.entries(data.reg_std);
           //console.log(pt);
          const pt_view = document.querySelector('.participants');
          pt_view.innerHTML =``;
          $('.title-with-count').html(`Participants(${pt.length})`);
           for(let i=0; i<pt.length; i++){
            // console.log(pt[i][1]);
            let pt_status = `<i class="icofont-tick-mark"></i>`;
            if(!pt[i][1].attend) pt_status = `<i class="icofont-ui-press"></i>`
              pt_view.innerHTML += `
              <div class="pt">
              <div class="pt_name">${pt[i][1].name}</div>
              <div class="pt_status">${pt_status}</div>
              </div>
              `
           }
           
        
      });
    }

   


    //comments
    /*
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

    */




    },
    '/live/start/:id': function(params){
      $('.top').hide();
      $('.footer').hide();
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
                              score: 0
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
                            <div class="body live_container">
                                <div class="exam-container">
                              <div class="exam_top">
                                <div class="exam-title kalpurush">
                                <div class="exam_name">${myexam.title}</div><small>Time: ${myexam.duration} min | NFEW: ${parseFloat(myexam.neg)} </small>
                                </div>
                                <div style="display: none;" class="score">
                                <div class="score-time"></div>
                                </div>
                                <div class="exam-nb kalpurush"></div>
                              </div>

                            
                                <div class="questions"></div>
                              
                              <center><div class="exam_submit animate__animated animate__flipInX" id="submit">
                              <div class="ex-timer"></div>
                              <div class="ans-count animate__animated animate__bounceIn"><span id="u_ans"></span>/<span id="t_q"></span></div>
                              <div class="ex-submit">সাবমিট</div>
                              </div></center>
                              
                                </div>
                                </div>
                            `);
                            var ans = [],
                              exp = [],
                              userAns = [],
                              score = 0,
                              wrong = 0,
                              na = 0,
                              neg = parseFloat(myexam.neg);
                            questions = myexam.questions;
                            $('#t_q').text(questions.length);
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

                            let click = 0;
                  
                            $(".opt").on("click", function () {
                              $('.ans-count').show();
                              click++;
                              $('#u_ans').text(click)
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
                                $(".ex-timer").html(
                                  `<img src="../images/clock.png" height="20px"> <div> ${min} : ${secs} • LIVE</div>`
                                );
                              }
                            }, 1000);
                  
                            jQuery(document).ready(function ($) {
                              if (window.history && window.history.pushState) {
                                $(window).on("popstate", function () {
                                  clearInterval(timer);
                                  $(".exam_submit").hide(20);
                                });
                              }
                            });
                  
                            $("#submit")
                              .off()
                              .click(function () {
                                Swal.fire({
                                  icon: 'question',
                                  text: 'Do you want to submit?',
                                  showConfirmButton: true,
                                  showCancelButton: true,
                                  confirmButtonText: 'Yes'
          
                              }).then(res=>{
                                if(res.isConfirmed){
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
                  
                                        // $(".score").show();
                                        
                                        // $(".score-time").html(
                                        //   `<i class="icofont-ui-clock"></i><br />সময় <br> <span class="score-num">${
                                        //     initialMin - 1 - minute
                                        //   }:${59 - sec}</span>`
                                        // );

                                        console.log(score);
                                        let myAns = userAns.join('|');
                                        store.collection('lives').doc(params.id).set({
                                          reg_std: {
                                            [UID]: {
                                              score: score-(wrong*neg),
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
                                          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                                          <span class="visually-hidden">Loading...</span>
                                          </div><br>
                                          <div  class="sad_text animte__animated animate_fadeIn">Submitting your answer sheet!</div>
                                          <div class="sad_subtext">Please wait!</div>
                                          </div>
                                          `
                                          Swal.fire({
                                            icon: 'success',
                                            text: 'Successfully submitted!'
                                          })
                                        });

                                        store.collection('users').doc(UID).set({
                                          live_exams: {
                                          [params.id]: {
                                            name: myexam.title,
                                            total: myexam.questions.length,
                                            date: (new Date()).toString(),
                                            neg: parseFloat(neg),
                                            score: score-(wrong*neg),
                                            wrong: wrong
                                          }
                                        }
                                        }, {merge: true}).then(()=>{
                                          app.innerHTML = `
                                          <div class="sad">
                                          <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                                          <span class="visually-hidden">Loading...</span>
                                          </div><br>
                                          <div  class="sad_text animte__animated animate_fadeIn">Organizing your score!</div>
                                          <div class="sad_subtext">Please wait!</div>
                                          </div>
                                          `
                                        })

                                        console.log(myscore);

                                        store.collection('globalRank').doc(mygroup).set({
                                          [UID]:{   
                                            score: myscore + (score-(wrong*neg))
                                          }
                                        }, {merge: true}).then(()=>{
                                          app.innerHTML = `
                                          <div class="sad">
                                          <div class="sad_img"><img src="https://i.postimg.cc/HLv7Y86M/7518748.png"></div>
                                          <div  class="sad_text animte__animated animate_fadeIn">Successfully submitted your exam!</div>
                                          <div class="sad_subtext">Result will be published soon!</div>
                                          </div>
                                          `
                                        })

                                }
                              })
                                        
                                          
                                    
                          })

                  
                          }
                        }else{
                          //Not available by time
                          $('.top').show();
                          $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
                          app.innerHTML=`
                          <div class="sad">
                          <div class="sad_img"><img src="../images/goal.png"></div>
                          <div class="sad_text">Exam finished!</div>
                          <div class="sad_subtext">Result will be publish soon!</div>
                          </div>
                          `    
                        }
                    } else {
                      $('.top').show();
                      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
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
                    $('.top').show();
                    $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
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
                $('.top').show();
                $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
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
              $('.top').show();
              $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
              app.innerHTML=`
                  <div class="sad">
                  <div class="sad_img"><img src="../images/goal.png"></div>
                  <div class="sad_text">Please login!</div>
                  </div>
                  `
            }
      }else{
        //PUBLISHED RESULT
        $('.top').show();
        $('.top-title').html(`${snap.data().title}`);
        $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
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
        if(myexam.reg_std[UID] && myexam.reg_std[UID].ans){
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

                    // console.log(userAns);
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
                                    
                                    $("#" + userAns[i]).css({
                                      background: "#384dc5",
                                      color: "var(--light)",
                                      "font-weight": "bold",
                                      "box-shadow" : "0px 2px 5px rgba(0,0,0,.2)"
                                    });

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

                                  $("#" + userAns[i]).css({
                                    background: "#384dc5",
                                    color: "var(--light)",
                                    "font-weight": "bold",
                                    "box-shadow" : "0px 2px 5px rgba(0,0,0,.2)"
                                  });

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
        }else{
          $('.top').show();
          $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
          $('.answersheet').html(`
          <div class="body">
              <div class="exam-container">
             <div class="exam_top">
              <div class="exam-title kalpurush">
              <div class="exam_name">${myexam.title}</div><small>Time: ${parseInt(myexam.duration)} min | NFEW: ${myexam.neg} </small>
              </div>
            <div class="warning"><i class="icofont-ban"></i> You didn't participated in this exam.</div>
            
              <div class="exam-nb kalpurush"></div>
             </div>
          

            
          
              <div class="questions"></div>
             
             </div>
             
              </div>
          `);
          var ans = [],
            exp = [],
            score = 0,
            wrong = 0,
            na = 0,
            neg = myexam.neg;

        
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

                      let e;
                      $(".explanation").show();
                   
                      
                      for (let k = 0; k < ans.length; ++k) {
                        e = k;
                        e = "#exp-" + e;
                        $(e).html(
                          `<b style="color: green;">Solution:</b><br>${exp[k]}`
                        );

                        $("#" + ans[k] + " .st").addClass("cr");

                       
                      }

                     

                        
                      
                      MathJax.typeset();

                 
                      
                                                     
        }
          
          $('#result_tab').click(function(){
            const standings = document.querySelector('.standings');
            standings.innerHTML = '';
            let Objresults = Object.entries(myexam.reg_std);
            //console.log(Objresults);
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
                  <div class="scoreandtime">
                  <div class="score">${results[i].score}</div>                 
                  <div class="stand_time">${results[i].time.min}:${addZero(results[i].time.sec)}</div>
                  </div>

                  </div>
                  `
                }else{
                  standings.innerHTML += `
                  <div class="stand">
                  <div class="std_name">${i+1}. ${results[i].name}</div>
                  <div class="scoreandtime">
                  <div class="score">${results[i].score}</div>                 
                  <div class="stand_time">${results[i].time.min}:${addZero(results[i].time.sec)}</div>
                  </div>
                  </div>
                  `
                }
              }else{
                standings.innerHTML += `
                <div class="stand">
                  <div class="name">${i+1}. ${results[i].name}</div>
                  <div class="scoreandtime">
                  <div class="score">${results[i].score}</div>                 
                  <div class="stand_time">${results[i].time.min}:${addZero(results[i].time.sec)}</div>
                  </div>
                  </div>
                  `
              }
              
            }
           
          })

      }
       
        
    })


      
    },
    "/live/ans/:examId/:userId": function(params){
      $('.top').show();
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
      app.innerHTML = `
      <div class="body">
      <center>Loading....</center>
      </div>
      `
      store.collection('lives').doc(params.examId).get().then(snap=>{
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
                    userAns = (myexam.reg_std[params.userId].ans).split('|').map(Number),

                    score = 0,
                    wrong = 0,
                    na = 0,
                    neg = parseFloat(myexam.neg);

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
                                  myexam.reg_std[params.userId].time.min
                                }:${myexam.reg_std[params.userId].time.sec}</span>`
                              );
                              
                              
                              $('#correctP').html(`${((score/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#wrongP').html(`${((wrong/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#negativeP').html(`${(((wrong*neg)/questions.length)*100).toPrecision(3)}%
                              `)
                              $('#answeredP').html(`${(100-(((questions.length - (score + wrong))/(questions.length))*100)).toPrecision(3)}%
                              `)
      })
    },
    "/resource":function(params){
      $('.top').show();
      $('.top-title').html(`Resources`);
      $('.top .icon').html(`<img src="../images/pencil-case.png">`);
      $('.footer').show();
      $('.footertext').hide();
        $('.footerIcon').removeClass('footerIconActive');
            if($('.rsc')[0].classList[3] === undefined){
        $('.rsc').addClass('footerIconActive');
        $($($('.rsc')[0].parentNode)[0].lastElementChild).show();
        //$('.top_logo').html(`<div onclick="window.history.back()" class="top_app_title"><div class="animate__animated animate__fadeIn top_dir"><img src="../images/pencil-case.png" height="30px"></div> <div class="animate__animated animate__fadeIn top_text">Resources</div></div>`);
        }
      app.innerHTML = `
      <div class="body">
      <a href="#!/add_resources"><div class="floating-button"><img src="../images/plus.png"></div></a>
      <div class="search-bar">
      <div class="search-icon"><img src="../images/search.png"></div>
      <input autocomplete="off" id="search-book" placeholder="সার্চ করুন..." type="text" name="search">
      </div>
    
      <div id="search-result">
      <div class="search-result"></div>
      </div>
    
      <div class="resource-head">Newly Added</div>
      <div class="new-resources">
      <div class="progress">
      <div class="indeterminate red" ></div>
    </div>
      </div>
    
    
      <div class="resource-head">All Resources</div>
      <div class="all-resources">
      <div class="resource-item">
      <div class="progress ">
      <div class="indeterminate red" ></div>
    </div>
    </div>
    
    <div class="resource-item">
    <div class="progress ">
    <div class="indeterminate red" ></div>
    </div>
    </div>
    
    <div class="resource-item">
    <div class="progress ">
    <div class="indeterminate red" ></div>
    </div>
    </div>
    
    <div class="resource-item">
    <div class="progress ">
    <div class="indeterminate red" ></div>
    </div>
    </div>
    
    <div class="resource-item">
    <div class="progress ">
    <div class="indeterminate red" ></div>
    </div>
    </div>
    
    <div class="resource-item">
    <div class="progress ">
    <div class="indeterminate red" ></div>
    </div>
    </div>
    
      </div>
      </div>
      `
    
      const newr = document.querySelector('.new-resources');
      store.collection('books').orderBy("creationTime", "desc").limit(6).onSnapshot(snap=>{
        newr.innerHTML = "";
        snap.forEach(item=>{
            newr.innerHTML += `
            <a target="_blank" href="${item.data().link}"><div class="resource-item">
            <div class="book-cat">${item.data().cat}</div>
            <div class="book-cover"><img src="${item.data().cover}"></div>
            <div class="book-title">${item.data().title}</div>
            <div class="book-size">${item.data().size}</div>
            <div class="book-author">${item.data().author}</div>
            </div></a>
            `
        });
    
      });
    
      const allr = document.querySelector('.all-resources');
      const search_result = document.querySelector('.search-result');
        store.collection('books').onSnapshot(snap=>{
          allr.innerHTML = "";
          search_result.innerHTML = "";
          snap.forEach(item=>{
            allr.innerHTML += `
            <a target="_blank" href="${item.data().link}"><div class="resource-item">
            <div class="book-cat">${item.data().cat}</div>
            <div class="book-cover"><img src="${item.data().cover}"></div>
            <div class="book-title">${item.data().title}</div>
            <div class="book-author">${item.data().author}</div>
            </div></a>
            `
    
            search_result.innerHTML += `
            <div id="search-item">
            <a target="_blank" href="${item.data().link}"><div class="search-item">
            <div class="book-cover-s"><img src="${item.data().cover}"></div>
            <div class="search-details">
            <div class="book-title-s">${item.data().title}</div>
            <div class="book-author">${item.data().author}</div>
            <div class="book-cat-s">${item.data().cat}</div>
            </div>
            </div></a></div>
            `
          })
        });
    
        //Searching books
        document.getElementById('search-book').addEventListener('keyup', e=>{
          if(e.key = 'Enter'){
            e.preventDefault();
            let filter = ($('#search-book')[0].value).toUpperCase();
            if(filter.length>0) $('.search-result').show();
            else $('.search-result').hide();
            let allPost = document.querySelectorAll('.book-title-s');
            for(let i=0; i<allPost.length; i++){
              s_tag = allPost[i].innerText.toUpperCase();
              
              if(s_tag.indexOf(filter) > -1) {
                allPost[i].parentNode.parentNode.parentNode.style.display = "block";
                // $('.search-result').hide();
              } else{
                allPost[i].parentNode.parentNode.parentNode.style.display = "none";
                // $('.search-result').show();
              }
    
            }
          }
        });
        if(UID === 'DDkJGuxqAlNCxJO1QjnJT4bAoyX2') $('.floating-button').hide();
    
    }, 
    "/news":function(params){
      $('.top').show();
      $('.top-title').html(`News`);
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
      $('.footer').hide();
      // $('.footertext').hide();
      //   $('.footerIcon').removeClass('footerIconActive');
      //       if($('.nws')[0].classList[3] === undefined){
      //   $('.nws').addClass('footerIconActive');
      //   $($($('.nws')[0].parentNode)[0].lastElementChild).show();
      //   //$('.top_logo').html(`<div onclick="window.history.back()" class="top_app_title"><div class="animate__animated animate__fadeIn top_dir"><img src="../images/pencil-case.png" height="30px"></div> <div class="animate__animated animate__fadeIn top_text">Resources</div></div>`);
      //   }

        app.innerHTML = `
        <div class="body">
        <div class="news-list">
        
        <ul class="o-vertical-spacing o-vertical-spacing--l">
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
        <li class="blog-post o-media">
          <div class="o-media__figure">
            <span class="skeleton-box" style="width:100px;height:80px;"></span>
          </div>
          <div class="o-media__body">
            <div class="o-vertical-spacing">
              <h3 class="blog-post__headline">
                <span class="skeleton-box" style="width:55%;"></span>
              </h3>
              <p>
                <span class="skeleton-box" style="width:80%;"></span>
                <span class="skeleton-box" style="width:90%;"></span>
                <span class="skeleton-box" style="width:83%;"></span>
                <span class="skeleton-box" style="width:80%;"></span>
              </p>
              <div class="blog-post__meta">
                <span class="skeleton-box" style="width:70px;"></span>
              </div>
            </div>
          </div>
        </li>
      </ul>
        
       

        </div>
        
        </div>
        `

        store.collection('news').onSnapshot(snap=>{
         const news_list = document.querySelector('.news-list');
         news_list.innerHTML = '';

         let news = [];
          snap.forEach(nw=>{
            nw = {...nw.data(), id: nw.id};
            let d  = (new Date(nw.created_at)).toString();
            news.push({...nw});
          });

          news.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          });
          
          news.forEach(nw=>{
            news_list.innerHTML += `
           <a href="#!/news_details/${nw.id}"> <div class="news">
            <div class="img"><img src="${nw.img_link}"/></div>
            <div class="details">
            <div class="title">${nw.title}</div>
            <div class="date"><i class="icofont-wall-clock"></i> ${moment(nw.created_at).fromNow()}</div>
            </div>
            </div></a>
            `
          });

        })
    },
    "/news_details/:id": function(params){
      $('.top').show();
      $('.footer').hide();
      $('.top-title').html(`News`);
      $('.top .icon').html(`<div class="top_arrow animate__animated animate__fadeInRight" onclick="window.history.back()"><i class="icofont-rounded-left"></i></div>`);
      app.innerHTML = `
      <div class="body">
      
      <div class="news_wrap">
      
      <center><div class="spinner-grow text-success" role="status">
      <span class="visually-hidden">Loading...</span>
    </div></center>
      
      </div>
      
      </div>
      `

      store.collection('news').doc(params.id).get().then(snap=>{
        const news =  document.querySelector('.news_wrap');
        let d = (new Date(snap.data().created_at)).toString();
        $('.top-title').html(`<div class="news_top_title">${snap.data().title}</div>`);
        news.innerHTML = `
        <div class="news-head">
        <div class="title">${snap.data().title}</div>
        <div class="date">${dateForm(d)} | ${timeForm(d)}</div>
        </div>

        <div class="news_img"><img src="${snap.data().img_link}"></div>

        <div class="news-body">
          ${snap.data().news}
        </div>
        
        `
      })
    },
    "/progress/:id": function(params){
      $('.top').show();
      $('.top-title').html(`Progress`);
      $('.top .icon').html(`<img src="../images/progress.png">`);
      $('.footer').show();
      $('.footertext').hide();
        $('.footerIcon').removeClass('footerIconActive');
            if($('.prg')[0].classList[3] === undefined){
        $('.prg').addClass('footerIconActive');
        $($($('.prg')[0].parentNode)[0].lastElementChild).show();
        //$('.top_logo').html(`<div onclick="window.history.back()" class="top_app_title"><div class="animate__animated animate__fadeIn top_dir"><img src="../images/pencil-case.png" height="30px"></div> <div class="animate__animated animate__fadeIn top_text">Resources</div></div>`);
        }
      app.innerHTML = `
      <div class="body">
      <center>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
      <center>
      </div>
      `
db.ref('app/Control').once('value', control=>{
  if(control.val().isRank === true){
    store.collection('users').doc(params.id).get().then(snap=>{
      if(snap.data().live_exams){
        app.innerHTML = `
        <div class="body">
        <div class="name_big animate__animated animate__backInLeft">${snap.data().name} </div>
        <div class="small_text animate__animated animate__fadeInDown">${snap.data().inst}</div>
        <div class="pie">
        <div class="section_title"><img src="../images/pie.png"> এক্সাম পরিসংখ্যান</div>
        <div class="progress_pie">
        
        <div class="chart_state">
        </div>
        <div class="chart">
        <canvas id="pie_chart" width="100%" height="100%"></canvas>
        </div>
        </div>
        </div>

        <div class="progress_chart">
        <div class="section_title"><img src="../images/bar.png"> লাইভ এক্সাম পরিসংখ্যান(%)</div>
        <canvas id="myChart"></canvas>
        </div>
        <div class="exams"></div>
        </div>
        `
      let live_exams = snap.data().live_exams;
      live_exams = Object.entries(live_exams);
      let lives = [];
      let data = [];
      let lebels = []
      let totalQ = 0;
      let totalW = 0;
      let totalC = 0;
      let totalAns = 0;
      for(i in live_exams){
        lives.push({
          name: live_exams[i][1].name,
          score: parseFloat(live_exams[i][1].score),
          date: live_exams[i][1].date,
          id: live_exams[i][0],
          total: parseInt(live_exams[i][1].total)
        });
        totalQ += parseInt(live_exams[i][1].total);
        let neg = parseFloat(live_exams[i][1].neg);
        let wrong = parseFloat(live_exams[i][1].wrong);
          totalW += wrong;
          totalC += parseFloat(live_exams[i][1].score) + (wrong*neg);
          totalAns += parseFloat(live_exams[i][1].score) + (wrong*neg) + wrong;
      }

      $('.chart_state').html(`
      <div>
      <div class="chart_lebel">সঠিক:</div>
      <div class="chart_value">${totalC} টি</div>
      </div>

      <div>
      <div class="chart_lebel">ভুল: </div>
      <div class="chart_value">${totalW} টি</div>
      </div>

      <div>
      <div class="chart_lebel">মোট এক্সাম: </div>
      <div class="chart_value">${lives.length} টি</div>
      </div>

      <div>
      <div class="chart_lebel">মোট প্রশ্ন: </div>
      <div class="chart_value">${totalQ} টি</div>
      </div>
      
      <div>
      <div class="chart_lebel">উত্তর করেছো: </div>
      <div class="chart_value">${totalAns} টি</div>
      </div>

      <div>
      <div class="chart_lebel">ফাঁকা রেখেছো: </div>
      <div class="chart_value">${totalQ - totalAns} টি</div>
      </div>
      `)

      lives.sort((a,b)=>new Date(a.date) - new Date(b.date));
      const exams = document.querySelector('.exams');
      exams.innerHTML = '';
      for(i in lives){
        data.push(parseInt(100 * (parseFloat(lives[i].score)/lives[i].total)));
        lebels.push(lives[i].name);
        exams.innerHTML += `
        <a href="#!/live/start/${lives[i].id}"><div class="live_exam_prg">
        <div class="prg_prg" style="width: ${(100 * (parseFloat(lives[i].score)/lives[i].total)).toPrecision(2)}%; height: 100%"></div>
        <div class="prg_det">
        <div class="prg_name">${lives[i].name}</div>
        <div class="prg_date">${dateForm(lives[i].date)} ${timeForm(lives[i].date)}</div>
        </div>
        <div class="prg_mark">${lives[i].score}/<span class="total">${lives[i].total}</span> <span>(${(100 * (parseInt(lives[i].score)/lives[i].total)).toPrecision(2)}%)</span></div>
        </div></a>
        `
      }



     

      //progrsss chart
      Chart.defaults.global.defaultFontFamily = "Hind Siliguri";
      Chart.defaults.global.legend.display = false;
      var ctx = document.getElementById("myChart").getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'line',
          data: {
              labels: lebels,
              datasets: [{
                  label: 'Live Exam', // Name the series
                  data: data, // Specify the data values array
                  fill: false,
                  borderColor: 'crimson', // Add custom color border (Line)
                  backgroundColor: 'crimson', // Add custom color background (Points and Fill)
                  borderWidth: 2 // Specify bar border width
              }]},
          options: {
            plugins:{
              legend: {
                lebels: {
                  font: {
                    family: "'Poppins'"
                  }
                }
              }
            },
            title: {
              display: false,
              text: 'Live Exam Progress in Parcentage'
            },
            scales: {
              xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Exam Name'
                },
            
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'marks in %'
                  },
            }]
            // Add to prevent default behaviour of full-width/height 
          }
        }
      });

      //pie 
      let pie_chart = document.getElementById("pie_chart");
      
      var pieData = {
          labels: [
              "ভুল",
              "সঠিক",
              "ফাঁকা",
          ],
          datasets: [
              {
                  data: [totalW, totalC, totalQ-totalAns],
                  backgroundColor: [
                      "#e74c3c",
                      "#52be80",
                      "#3498db",
                      // "orange"
                  ]
              }],
              options: {
                plugins:{
                  legend: {
                    display: false
                  }
                }
              }
      };

      var pieChart = new Chart(pie_chart, {
        type: 'pie',
        data: pieData
      });

      }else{
        app.innerHTML = `
        <body>
        <div class="sad">
        <div class="sad_img"><img src="../images/progress.png"></div>
        <div class="sad_text">Praticipate in live exams & see your progress here!</div>
        <div class="sad_subtext">...</div>
        </div>
        </body>
        `
      }
      

    })
  } else {
    app.innerHTML = `
        <body>
        <div class="sad">
        <div class="sad_img"><img src="../images/progress.png"></div>
        <div class="sad_text">We hide your rank & progress during exam.</div>
        <div class="sad_subtext">...</div>
        </div>
        </body>
        `
  }
})
     
    },
    "/rank" : function(){
      $('.top .icon').html(`<img src="../images/rank.png">`);
      $('.top').show();
      $('.app_loader').show();
      $('.footer').show();
      $('.footertext').hide();
      $('.footerIcon').removeClass('footerIconActive');
      if($('.rnk')[0].classList[3] === undefined){
        $('.rnk').addClass('footerIconActive');
        $($($('.rnk')[0].parentNode)[0].lastElementChild).show();
      }
      $('.top-title').html(`Rank`);
    
      app.innerHTML = `<div class="body"><span class="rank-doc">
      <center>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </center>
      </span></div>`;
      db.ref('app/Control').once('value', control=>{
        if(control.val().isRank === true){
      store.collection("globalRank").doc('hum').get().then(snap=> {
        $('.app_loader').hide();
     $('.rank-doc').html(`
      <div class="ladder">
      <div class="top3content">
      <center>
      <div class="spinner-grow text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </center>
    
      </div>
      <div class="my_pos"><img src="../images/position.png" height="30px"> Your Merit: <span id="pos"></span>/<span class="tp"></span></div>
      <div id="board" class="board"></div>
      <div id="page"></div>
      </div>
     `);
     $('#pos').html(`?`)
    // console.log(myuid)
      let i=0;
      let ladder = [];
      let htmlArr = [];
      let ss = Object.entries(snap.data());
      // console.log(ss);
      for(let i=0; i<ss.length; i++){
        ladder.push({
          name: ss[i][1].name,
          score: ss[i][1].score,
          inst: ss[i][1].inst,
          uid: ss[i][0]
        })
      }
      ladder.sort((a,b)=>{return b.score - a.score});
      console.log(ladder)
    
      $('.tp').text(ladder.length);
  
      $('.top3content').html(`
      <div class="before"></div>
      <div class="after"></div>
      <div class="twrap"><div class="top2"><img src="https://robohash.org/${ladder[1].name}.png?set=set4"></div> <div class="topName">${getNickName(ladder[1].name)}</div></div>
      <div class="twrap"><div class="top1"><img src="https://robohash.org/${ladder[0].name}.png?set=set4"></div> <div class="topName">${getNickName(ladder[0].name)}</div> <div class="crown"><img src="../images/crown.png"></div></div>
      <div class="twrap"><div class="top3"><img src="https://robohash.org/${ladder[2].name}.png?set=set4"></div> <div class="topName">${getNickName(ladder[2].name)}</div></div>
      `)

      let board_std = ``;
      let k = 0;
      ladder.forEach(item=>{
        
        k++;
      if(k===1){
        board_std += `
        <a href="#!/progress/${item.uid}">
        <div class="l">
        <div style="display:flex; gap: 10px;">
        <div class="pandn">
        <div class="top-pos"><img src="../images/badge1.png" height="30px"></div>
        </div>

        <div class="s-info">
        <div class="l-name">${item.name}</div>
        <div class="instName">${item.inst}</div>
        </div>
        </div>


        <div class="sandt">
        <div class="l-score" >${item.score}</div>
        </div>
       
       
        </div>
        
        </a>
        `
      }
      else if(item.uid === myuid){
        
          $('#pos').html(`${k}`)
        
          board_std  += `
        <a href="#!/progress/${item.uid}">
        <div class="l" style="background: crimson; color: #fff">
        <div style="display:flex; gap: 10px;">
        <div class="pandn">
        <div class="u-pos">${k}</div>
        </div>

        <div class="s-info">
        <div class="l-name">${item.name}</div>
        <div class="instName">${item.inst}</div>
        </div>
        </div>


        <div class="sandt">
        <div class="l-score" style="color: #fff">${item.score}</div>
        </div>
       
       
        </div>
        
        </a>
        `
      }else{
        board_std  += `
        <a href="#!/progress/${item.uid}">
        <div class="l">
        <div style="display:flex; gap: 10px;">
        <div class="pandn">
        <div class="u-pos">${k}</div>
        </div>

        <div class="s-info">
        <div class="l-name">${item.name}</div>
        <div class="instName">${item.inst}</div>
        </div>
        </div>


        <div class="sandt">
        <div class="l-score" >${item.score}</div>
        </div>
       
       
        </div>
        </a>
        `
      }
      });
    
      $('#page').pagination({
        dataSource: ladder,
        pageSize: 20,
        callback: function(data, pagination) {
            $('#board').html(board_std);
        }
      });
        });
      } else {
        app.innerHTML = `
            <body>
            <div class="sad">
            <div class="sad_img"><img src="../images/rank.png"></div>
            <div class="sad_text">We hide your rank & progress during exam.</div>
            <div class="sad_subtext">...</div>
            </div>
            </body>
            `
      }

      });

    },
    "/upload":function(){
      app.innerHTML = `
      <div class="body">
      <center class="up_loading">
      <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
      <span class="visually-hidden">Loading...</span>
      </div>
      </center>
      <div class="image_preview">
      <img  
      id="uploadedimage" 
      src="">
    </img> 
      </div>
<center><button class="btn btn-primary" id="upload_widget">Upload</button></center>

      </div>
      `

      $('.up_loading').hide();
   

      const cloudName = "dj493l0jy"; // replace with your own cloud name
     const uploadPreset = "notes_humanity"; // replace with your own upload preset

// Remove the comments from the code below to add
// additional functionality.
// Note that these are only a few examples, to see
// the full list of possible parameters that you
// can add see:
//   https://cloudinary.com/documentation/upload_widget_reference

const myWidget = cloudinary.createUploadWidget(
  {
    cloudName: cloudName,
    uploadPreset: uploadPreset,
    cropping: false, //add a cropping step
    showAdvancedOptions: true,  //add advanced options (public_id and tag)
    sources: [ "local"], // restrict the upload sources to URL and local files
    multiple: false,  //restrict upload to a single file
    // folder: "user_images", //upload files to the specified folder
    // tags: ["users", "profile"], //add the given tags to the uploaded files
    // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
    clientAllowedFormats: ["jpg", "png"], //restrict uploading to image files only
    maxImageFileSize: 2000000,  //restrict file size to less than 2MB
    // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
    theme: "indigo", //change to a purple theme
    croppingValidateDimensions: false,
    secure: true,
  },
  (error, result) => {
    $('.up_loading').hide();
    if (!error && result && result.event === "success") {
      console.log("Done! Here is the image info: ", result.info);
      document
        .getElementById("uploadedimage")
        .setAttribute("src", result.info.secure_url);
    }
  }
);

document.getElementById("upload_widget").addEventListener("click", function () {
    
  $('.up_loading').show();
  myWidget.open();


  },false);


      // let image;
      // $('#note_image').change(function(e){
      //   let file = document.getElementById('note_image').files[0];
      //   let reader = new FileReader();
      //   reader.readAsDataURL(file);
      //   reader.onload = function(){
      //     $('.image_preview').html(`<img src="${reader.result}"/>`)
      //     console.log(reader.result);
      //     image = reader.result;
      //   }
      // })

      // $('#upload_note').click(function(){
        
      //   fetch('https://api.imgbb.com/1/upload?key=40de54474ba7c5ca47389542e527e848', {
      //     method: 'POST',
      //     body: JSON.stringify(image)
      //   })
      //   .then(res=>res.json())
      //   .then(data=>{
      //     console.log('Success', data);
      //   })
      //   .catch(err=>{
      //     console.log('Error: ', err);
      //   })
        

      // })

    //   var imagekit = new ImageKit({
    //     publicKey : "public_ywvfLYknKzYw5PdL+SfwhXvwd5w=",
    //     urlEndpoint : "https://ik.imagekit.io/brittoedu",
    //     authenticationEndpoint : "http://www.yourserver.com/auth",
    // });
    
    // URL generation
    // var imageURL = imagekit.url({
    //     path : "/default-image.jpg",
    //     transformation : [{
    //         "height" : "500",
    //         "width" : "400"
    //     }]
    
    // });
    
    // Upload function internally uses the ImageKit.io javascript SDK
    // function upload(data) {
    //     var file = document.getElementById("note_image");
    //     imagekit.upload({
    //         file : file.files[0],
    //         fileName : "abc1.jpg",
    //         tags : ["tag1"]
    //     }, function(err, result) {
    //         console.log(arguments);
    //         console.log(imagekit.url({
    //             src: result.url,
    //             transformation : [{ height: 500, width: 400}]
    //         }));
    
    //     })
    
    // }
    }








}).resolve();

// }else{
//   app.innerHTML = `
//   <center>
//   We will come back very soon!
//   We are just testing all the thing working well or not!
//   Stay with us!
//   </center>
//   `
// }
// }, 5000)

router.notFound(function(){
  app.innerHTML=`404`;
});



// $('a').click(function(){
//   history.pushState({page: 1}, "home", "#!/")
// });

function getNickName(myname){
myname = myname.trim();
myname = myname.split(' ');
// console.log(myname);
return  myname[myname.length-1];
}