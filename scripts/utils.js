const router = new Navigo(null, true, '#!');
const app = document.getElementById('app');

firebase.auth().onAuthStateChanged(user=> {
    if(user) {
        if(user.uid === 'DDkJGuxqAlNCxJO1QjnJT4bAoyX2' || user.uid ==='QZ2qJHQCULbgVdyxibW9X1PhYQc2' || user.uid === 'qMzC9uUs7MUeryJlWUfz0SkSr7Y2' || user.uid === 'x9bZ0eoKuCRnVuCHVTraIVbKR9b2') {
            router.on({
                '/': function() {
                  app.innerHTML = `
                  <div class="body">
                  <a href="#!/daily_quiz"><div class="vert-scroll siliguri">
                        <div class="course-card">
                        <div class="details">
                        <div class="title">Daily Quiz</div>
                        </div>
                        </div></a>
            
                        <a href="#!/courses"><div class="course-card">
                        <div class="details">
                        <div class="title">Courses</div>
                        </div>
                        </div></a>
            
                        
            
                        <a href="#!/live"><div class="course-card">
                        <div class="details">
                        <div class="title">Live Exam</div>
                        </div>
                        </div></a>
            
                        <a href="#!/AddQ"><div class="course-card">
                        <div class="details">
                        <div class="title">Add Q</div>
                        </div>
                        </div></a>
            
            
                        <a href="#!/addNews"><div class="course-card">
                        <div class="details">
                        <div class="title">Add News</div>
                        </div>
                        </div></a>
            
            
                    </div>
                  
                  </div>
                  
                  `
                },
                '/daily_quiz': function(){
                    app.innerHTML = `
                    <div class="body">
                    <form id="dq">
                    <div class="row">
                    <input type="text" name="q" placeholder="Question"/>
                    </div>
                    <div class="row">
            
                    <div class="col">
                    <input type="text" name="opt1" placeholder="opt1"/>
                    </div>
                    <div class="col">
                    <input type="text" name="opt2" placeholder="opt2"/>
                    </div>
            
                    </div>
            
                    <div class="row">
            
                    <div class="col">
                    <input type="text" name="opt3" placeholder="opt3"/>
                    </div>
                    <div class="col">
                    <input type="text" name="opt4" placeholder="opt4"/>
                    </div>
            
                    </div>
            
                    <div class="row">
                    <input type="number" name="ans" placeholder="ans"/>
                    </div>
                    
                    <br>
            
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    
                    `
            
                    const dq = document.getElementById('dq');
            
                    dq.addEventListener('submit', e=> {
                        e.preventDefault();
            
                        let data = {
                            q: dq.q.value,
                            options: [dq.opt1.value, dq.opt2.value, dq.opt3.value, dq.opt4.value],
                            ans: parseInt(dq.ans.value)
                        }
            
                        db.ref('app/dailyQuize').set({
                            data
                        }, (error) => {
                            if(error){
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Failed!'
                                })
                            }
                            else{
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Success!'
                                })
                            }
                        });
            
                        
                    })
                },
                'courses/': function() {
                    app.innerHTML = `
                    <div class="body">
                    <form id="add_course">
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" name="title" placeholder="title"/>
                    </div>
            
                    <div class="input-group mb-3">
                    <input type="text" class="form-control" name="sub_title" placeholder="sub_title"/>
                    </div>
            
                    Start time
                    <div class="input-group mb-3">
                    <input type="datetime-local" class="form-control" name="start_time" placeholder="time"/>
                    </div>
            
                    End time
                    <div class="input-group mb-3">
                    <input type="datetime-local" class="form-control" name="end_time" placeholder="time"/>
                    </div>
            
                    <div class="input-group mb-3">
                    <textarea type="text" name="details" class="form-control" placeholder="details"></textarea>
                    </div>
            
                    <div class="input-group mb-3">
                    <input type="text" name="subject_exam" class="form-control" placeholder="subject_exam"/>
                    </div>
            
                    <div class="input-group mb-3">
                    <input type="text" name="previous_year" class="form-control" placeholder="previous_year"/>
                    </div>
            
                    <div class="input-group mb-3">
                    <input type="text" name="model_test" class="form-control" placeholder="model_test"/>
                    </div>
            
                    <div class="input-group mb-3">
                    <input type="number" name="fee" class="form-control" placeholder="fee"/>
                    </div>
            
                    <div class="input-group mb-3">
                    <input type="number" name="prev_fee" class="form-control" placeholder="prev_fee"/>
                    </div>
            
                    <div class="input-group mb-3">
                    <input type="text" name="course_plan_link" class="form-control" placeholder="course_plan_link"/>
                    </div>
            
                    <div class="input-group mb-3">
                    <input type="text" name="img_link" class="form-control" placeholder="img_link"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                    </div>
                    `
            
            
                    const add_course = document.getElementById('add_course');
            
                    add_course.addEventListener('submit', e=> {
                        e.preventDefault();
                        let data = {
                            title: add_course.title.value,
                            sub_title: add_course.sub_title.value,
                            start_time: (new Date(add_course.start_time.value)).toString(),
                            end_time: (new Date(add_course.end_time.value)).toString(),
                            details: add_course.details.value,
                            subject_exam: add_course.subject_exam.value,
                            previous_year: add_course.previous_year.value,
                            model_test: add_course.model_test.value,
                            fee: add_course.fee.value,
                            prev_fee: add_course.prev_fee.value,
                            course_plan_link: add_course.course_plan_link.value,
                            img_link: add_course.img_link.value
            
                        }
            
                        console.log(data);
                        store.collection('courses').add(data)
                        .then(doc=>{
                            console.log(doc.id);
            
                        }).catch(error=> {
                            console.log(error);
                        })
                    })
                },
                '/live': function() {
                    app.innerHTML = `
                    <div class="body">
                    <form id="add_course">
                    <div class="mb-3">
                    <input type="text" class="form-control" name="title" placeholder="title"/>
                    </div>
            
                    <div class="mb-3">
                    <input type="text" name="sub_title" class="form-control" placeholder="sub_title"/>
                    </div>
            
                    <div class="mb-3">
                    Start time
                    <input type="datetime-local" class="form-control" name="start_time" placeholder="time"/>
                    </div>
            
                    <div class="mb-3">
                    End time
                    <input type="datetime-local" class="form-control" name="end_time" placeholder="time"/>
                    </div>
            
                    <div class="mb-3">
                    <textarea type="text" class="form-control" name="details" placeholder="details"></textarea>
                    </div>
            
                    <div class="mb-3">
                    <input type="number" class="form-control" name="duration" placeholder="Duration">
                    </div>
            
                    <div class="mb-3">
                    <input type="text" class="form-control" name="neg" placeholder="Negative">
                    </div>
            
            
                    <div class="mb-3">
                    <select name="type" class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>type</option>
                    <option value="Free">Free</option>
                    <option value="Pro">Premium</option>
                    </select>
                    </div>
            
                    <div class="mb-3">
                    <input type="text" class="form-control" name="img_link" placeholder="img_link"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            
                    <br>
                    <div class="list-wrap">
                    <div class="list-title">Exams</div>
                    <div class="list_upcoming" id="live_list">
                   <center> <div class="spinner-border text-success" role="status">
                    <span class="visually-hidden">Loading...</span>
                     </div></center>
                    </div>
                    </div>
            
            
                    </div>
                    `
                    const add_course = document.getElementById('add_course');
            
                    add_course.addEventListener('submit', e=> {
                        e.preventDefault();
                        let data = {
                            title: add_course.title.value,
                            sub_title: add_course.sub_title.value,
                            start_time: (new Date(add_course.start_time.value)).toString(),
                            end_time: (new Date(add_course.end_time.value)).toString(),
                            details: add_course.details.value,
                            type: add_course.type.value,
                            img_link: add_course.img_link.value,
                            isPublished: false,
                            show_q: false,
                            duration: add_course.duration.value,
                            neg: parseInt(add_course.neg.value),
                            isReg: true
            
                        }
            
                        console.log(data);
                        store.collection('lives').add(data)
                        .then(()=>{
                           Swal.fire({
                            icon: 'success',
                            text: 'Exam Added!'
                           })
            
                        }).catch(error=> {
                            console.log(error);
                        })
                    });
            
                    store.collection('lives').get().then(snap=>{
                        live_list.innerHTML = '';   
                        let i=-1; 
                        snap.forEach(item=>{
                            i++;
                                let live = item.data();
                                // console.log(live);
                            const list_upcoming = document.querySelector('.list_upcoming');
                            clearInterval(x);
                                list_upcoming.innerHTML +=`
                                <div class="live-card kalpurush">
                                <div class="live-bg"><img src="${live.img_link}"/></div>
                                <div class="title">${live.title}</div>
                                <div id="s-time-${i}" class="time">${dateForm(live.start_time)} ${timeForm(live.start_time)}</div>
                                <div class="badge"><img src="../images/${live.type}.png"/></div>
                                <div class="live_countdown-${i} lc"></div>
                                <a href="#!/live/details/${item.id}">Details</a>
                                </div>
                                `;
                        
                                liveTimer(live.start_time, live.end_time, '.live_countdown-'+i, '#s-time-'+i);
                                
                            })
                    })
                },
                '/AddQ': function(){
                    app.innerHTML = `
            
                    <div id="content">
                    <div id="right"> 
                    <center><div class="total-q"></div></center>
                    <div class="ad_head">Add Question/View Question Bank</div>
                   <center> <button id="show-qbf" class="btn btn-success">Show</button>
                    <button id="hide-qbf" class="btn btn-warning">Hide</button></br></center>
                    <br>
                    <form id="lq">
                    <div class="input-group mb-3">
                    <span class="input-group-text">q</span>
                    <textarea type="text" class="form-control" name="q" placeholder="question" aria-label="Username" aria-describedby="basic-addon1" required></textarea>
                   </div>
            
                   <div class="input-group mb-3">
                    <span class="input-group-text">A</span>
                    <input type="text" class="form-control" name="opt1" placeholder="Option 1" aria-label="Username" aria-describedby="basic-addon1" required>
                   </div>
            
                   <div class="input-group mb-3">
                    <span class="input-group-text">B</span>
                    <input type="text" class="form-control" name="opt2" placeholder="Option 2" aria-label="Username" aria-describedby="basic-addon1" required>
                   </div>
            
                   <div class="input-group mb-3">
                    <span class="input-group-text">C</span>
                    <input type="text" class="form-control" name="opt3" placeholder="Option 3" aria-label="Username" aria-describedby="basic-addon1" required>
                   </div>
            
                   <div class="input-group mb-3">
                    <span class="input-group-text">D</span>
                    <input type="text" class="form-control" name="opt4" placeholder="Option 4" aria-label="Username" aria-describedby="basic-addon1" required>
                   </div>
            
                   <select class="form-select form-select-sm" name="ans" aria-label=".form-select-sm example" required>
                    <option selected>Select Ans</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">D</option>
                    </select>
            
                 <div class="mb-3">
                    <label for="exampleFormControlTextarea1"  class="form-label">Explanation</label>
                    <textarea class="form-control" name="ex" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
            
                  tags**
                  <div id="tags"></div>
            
                  <select class="form-select form-select-sm" name="chap" aria-label=".form-select-sm example" required>
                    <option selected>Chapters</option>
                    <option value="chap1">Chapter 1</option>
                    <option value="chap2">Chapter 2</option>
                    <option value="chap3">Chapter 3</option>
                    <option value="chap4">Chapter 4</option>
                    <option value="chap5">Chapter 5</option>
                    <option value="chap6">Chapter 6</option>
                    <option value="chap7">Chapter 7</option>
                    <option value="chap8">Chapter 8</option>
                    <option value="chap9">Chapter 9</option>
                    <option value="chap10">Chapter 10</option>
                    <option value="chap12">Chapter 12</option>
                    <option value="chap13">Chapter 13</option>
                    <option value="chap14">Chapter 14</option>
                    <option value="chap15">Chapter 15</option>
                    <option value="chap16">Chapter 16</option>
                    </select><br>
            
                        <center><button type="submit" class="btn btn-primary">Add Question to Bank</button></center>
                        </form>
                        <br>
                    
                        <center><div class="q-count"></div></center>
                        <div class="ad_head">Get Question From Bank</div>
                        <form id="gq">
                        tags**
                              <div style="display: flex; gap: 10px; flex-wrap: wrap;" id="tags_bank"></div>
                              <select class="form-select form-select-sm" name="chap" aria-label=".form-select-sm example" required>
                                <option selected>Chapters</option>
                                <option value="chap1">Chapter 1</option>
                                <option value="chap2">Chapter 2</option>
                                <option value="chap3">Chapter 3</option>
                                <option value="chap4">Chapter 4</option>
                                <option value="chap5">Chapter 5</option>
                                <option value="chap6">Chapter 6</option>
                                <option value="chap7">Chapter 7</option>
                                <option value="chap8">Chapter 8</option>
                                <option value="chap9">Chapter 9</option>
                                <option value="chap10">Chapter 10</option>
                                <option value="chap12">Chapter 12</option>
                                <option value="chap13">Chapter 13</option>
                                <option value="chap14">Chapter 14</option>
                                <option value="chap15">Chapter 15</option>
                                <option value="chap16">Chapter 16</option>
                                </select><br>
                        
                                <center><button type="submit" class="btn btn-primary">Submit</button></center>
                                </from>
                                <div class="questions_bank"></div>
                                </div>
                    
                                <div id="left">
                                <div class="ad_head">Temporary Question Set for Exam</div>
                                <center>
                                <button id="publish" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#add_q_e">+Publish</button>
                                <button id="delete_temp" class="btn btn-danger">-Delete</button>
                                
                                </center>
                                
                                <br>
                                <div class="questions_temp">
                                <center><div class="spinner-grow" role="status">
                                <span class="visually-hidden">Loading...</span>
                              </div></center>
                                </div>
                                </div>
                                </div>
            
            
            
                                <div class="modal fade" id="add_q_e" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                       <div class="exams">
                                       <center><div class="spinner-border text-success" role="status">
                                       <span class="visually-hidden">Loading...</span>
                                     </div></center>
                                       </div>
                                       <div class="mb-3">
                                       <label for="e_id" class="form-label">ID</label>
                                       <input type="text" class="form-control" id="e_id" aria-describedby="emailHelp">
                                       <div id="emailHelp" class="form-text">Exam ID</div>
                                     </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button id="submit_q" type="button" class="btn btn-primary">OK</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
            
                    `
            
                    firebase.auth().onAuthStateChanged(user=> {
                        if(user) {
                           // console.log(user.uid)
            
                    
                   //total q
                //    store.collection('bank').onSnapshot(s=>{
                //     let i=0;
                //     s.forEach(item=>{
                //         i++;
                //     });
                //     $('.total-q').html(`Total Questions: <span>${i}</span>`)
                //    })
            
                    $('#lq').hide()
                    $('#publish').hide();
                    $('#show-qbf').click(function(){$('#lq').show()})
                    $('#hide-qbf').click(function(){$('#lq').hide()})
            
                    const lq = document.getElementById('lq');
                    let qlen = 0;
            
            
                    let TemporaryQuestions = [];
                   db.ref('liveTemporary').on('value', snap=>{
                    const questions_view = document.querySelector('.questions_temp'); 
                    if(snap.val() != null){
                        $('#publish').show();
                        let questions = snap.val().questions;
                        TemporaryQuestions =  questions;
                       qlen = questions.length;
                      
                        questions_view.innerHTML = '';
                        var ans = [];
                    for(let i=0; i<questions.length; i++){
                    ans.push(parseInt(questions[i].ans)+i*4);
                    questions_view.innerHTML += `
                    <div class="q-wrap">
                    <div class="question">
                    ${i+1}. ${questions[i].q}
                    </div>
                    <div class="option">
                    <div class="opt" id="${i+1+i*3}"><div class="st"></div>${questions[i].opt[0]}</div>
                    <div class="opt" id="${i+2+i*3}"><div class="st"></div>${questions[i].opt[1]}</div>
                    <div class="opt" id="${i+3+i*3}"><div class="st"></div>${questions[i].opt[2]}</div>
                    <div class="opt" id="${i+4+i*3}"><div class="st"></div>${questions[i].opt[3]}</div>
                </div>
                <div class="solution"><b>Solution:</b></br> ${questions[i].ex}</div>
                </div>`
                }
                for(let a=0; a<ans.length; a++){
                    $("#" + ans[a] + " .st").addClass("cr");
                }
            
                 MathJax.typeset();
                      }else {
                        qlen = 0;
                        $('#publish').hide();
                        $('#delete_temp').hide();
                        questions_view.innerHTML = '<center>Empty</center>';
                      }
                       
                   });
            
                   $('#delete_temp').click(function(){
                    Swal.fire({
                        icon: 'question',
                        text: 'Delete?'
                    }).then(res=>{
                        if(res.isConfirmed){
                            db.ref(`liveTemporary/questions`).remove();
                        }
                    })
                   })
                   
            
                    db.ref('tags').on('value', snap=>{
                        let tags = document.getElementById('tags');
                        let tags_bank = document.getElementById('tags_bank');
                        tags.innerHTML = '';
                        tags_bank.innerHTML = '';
                        let t = snap.val();
                        for(let i=0; i<t.length; i++){
                            tags.innerHTML += `
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="${t[i]}">
                            <label class="form-check-label" for="flexCheckDefault">
                                ${t[i]}
                            </label>
                            </div>
                            `
                            tags_bank.innerHTML += `
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="${t[i]}">
                            <label class="form-check-label" for="flexCheckDefault">
                                ${t[i]}
                            </label>
                            </div>
                            `
                        }
            
                    })
                    
                    //add to the bank
                    lq.addEventListener('submit', e=>{
                        e.preventDefault();
                        let exp = (lq.ex.value).trim() == '' ? '' : `<br> ${(lq.ex.value).replaceAll('\n', '<br/>')}`;
                        let options= [lq.opt1.value, lq.opt2.value, lq.opt3.value, lq.opt4.value]
                        let data = {
                            q: (lq.q.value).replaceAll('\n', '<br>'),
                            opt: options,
                            ans: parseInt(lq.ans.value),
                            ex: `${optChar[lq.ans.value]}.${options[parseInt(lq.ans.value)-1]}${exp}`
                        }
            
                    //    db.ref(`liveTemporary/questions/${len}`).update(data);
                        let tags=[lq.chap.value];
                        
                        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
                        for (var i = 0; i < checkboxes.length; i++) {
                        tags.push(checkboxes[i].value)
                        }
                        console.log(tags);
                        store.collection("bank").add({
                            q: (lq.q.value).replaceAll('\n', '<br>'),
                            opt: options,
                            ans: parseInt(lq.ans.value),
                            ex: `${optChar[lq.ans.value]}.${options[parseInt(lq.ans.value)-1]}${exp}`,
                            tags: tags,
                        }).then(()=>{
                            Swal.fire({             
                                icon: 'success',
                                title: 'Added to the bank!',
                                showConfirmButton: false,
                                timer: 1000
                              })
                        })
                    });
            
                    //Get from bank
                    const gq = document.getElementById('gq');
                    gq.addEventListener('submit', function(e){
                        e.preventDefault();
                        const questions_view = document.querySelector('.questions_bank');
                        questions_view.innerHTML = `<br><br><center><div class="spinner-grow text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div></center>`;
            
                        let tags=[gq.chap.value];
                        
                        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
                        for (var i = 0; i < checkboxes.length; i++) {
                        tags.push(checkboxes[i].value)
                        }
                        // console.log('getting...')
                        // console.log(tags);
                        
                        let questions = [];
                        store.collection('bank').where("tags", "array-contains", tags[1]).get().then(doc=>{
                           questions = [];
                          questions_view.innerHTML = '';
                            doc.forEach(element => {
                                if(tags[0] == "Chapters"){
                                    questions.push({...element.data(), id: element.id});
                                }else if(element.data().tags.includes(tags[0])){
                                    questions.push({...element.data(), id: element.id});
                                }
                                
                            });
                            len = questions.length;
                            // $('.q-count').html(`(${len})`);
                       
                        var ans = [];
                        for(let i=0; i<questions.length; i++){
                        ans.push(parseInt(questions[i].ans)+i*4);
                        questions_view.innerHTML += `
                        <div class="q-wrap">
                        <div class="question">
                        ${i+1}. ${questions[i].q}
                        <small>${questions[i].id}</small>
                        </div>
                        <div class="option">
                        <div class="opt" id="${i+1+i*3}"><div class="st"></div>${questions[i].opt[0]}</div>
                        <div class="opt" id="${i+2+i*3}"><div class="st"></div>${questions[i].opt[1]}</div>
                        <div class="opt" id="${i+3+i*3}"><div class="st"></div>${questions[i].opt[2]}</div>
                        <div class="opt" id="${i+4+i*3}"><div class="st"></div>${questions[i].opt[3]}</div>
                        </div>
                        <div class="solution"><b>Solution:</b></br> ${questions[i].ex}</div>
                        <center><button id="${questions[i].q}|${questions[i].opt[0]}|${questions[i].opt[1]}|${questions[i].opt[2]}|${questions[i].opt[3]}|${questions[i].ans}|${questions[i].ex}" class="add_q btn btn-success">+ Question</button>
                        <button id="${questions[i].q}|${questions[i].opt[0]}|${questions[i].opt[1]}|${questions[i].opt[2]}|${questions[i].opt[3]}|${questions[i].ans}|${questions[i].ex}" class="add_quiz btn btn-info">+ Daily Quiz</button>
                        <button id="del-${questions[i].id}" class="delete-b-q btn btn-danger">- Delete</button>
                        <a class="btn btn-warning" href="#!/edit/${questions[i].id}">+-Edit<a/>
                        </center>
                        </div>`
                        }
                        // for(let a=0; a<ans.length; a++){
                        //     $("#" + ans[a] + " .st").addClass("cr");
                        // }
            
                        MathJax.typeset();
            
                         op();
            
                        })
                    });
            
            
                    //publish the temporary question
                    $('#publish').click(function(){
                        let exams = document.querySelector('.exams');
                       
                        store.collection('lives').get().then(snap=> {
                            exams.innerHTML = '';
                            snap.forEach(item =>{
                                // console.log(item.data())
                                exams.innerHTML += `
                            <div class="exam_name">${item.data().title}</div>
                            <div class="exam_id">${item.id}</div>
                            `
                            });
                            
                        });
            
                        $('#submit_q').click(function(){
                          let id = $('#e_id').val();
                          store.collection('lives').doc(id).update({
                            questions: TemporaryQuestions
                          }).then(()=>{
                            Swal.fire({
                                icon: 'success',
                                text: 'Published!'
                            })
                          })
                            
                        })
                       })
            
                    }else{
                        app.innerHTML = `
                        <h2>You should Sign In</h2>
                        `
                    }
                });
                
            
                },
                '/edit/:id': function(params){
                    $('.top-title').html(`Edit`);
                    app.innerHTML = `
                    <div class="body">
                    
                    <form id="lq-edit">
                    <div class="input-group mb-3">
                    <span class="input-group-text">q</span>
                    <textarea type="text" class="form-control" name="q" placeholder="question" aria-label="Username" aria-describedby="basic-addon1" required></textarea>
                   </div>
            
                   <div class="input-group mb-3">
                    <span class="input-group-text">A</span>
                    <input type="text" class="form-control" name="opt1" placeholder="Option 1" aria-label="Username" aria-describedby="basic-addon1" required>
                   </div>
            
                   <div class="input-group mb-3">
                    <span class="input-group-text">B</span>
                    <input type="text" class="form-control" name="opt2" placeholder="Option 2" aria-label="Username" aria-describedby="basic-addon1" required>
                   </div>
            
                   <div class="input-group mb-3">
                    <span class="input-group-text">C</span>
                    <input type="text" class="form-control" name="opt3" placeholder="Option 3" aria-label="Username" aria-describedby="basic-addon1" required>
                   </div>
            
                   <div class="input-group mb-3">
                    <span class="input-group-text">D</span>
                    <input type="text" class="form-control" name="opt4" placeholder="Option 4" aria-label="Username" aria-describedby="basic-addon1" required>
                   </div>
            
                   <select class="form-select form-select-sm" name="ans" aria-label=".form-select-sm example" required>
                    <option selected>Select Ans</option>
                    <option value="1">A</option>
                    <option value="2">B</option>
                    <option value="3">C</option>
                    <option value="4">D</option>
                    </select>
            
                 <div class="mb-3">
                    <label for="exampleFormControlTextarea1"  class="form-label">Explanation</label>
                    <textarea class="form-control" name="ex" id="exampleFormControlTextarea1" rows="3"></textarea>
                  </div>
            
                  <div style="display: none;" id="tags"></div>
            
                  <select style="display:none;" class="form-select form-select-sm" name="chap" aria-label=".form-select-sm example" required>
                    <option selected>Chapters</option>
                    <option value="chap1">Chapter 1</option>
                    <option value="chap2">Chapter 2</option>
                    <option value="chap3">Chapter 3</option>
                    <option value="chap4">Chapter 4</option>
                    <option value="chap5">Chapter 5</option>
                    <option value="chap6">Chapter 6</option>
                    <option value="chap7">Chapter 7</option>
                    <option value="chap8">Chapter 8</option>
                    <option value="chap9">Chapter 9</option>
                    <option value="chap10">Chapter 10</option>
                    <option value="chap12">Chapter 12</option>
                    <option value="chap13">Chapter 13</option>
                    <option value="chap14">Chapter 14</option>
                    <option value="chap15">Chapter 15</option>
                    <option value="chap16">Chapter 16</option>
                    </select><br>
            
                        <center><button type="submit" class="btn btn-primary">Add Question to Bank</button></center>
                        </form>
                    
                    
                    </div>
                    `
                    let prev_tags;
                    const lq = document.getElementById('lq-edit');
                    store.collection('bank').doc(params.id).onSnapshot(snap=>{
                        let d = snap.data();
                       let ex = (d.ex).replaceAll('<br>', '\n');
              
                        lq.q.value = (d.q).replaceAll('<br>', '\n');
                        lq.opt1.value = d.opt[0];
                        lq.opt2.value = d.opt[1];
                        lq.opt3.value = d.opt[2];
                        lq.opt4.value = d.opt[3];
                        lq.ans.value = d.ans;
                        lq.ex.value = ex.replace(/.*/, "").substr(1);
                        prev_tags = d.tags;
            
                    });
            
                    
            
                    lq.addEventListener('submit', e=>{
                        e.preventDefault();
                        let exp = (lq.ex.value).trim() == '' ? '' : `<br> ${(lq.ex.value).replaceAll('\n', '<br/>')}`;
                        let options= [lq.opt1.value, lq.opt2.value, lq.opt3.value, lq.opt4.value]
                        let data = {
                            q: (lq.q.value).replaceAll('\n', '<br>'),
                            opt: options,
                            ans: parseInt(lq.ans.value),
                            ex: `${optChar[lq.ans.value]}.${options[parseInt(lq.ans.value)-1]}${exp}`
                        }
            
                    //    db.ref(`liveTemporary/questions/${len}`).update(data);
                        let tags=[lq.chap.value];
                        
                        var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
                        for (var i = 0; i < checkboxes.length; i++) {
                        tags.push(checkboxes[i].value)
                        }
                        console.log(tags);
                        store.collection("bank").doc(params.id).set({
                            q: (lq.q.value).replaceAll('\n', '<br>'),
                            opt: options,
                            ans: parseInt(lq.ans.value),
                            ex: `${optChar[lq.ans.value]}.${options[parseInt(lq.ans.value)-1]}${exp}`,
                            tags: prev_tags,
                        },{merge: true}).then(()=>{
                            Toast.fire({
                                icon: 'success',
                                title: 'Added!'
                              })
                        })
                    });
            
                    //tags
                    db.ref('tags').on('value', snap=>{
                        let tags = document.getElementById('tags');
                        tags.innerHTML = '';
                        let t = snap.val();
                        for(let i=0; i<t.length; i++){
                            tags.innerHTML += `
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="${t[i]}">
                            <label class="form-check-label" for="flexCheckDefault">
                                ${t[i]}
                            </label>
                            </div>
                            `
                        }
            
                    })
                },
                '/addFromPrev': function(){
                    app.innerHTML = `
                    <body>
            
                    <h2>Get</h2>
            
                   
                    </body>
                    `
                
            
                    db.ref('tags').on('value', snap=>{
                        let tags = document.getElementById('tags_bank');
                        tags.innerHTML = '';
                        let t = snap.val();
                        for(let i=0; i<t.length; i++){
                            tags.innerHTML += `
                            <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="${t[i]}">
                            <label class="form-check-label" for="flexCheckDefault">
                                ${t[i]}
                            </label>
                            </div>
                            `
                        }
                     })
            
            
                    //  store.collection('subjectExams').doc('bio2').collection('chap-1').doc('Q9EQF6OjexU9rAJtx5sr').get().then(snap=>{
                    //     console.log(snap.data())
                    //      let questions = snap.data().questions;
                    //      len = questions.length;
                    //      const questions_view = document.querySelector('.questions');
                    //      questions_view.innerHTML = '';
                    //      var ans = [];
                    //      for(let i=0; i<questions.length; i++){
                    //      ans.push(parseInt(questions[i].ans)+i*4);
                    //      questions_view.innerHTML += `
                    //      <div id="" class="q-wrap">
                    //      <div class="question">
                    //      ${i+1}. ${questions[i].q}
                    //      </div>
                    //      <div class="option">
                    //      <div class="opt" id="${i+1+i*3}"><div class="st"></div>${questions[i].opt[0]}</div>
                    //      <div class="opt" id="${i+2+i*3}"><div class="st"></div>${questions[i].opt[1]}</div>
                    //      <div class="opt" id="${i+3+i*3}"><div class="st"></div>${questions[i].opt[2]}</div>
                    //      <div class="opt" id="${i+4+i*3}"><div class="st"></div>${questions[i].opt[3]}</div>
                    //      </div>
                    //      <div class="solution"><b>Solution:</b></br> ${questions[i].ex}</div>
                    //      </div>`
                    //      }
                    //      for(let a=0; a<ans.length; a++){
                    //          $("#" + ans[a] + " .st").addClass("cr");
                    //      }
                    //  })
            
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
            
                    <div class="e-status"></div>
                    <button id="publish_q" class="btn btn-primary">Toggle Publish Q</button>
                    <button id="publish_res" class="btn btn-primary">Toggle Publish Result</button>
                    <button id="publish_reg" class="btn btn-primary">Toggle Register</button>
                    <button id="publish_front" class="btn btn-primary">Post On Front Page</button>
                    <center><a href="#!/live/edit/${params.id}">Edit</a></center>
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
                    //   console.log(data);
                    
                        $('.e-status').html(`
                        <div class="stat">Question Show: ${data.show_q}</div>
                        <div class="stat">isPublished: ${data.isPublished}</div>
                        <div class="stat">isReg: ${data.isReg}</div>
                        `)
                      
            
                      $('#publish_q').click(function(){
                        Swal.fire({
                            icon:'question',
                            text: 'Are you sure?'
                        }).then((res)=>{
                            if(res.isConfirmed){
                                store.collection('lives').doc(params.id).update({
                                    show_q: !data.show_q
                                }).then(()=>{Swal.fire({icon:'success', text:'Changed!'})})
                            }
                        });
                      });
            
                      $('#publish_res').click(function(){
                        Swal.fire({
                            icon:'question',
                            text: 'Are you sure?'
                        }).then((res)=>{
                            if(res.isConfirmed){
                                store.collection('lives').doc(params.id).update({
                                    isPublished: !data.isPublished
                                }).then(()=>{Swal.fire({icon:'success', text:'Changed!'})})
                            }
                        });
                      })
            
                      $('#publish_reg').click(function(){
                        Swal.fire({
                            icon:'question',
                            text: 'Are you sure?'
                        }).then((res)=>{
                            if(res.isConfirmed){
                                store.collection('lives').doc(params.id).update({
                                    isReg: !data.isReg
                                }).then(()=>{Swal.fire({icon:'success', text:'Changed!'})})
                            }
                        });
                      })
            
                      $('#publish_front').click(function(){
                        Swal.fire({
                            icon:'question',
                            text: 'Are you sure?'
                        }).then((res)=>{
                            if(res.isConfirmed){
                                db.ref('app/live').update({
                                    id: params.id
                                });
                                Swal.fire({icon:'success', text:'Changed!'})
                            }
                        });
                      })
            
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
                        <button id="live_register" class="btn btn-success">Register</button>
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
                              Swal.fire({
                                icon: 'question',
                                text: 'Do you want to register?',
                                confirmButton: true,
                                cancelButton: true,
                                confirmButtonText: 'Yes',
                                cancelButtonText: 'No'
                              }).then(res=>{
                                if(res.isConfirmed){
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
                                    }).catch(err=>{
                                      console.log(err);
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
                //   let all_comments = document.getElementById('all_comments');
                //   store.collection('lives').doc(params.id).collection('comments').onSnapshot(snap=>{
                //     let comments = []; 
                //     comments.sort((a, b) => new Date(b.at) - new Date(a.at));
                    
                //     all_comments.innerHTML = ``;
                //     snap.forEach(item=>{
                //       comments.push({...item.data(), id: item.id});
                //      });
                //      $('#cmnt_count').html(`(${comments.length})`);
                //      if(comments.length === 0) all_comments.innerHTML = `<div class="no-cmnt">No comments. Be the first to comment.</div>`
                      
                //      comments.forEach(cmnt=>{
                //       let edit = `<div id="${cmnt.id}" class="comment-delete">Delete</div>`
                //       if(cmnt.UID != UID){
                //         edit = '';
                //       }
                //       all_comments.innerHTML += `
                //       <div class="comment-wrap">
                //       <div class="comment-avatar">
                //       ${edit}
                //       <img height="30px" src="../images/doctor.png">
                //       <div class="comment-det">
                //       <div class="name">${cmnt.name}</div>
                //       <div class="time">${moment(cmnt.at).fromNow(true)} ago</div>
                //       </div>
                //       </div>
                //       <div class="comment-body">${cmnt.comment}</div>
                //       </div>
                //       `
                //     });
              
                //     $('.comment-delete').click(function(){
                //       let id = $(this)[0].id;
                //       store.collection('lives').doc(params.id).collection('comments').doc(id).delete().then(()=> {
                //         Toast.fire({
                //           icon: 'success',
                //           title: 'Deleted!'
                //         })
                //       }).catch(err=>{
                //         console.log(err);
                //       });
                //     });
              
                     
                //   })
              
              
              
              
                  
                },
                '/live/edit/:id': function(params) {
                    app.innerHTML = `
                    <div class="body">
                    <form id="add_course">
                    <div class="mb-3">
                    <input type="text" class="form-control" name="title" placeholder="title"/>
                    </div>
            
                    <div class="mb-3">
                    <input type="text" name="sub_title" class="form-control" placeholder="sub_title"/>
                    </div>
            
                    <div class="mb-3">
                    Start time
                    <input type="datetime-local" id="start_time" class="form-control" name="start_time" placeholder="time"/>
                    </div>
            
                    <div class="mb-3">
                    End time
                    <input type="datetime-local" id="end_time" class="form-control" name="end_time" placeholder="time"/>
                    </div>
            
                    <div class="mb-3">
                    <textarea type="text" class="form-control" name="details" placeholder="details"></textarea>
                    </div>
            
                    <div class="mb-3">
                    <input type="number" class="form-control" name="duration" placeholder="Duration">
                    </div>
            
                    <div class="mb-3">
                    <input type="text" class="form-control" name="neg" placeholder="Negative">
                    </div>
            
            
                    <div class="mb-3">
                    <select name="type" class="form-select form-select-sm" aria-label=".form-select-sm example">
                    <option selected>type</option>
                    <option value="Free">Free</option>
                    <option value="Pro">Premium</option>
                    </select>
                    </div>
            
                    <div class="mb-3">
                    <input type="text" class="form-control" name="img_link" placeholder="img_link"/>
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Edit</button>
                    </form>
            
             
            
            
                    </div>
                    `
                    const add_course = document.getElementById('add_course');
            
                    store.collection('lives').doc(params.id).onSnapshot(snap=>{
                        let l = snap.data();
                        add_course.title.value = l.title;
                        add_course.sub_title.value = l.sub_title;
                        document.getElementById('start_time').valueAsDate = new Date(l.start_time);
                        document.getElementById('end_time').valueAsDate = new Date(l.end_time);
                        add_course.details.value = l.details;
                        add_course.duration.value = l.duration;
                        add_course.neg.value = l.neg;
                        add_course.type.value = l.type;
                        add_course.img_link.value = l.img_link;
            
                    })
                   
                    add_course.addEventListener('submit', e=> {
                        e.preventDefault();
                        let data = {
                            title: add_course.title.value,
                            sub_title: add_course.sub_title.value,
                            start_time: (new Date(add_course.start_time.value)).toString(),
                            end_time: (new Date(add_course.end_time.value)).toString(),
                            details: add_course.details.value,
                            type: add_course.type.value,
                            img_link: add_course.img_link.value,
                            isPublished: false,
                            show_q: false,
                            duration: add_course.duration.value,
                            neg: parseFloat(add_course.neg.value),
                            isReg: true
            
                        }
            
                        console.log(data);
                        store.collection('lives').doc(params.id).set({
                          ...data
                        }, {merge: true})
                        .then(()=>{
                            Swal.fire(
                                'Updated', 'success'
                            )
            
                        }).catch(error=> {
                            console.log(error);
                        })
                    });
                },
                "/add_resources": function(){
                
                    $('.footer').hide();
                   // $('.top_logo').html(`<div onclick="window.history.back()" class="top_app_title"><div class="animate__animated animate__fadeInRight top_dir"><i class="icofont-simple-left"></i></div> <div class="animate__animated animate__fadeIn top_text">Add Resources</div></div>`);
                    app.innerHTML = `
                    <form id="add_book">
                    <div class="input-field">
                    <input type="text" name="title" required>
                    <label for="title">বইয়ের নাম</label>
                    </div>
                  
                    <div class="input-field">
                    <input type="text" name="cover" required>
                    <label for="cover">বইয়ের কভার ইমেজ লিঙ্ক</label>
                    </div>
                  
                    <div class="input-field">
                    <input type="text" name="author" required>
                    <label for="author">বইয়ের লেখক বা প্রতিষ্ঠান বা প্রকাশনী</label>
                    </div>
                  
                  
                    <div class="input-field col s12">
                  <select name="cat" required>
                    <option value="" disabled selected>বইয়ের ধরণ</option>
                    <option value="টেক্সট বুক">টেক্সট বুক</option>
                    <option value="দাগানো বই">দাগানো বই</option>
                    <option value="নোট">নোট</option>
                    <option value="কনসেপ্ট বুক">কনসেপ্ট বুক</option>
                    <option value="ডাইজেস্ট">ডাইজেস্ট</option>
                    <option value="সাজেশন">সাজেশন</option>
                    <option value="এক্সট্রা ইনফো">এক্সট্রা ইনফো</option>
                    </select>
                    </div>
                  
                    <div class="input-field">
                    <input type="text" name="link" required>
                    <label for="link">বইয়ের লিঙ্ক</label>
                    </div>
                  
                    <div class="input-field">
                    <input type="text" name="size" required>
                    <label for="size">বইয়ের সাইজ</label>
                    </div>
                    <center><button type="submit" class="btn green">সাবমিট করুন</button></center>
                    </form>
                    `
                  
                    $(document).ready(function () {
                      $("select").formSelect();
                    });
                    const add_book = document.getElementById('add_book');
                   
                    add_book.addEventListener('submit', e=>{
                      e.preventDefault();
                  
                      store.collection('books').add({
                        creationTime: firebase.firestore.Timestamp.fromDate(
                          new Date()),
                        title: add_book.title.value,
                        cover: add_book.cover.value,
                        author: add_book.author.value,
                        cat: add_book.cat.value,
                        link: add_book.link.value,
                        size: add_book.size.value
                      }).then(()=>{
                      Swal.fire(
                        'সাবমিটেড!',
                        'বইটি এখন ডেটাবেসে সংরক্ষিত!',
                        'success'
                      )
                    })
                      
                    })
                  
                  
                  
                   
                  
                },
                "/addNews": function(){
               app.innerHTML =  `
               <div class="body">
               <form id="nw">
            
               <div class="input-group mb-3">
               <span class="input-group-text">Title</span>
               <input type="text" class="form-control" name="title" placeholder="Title" aria-label="Title" aria-describedby="basic-addon1" required>
              </div>
            
              <div class="input-group mb-3">
               <textarea style="height: 250px" type="text" class="form-control" name="news" placeholder="News" aria-label="Title" aria-describedby="basic-addon1" required></textarea>
              </div>
            
              <div class="input-group mb-3">
               <span class="input-group-text">Image Link</span>
               <input type="text" class="form-control" name="img_link" placeholder="image_link" aria-label="link" aria-describedby="basic-addon1" required>
              </div>
            
              <button type="submit" class="btn btn-success">Submit</button>
               
               </form>
               
               
               </div>
               `
               const nw = document.getElementById('nw');
            
               nw.addEventListener('submit', e=> {
                e.preventDefault();
                let data = {
                    title: nw.title.value,
                    news: (nw.news.value).replaceAll('\n', '<br/>'),
                    img_link: nw.img_link.value,
                }
            
                console.log(data);
            
                store.collection('news').add({
                    ...data, created_at: (new Date()).toISOString()
                }).then(()=>{
                    Swal.fire({
                        icon: 'success',
                        text: 'Added Successfully!'
                    })
                })
                
            
               })
            
            
                }
            }).resolve();
            
        }else{
            app.innerHTML = `
            <h1>404</h1>
            `
        }

    }else{

            app.innerHTML = `
            <h1>404</h1>
            `

    }
})

