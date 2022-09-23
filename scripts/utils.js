const router = new Navigo(null, true, '#!');
const app = document.getElementById('app');

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

            <a href="#!/liveExamCreator"><div class="course-card">
            <div class="details">
            <div class="title">Create Live Exam</div>
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
        <body>
        <form id="add_course">
        <div>
        <input type="text" name="title" placeholder="title"/>
        </div>

        <div>
        <input type="text" name="sub_title" placeholder="sub_title"/>
        </div>

        <div>
        Start time
        <input type="datetime-local" name="start_time" placeholder="time"/>
        </div>

        <div>
        End time
        <input type="datetime-local" name="end_time" placeholder="time"/>
        </div>

        <div>
        <textarea type="text" name="details" placeholder="details"></textarea>
        </div>

        <div>
        <input type="text" name="subject_exam" placeholder="subject_exam"/>
        </div>

        <div>
        <input type="text" name="previous_year" placeholder="previous_year"/>
        </div>

        <div>
        <input type="text" name="model_test" placeholder="model_test"/>
        </div>

        <div>
        <input type="number" name="fee" placeholder="fee"/>
        </div>

        <div>
        <input type="number" name="prev_fee" placeholder="prev_fee"/>
        </div>

        <div>
        <input type="text" name="course_plan_link" placeholder="course_plan_link"/>
        </div>

        <div>
        <input type="text" name="img_link" placeholder="img_link"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </body>
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
        <body>
        <form id="add_course">
        <div>
        <input type="text" name="title" placeholder="title"/>
        </div>

        <div>
        <input type="text" name="sub_title" placeholder="sub_title"/>
        </div>

        <div>
        Start time
        <input type="datetime-local" name="start_time" placeholder="time"/>
        </div>

        <div>
        End time
        <input type="datetime-local" name="end_time" placeholder="time"/>
        </div>

        <div>
        <textarea type="text" name="details" placeholder="details"></textarea>
        </div>

        <div>
        <input type="number" name="duration" placeholder="Duration">
        </div>



        <select name="type" class="form-select form-select-sm" aria-label=".form-select-sm example">
        <option selected>type</option>
        <option value="Free">Free</option>
        <option value="Pro">Premium</option>
        </select>


        <div>
        <input type="text" name="img_link" placeholder="img_link"/>
        </div>
        
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </body>
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
                img_link: add_course.img_link.value

            }

            console.log(data);
            store.collection('lives').add(data)
            .then(doc=>{
                console.log(doc.id);

            }).catch(error=> {
                console.log(error);
            })
        })
    },
    '/liveExamCreator': function(){
        app.innerHTML = `
        <div class="body">

        <form id="lq">
                <div class="input-group mb-3">
                <span class="input-group-text">q</span>
                <input type="text" class="form-control" name="q" placeholder="question" aria-label="Username" aria-describedby="basic-addon1" required>
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
                </select>



        
        <center><button type="submit" class="btn btn-primary">Submit</button></center>
        </form>
        <br>
        <div class="questions"></div>
        </div>
        `

        const lq = document.getElementById('lq');
        let len;
        db.ref('liveTemporary').on('value', snap=>{
           let questions = snap.val().questions;
           len = questions.length;
            const questions_view = document.querySelector('.questions');
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
        });

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
        
        lq.addEventListener('submit', e=>{
            e.preventDefault();
            let exp = (lq.ex.value).trim() == '' ? '' : `<br> ${(lq.ex.value).replace('\n', '<br/>')}`;
            let options= [lq.opt1.value, lq.opt2.value, lq.opt3.value, lq.opt4.value]
            let data = {
                q: lq.q.value,
                opt: options,
                ans: parseInt(lq.ans.value),
                ex: `${optChar[lq.ans.value]}.${options[parseInt(lq.ans.value)-1]}${exp}`
            }

           db.ref(`liveTemporary/questions/${len}`).update(data);
            let tags=[lq.chap.value];
            
            var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
            for (var i = 0; i < checkboxes.length; i++) {
            tags.push(checkboxes[i].value)
            }
            console.log(tags);
            store.collection("bank").add({
                q: lq.q.value,
                opt: options,
                ans: parseInt(lq.ans.value),
                ex: `${optChar[lq.ans.value]}.${options[parseInt(lq.ans.value)-1]}${exp}`,
                tags: tags,
            });
        });
    

    }
    


}).resolve();

let optChar = {
    "1": 'A',
    "2": 'B',
    "3": 'C',
    "4": 'D'
}




