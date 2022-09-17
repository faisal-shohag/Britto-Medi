const router = new Navigo(null, true, '#!');
const app = document.getElementById('app');

router.on({
    '/': function() {
      app.innerHTML = `
      <div class="body">
      <div class="vert-scroll siliguri">
            <div class="course-card">
            <div class="details">
            <div class="title">Daily Quiz</div>
            </div>
            </div>

            <div class="course-card">
            <div class="details">
            <div class="title">Courses</div>
            </div>
            </div>

            

            <div class="course-card">
            <div class="details">
            <div class="title">Live Exam</div>
            </div>
            </div>
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
    }
    


}).resolve();




