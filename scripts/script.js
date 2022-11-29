const router = new Navigo(null, true, '#!');
const app = document.getElementById('app');

// paid exam without login

if(localStorage.getItem("id") == null || localStorage.getItem("id") == undefined || localStorage.getItem("id") == ""){
    $('.footer').hide();
    app.innerHTML = `
<div class="body">

<div class="login_card">
<div class="britto">
<img src="../images/puzzle.png">
<div class="britto-text">Britto Edu.</div>
</div>


<center id="warn"><div class="loading_id">
<div class="spinner-border" style="width: 2rem; height: 2rem;" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
</div></center>

<form id="checkId">
<div class="input-group mb-3">
<span class="input-group-text">আইডি</span>
<input type="number" class="form-control" name="id" placeholder="তোমার আইডি দাও এখানে..." aria-label="Title" aria-describedby="basic-addon1" required>
</div>

<center><button class="btn btn-success" type="submit">লগইন</button></center>
</form>

</div>

<br>
            <div class="section">
            <div class="section-heading">
            <div style="font-size: 17px; font-weight: bold" class="sec-sec1"><div class="icon"><img src="../images/choose.png"></div><div class="text">দ্রুত প্রাকটিস</div></div>
            <div class="more">...</div>
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
            </div>
            </div>

</div>




`
$('.sp').hide();

const checkId = document.getElementById('checkId')
checkId.addEventListener('submit', e=>{
    e.preventDefault();
    $('.loading_id').show();

    db.ref('users').child(checkId.id.value).once('value',snap=>{
        $('.loading_id').hide();
        if(snap.val()){
            console.log(snap.val());
            localStorage.setItem('id', checkId.id.value);
            localStorage.setItem('name', snap.val().name);
            localStorage.setItem('inst', snap.val().inst);
            window.location.reload();
        }else{
            $('#warn').html(`
            <div class="form_warn">
            তোমার আইডিটি পাওয়া যায়নি!
            </div>
            `)
        }
    })

});
}else{
    $('.sp').hide();
    let user = {
        name: localStorage.getItem('name'),
        id: localStorage.getItem('id'),
        inst: localStorage.getItem('inst')
    }
    let UID = user.id;
    router.on({
        '/': function(){
          $('.footer').hide();
          $('.top-title').text('Britto Edu.');
          $('.top .icon').html(`<img src="../images/puzzle.png">`);
  
          app.innerHTML =`
          <div class="body">
          <div class="user">

          <div class="std_welcome">স্বাগতম,</div>
          <div class="std_name_top">${user.name}</div>
          </div>

<div id="extra_info" class="login_card">
<center style="color: green; font-family: 'Kalpurush'">তোমার আরও কিছু তথ্য প্রয়োজন! সঠিকভাবে ফোন নম্বর দিয়ে সাবমিট করো।</center>
<form id="getInfo">
<div class="input-group mb-3">
<span class="input-group-text">ফোন নম্বর</span>
<input type="tel" class="form-control" name="phone" placeholder="ফোন নম্বর" aria-label="Title" aria-describedby="basic-addon1" required>
</div>

<div class="input-group mb-3">
<span class="input-group-text">অভিভাবকের ফোন নম্বর</span>
<input type="tel" class="form-control" name="guardian" placeholder="অভিভাবকের ফোন নম্বর" aria-label="Title" aria-describedby="basic-addon1" required>
</div>




<center><button class="btn btn-success" type="submit">সাবমিট</button></center>
</form>
</div>
<br>

          <div class="section">
          <div class="section-heading">
          <div class="sec-sec1"><div class="icon"><img src="../images/bell.png"></div><div class="text">Live Exams</div></div>
          <a href="#!/live/list"><div class="more">সবগুলো দেখো</div></a>
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
            <div style="font-size: 17px; font-weight: bold" class="sec-sec1"><div class="icon"><img src="../images/choose.png"></div><div class="text">দ্রুত প্রাকটিস</div></div>
            <div class="more">...</div>
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
          `

          $('#extra_info').hide();


          db.ref('users/'+UID).on('value', snap=>{
            console.log(snap.val());
            if(!snap.val().phone){
          $('#extra_info').show();

          

            }else{
          $('#extra_info').hide();
            }

          });

      const getInfo = document.getElementById('getInfo')
      getInfo.addEventListener('submit', e=>{
    e.preventDefault();

    Swal.fire({
      text: 'সবকিছু ঠিক আছে?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: 'হ্যাঁ',
      cancelButtonText: 'না!'
    }).then(res=>{
      if(res.isConfirmed){
        $('.loading_id').show();
        let data = {
          phone: getInfo.phone.value,
          guardian: getInfo.guardian.value
        }
        console.log(data);
       try {
        db.ref('users/'+UID).update(data);
        console.log('success');
        $('.loading_id').hide();
        $('#card_area').hide();

        Swal.fire('ধন্যবাদ!', 'success')
       } catch (error) {
        console.log(error)
       }
      }
  })
   
  
});
        

        //live exam
        db.ref('app/live').on('value', snap=>{
            // snap.val().id = 'irOqw2bOF0OLCavF1EKV';
            store.collection('lives').doc(snap.val().id).onSnapshot(live=>{
              let l = live.data();
              $('#live_banner').html(`
            <a href="#!/live/details/${snap.val().id}"><div class="live-bg"><img src="${l.img_link}"/></div>
              <div class="title">${l.title}</div>
              <div  class="time">${dateForm(l.start_time).split(' ')[0]} ${dateForm(l.start_time).split(' ')[1]} ${timeForm(l.start_time)} - ${timeForm(l.end_time)}</div>
              <div id="s-time" class=""></div>
              <div class="badge"><img src="../images/${l.type}.png"/></div></a>
            `);
            $('.live-card .details').html(`<a href="#!/live/details/${snap.val().id}">Details</a>`)
              clearInterval(z);
            liveTimer(l.start_time, l.end_time, '#live_countdown', '#s-time');
            })
          })
          
          //Routine
           //routine
           $('.rtn').click(function(){
            let g = $(this)[0].id;
            if(g=='sci'){
              $('#rtn-img').html(`<img src="../images/Ads/hsc_science.png"/>`)
              $('#routineModal').modal('show');
            }else{
              $('#rtn-img').html(`<img src="https://i.postimg.cc/W4kyH74B/Routine-4.png"/>`)
              $('#routineModal').modal('show');
            }
          });
        },
        '/live/list': function(){
            console.log('live/list')           
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
      
      
              ended.sort((a, b)=>{
                return new Date(a.end_time) - new Date(b.end_time);
              })
      
              
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

                <ul class="nav nav-tabs" id="myTab" role="tablist">
               
                <li class="nav-item" role="presentation">
                  <button class="nav-link title-with-count active" id="result_tab" data-bs-toggle="tab" data-bs-target="#particip" type="button" role="tab" aria-controls="particip" aria-selected="true">Participants</button>
                </li>
      
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="answer_tab" data-bs-toggle="tab" data-bs-target="#learn" type="button" role="tab" aria-controls="answer" aria-selected="false">Learning</button>
                </li>
      
              </ul>
      
              <div class="tab-content" id="myTabContent">
      
              <div class="tab-pane fade show active" id="particip" role="tabpanel" aria-labelledby="particip-tab">
              <div class="participants"></div>
              </div>
      
                <div class="tab-pane fade" id="learn" role="tabpanel" aria-labelledby="answer-tab">
                <div class="learnings">
                <div class="video">
                <center>
                <div class="spinner-border text-danger" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
                </center>
                </div>
                </div>
                </div>
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
                
                if(data.isPublished){
                  $('#live_register').hide();
                }
      
                $('.live_option').hide();
                setTimeout(function(){
                  $('.live_option').show();
                  $('#opt-loader').hide();
                },2000)
      
                
                clearInterval(y);
                
                liveDetailsTimer(data.start_time, data.end_time, '#live_det #timer', '#live_det #status', `.st-${params.id}`, data.title, params.id)
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
                                    name: user.name,
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
      
            //       // $('.comment-form').html(`<form id="comment_form">
            //       // <div class="form-group">
            //       // <textarea class="form-control" id="comment_value" rows="3"></textarea>
            //       // </div>
            //       // <button type="submit" class="btn btn-primary">Comment</button>
            //       // </form>`);
            //       //   document.getElementById('comment_form').addEventListener('submit',e=>{
            //       //     e.preventDefault();
            //       //     let cmnt =  $('#comment_value').val();
            //       //     if(cmnt.trim() != ''){
            //       //       store.collection('lives').doc(params.id).collection('comments').add({     
            //       //             comment: cmnt,
            //       //             name: std_name,
            //       //             UID: UID,
            //       //             at: (new Date()).toISOString()
            //       //       }).then(()=>{
            //       //         Toast.fire({
            //       //           icon: 'success',
            //       //           title: 'Commented!'
            //       //         })
            //       //       })
            //       //     }
            //       //   })
      
      
            //     } else {
            //       $('#live_register').click(function() {
            //         Swal.fire({
            //           'icon': 'warning',
            //           text: 'Please sign in first!'
            //         });
            //       });
      
            //       // $('.comment-form').html(`
            //       // <div class="reg_nb">You must sign in to comment!</div>
            //       // `)
                }
               
                //videos
                const video = document.querySelector('.video');
                video.innerHTML = '';
                if(data.videos){
                  for(let i=0; i<data.videos.length; i++){
                    video.innerHTML += `
                    <div class="video-item">
                    <div class="video_title">${data.videos[i].title}</div>
                  <video width="100%" controls allowfullcreen="true"> 
                   <source src="https://drive.google.com/uc?export=download&id=${data.videos[i].linkId}" type='video/mp4'>
                   </video>
                   </div>
                    `
                  }
                }else{
                  $('.video').html(`
                  <div class="sad">
                  <div class="sad_img"><img src="https://i.postimg.cc/g0HPm4BN/7653057.png"></div>
                  <div class="sad_text">No Videos Here</div>
                  <div class="sad_subtext">You will be able to see videos when uploaded!</div>
                  </div>
                  `)
      
                  
                }
      
                 //participants
                 const pt_view = document.querySelector('.participants');
                 if(data.reg_std){
                  let pt = Object.entries(data.reg_std);
                  //console.log(pt);
      
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
      
                 }else{
                  pt_view.innerHTML = `
                  <div class="sad">
                  <div class="sad_img"><img src="https://i.postimg.cc/DzrbFkTH/5169273.png"></div>
                  <div class="sad_text">No one is here.</div>
                  <div class="sad_subtext">Registered users will be shown here.</div>
                  </div>
                  `
                 }
      
      
                
                 
              
            })
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
                                                <div class="sad_img"><img src="https://i.postimg.cc/HLv7Y86M/7518748.png"></div>
                                                <div  class="sad_text animte__animated animate_fadeIn">Successfully submitted your exam!</div>
                                                <div class="sad_subtext">Result will be published soon!</div>
                                                </div>
                                                `
                                                Swal.fire({
                                                  icon: 'success',
                                                  text: 'Successfully submitted!'
                                                })
                                              });
      
                                            //   store.collection('users').doc(UID).set({
                                            //     live_exams: {
                                            //     [params.id]: {
                                            //       name: myexam.title,
                                            //       total: myexam.questions.length,
                                            //       date: (new Date()).toString(),
                                            //       neg: parseFloat(neg),
                                            //       score: score-(wrong*neg),
                                            //       wrong: wrong
                                            //     }
                                            //   }
                                            //   }, {merge: true}).then(()=>{
                                            //     app.innerHTML = `
                                            //     <div class="sad">
                                            //     <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                                            //     <span class="visually-hidden">Loading...</span>
                                            //     </div><br>
                                            //     <div  class="sad_text animte__animated animate_fadeIn">Organizing your score!</div>
                                            //     <div class="sad_subtext">Please wait!</div>
                                            //     </div>
                                            //     `
                                            //   })
      
                                            //   console.log(myscore);
      
                                            //   store.collection('globalRank').doc(mygroup).set({
                                            //     [UID]:{   
                                            //       score: myscore + (score-(wrong*neg))
                                            //     }
                                            //   }, {merge: true}).then(()=>{
                                            //     app.innerHTML = `
                                            //     <div class="sad">
                                            //     <div class="sad_img"><img src="https://i.postimg.cc/HLv7Y86M/7518748.png"></div>
                                            //     <div  class="sad_text animte__animated animate_fadeIn">Successfully submitted your exam!</div>
                                            //     <div class="sad_subtext">Result will be published soon!</div>
                                            //     </div>
                                            //     `
                                            //   })
      
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
                <button class="nav-link active" id="answer_tab" data-bs-toggle="tab" data-bs-target="#answer" type="button" role="tab" aria-controls="home" aria-selected="true">Answersheet</button>
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
          '/live/result/:id': function(params){
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
                <button class="nav-link active" id="answer_tab" data-bs-toggle="tab" data-bs-target="#answer" type="button" role="tab" aria-controls="home" aria-selected="true">Answersheet</button>
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
        '/start_practice_live/:key/:name': function(params){
            $('.top').hide();
            $('.footer').hide();
            $('.top-title').text('');
              app.innerHTML=`<div class="exam-doc" id="practice-exam">
              <center><div class="spinner-grow text-success" role="status">
                            <span class="visually-hidden">Loading...</span>
                             </div></center>
              </div>`;
              store.collection('lives').doc(params.key).get().then(snap=> {
                  // $('.app_loader').hide();
                        $('.countdown').show();
                        let myexam = snap.data();
                        
                      $('.exam-doc').html(`
                        <div class="body">
                            <div class="exam-container">
                           <div class="exam_top">
                            <div class="exam-title kalpurush">
                            <div class="exam_name">${params.name}</div><small>সময়: ${myexam.duration} মিনিট | নেগেটিভ: ${myexam.neg} </small>
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
                           <div class="ex-submit">Submit</div>
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
                          neg = parseFloat(myexam.neg);
                        questions = myexam.questions;
                        $('#t_q').text(questions.length);
                        shuffle(questions);
                        // console.log(questions);
                        $(".exam-nb").html(`.::::.`);
              
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
                          $('#u_ans').text(click);
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
                              `<img src="../images/clock.png" height="30px"> <div> ${min} : ${secs}</div>`
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
      }).resolve();
}

router.on({
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
  '/start_practice_live/:key/:name': function(params){
    $('.top').hide();
    $('.footer').hide();
    $('.top-title').text('');
      app.innerHTML=`<div class="exam-doc" id="practice-exam">
      <center><div class="spinner-grow text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                     </div></center>
      </div>`;
      store.collection('lives').doc(params.key).get().then(snap=> {
          // $('.app_loader').hide();
                $('.countdown').show();
                let myexam = snap.data();
                
              $('.exam-doc').html(`
                <div class="body">
                    <div class="exam-container">
                   <div class="exam_top">
                    <div class="exam-title kalpurush">
                    <div class="exam_name">${params.name}</div><small>সময়: ${myexam.duration} মিনিট | নেগেটিভ: ${myexam.neg} </small>
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
                   <div class="ex-submit">Submit</div>
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
                  neg = parseFloat(myexam.neg);
                questions = myexam.questions;
                $('#t_q').text(questions.length);
                shuffle(questions);
                // console.log(questions);
                $(".exam-nb").html(`.::::.`);
      
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
                  $('#u_ans').text(click);
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
                      `<img src="../images/clock.png" height="30px"> <div> ${min} : ${secs}</div>`
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
}).resolve();
