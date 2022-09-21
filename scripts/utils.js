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
        <option value="1">Free</option>
        <option value="0">Premium</option>
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
    }
    


}).resolve();