let optChar = {
    "1": 'A',
    "2": 'B',
    "3": 'C',
    "4": 'D'
}






function op(){
     //delete
     $('.delete-b-q').click(function(){
        Swal.fire({
            icon: 'question',
            text: 'Are you sure?',
            showConfirmButton: true,
            showCancelButton: true
        }).then(res=>{
           if(res.isConfirmed){
            let id = ($(this)[0].id).split('-')[1];
            store.collection('bank').doc(id).delete().then(()=>{
                Swal.fire({
                    icon: 'success',
                    text: 'Deleted successfully!'
                })
            }).catch((error)=>{
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    text: 'Unable to delete file!'
                })
            })
           }

        })
        
    })

    

           //add to temp
            $('.add_q').click(function(){
                let data = ($(this)[0].id).split('|');
                Swal.fire({
                    icon: 'question',
                    text: 'Are you sure?',
                    showConfirmButton: true,
                    showCancelButton: true,

                }).then(res=>{
                    if(res.isConfirmed){
                        db.ref(`liveTemporary/questions`).update({
                            [qlen]: {
                                q: data[0],
                                opt: [data[1], data[2], data[3], data[4]],
                                ans: parseInt(data[5]),
                                ex: data[6]
                            }
                        });
                        // console.log(qlen);
                    }
                })
                
            });

            
            $('.add_quiz').off().click(function(){
                let data = ($(this)[0].id).split('|');
                Swal.fire({
                    icon: 'question',
                    text: 'Are you sure?',
                    showConfirmButton: true,
                    showCancelButton: true,

                }).then(res=>{
                    if(res.isConfirmed){
                        db.ref('app/dailyQuize').update({
                            data: {
                                q: data[0],
                                options: [data[1], data[2], data[3], data[4]],
                                ans: parseInt(data[5]),
                            }
                        });
                        Swal.fire({
                            icon: 'success',
                            text: 'Added to quiz. See home page!'
                        });
                    }
                })
                
            });
}