firebase.auth().useDeviceLanguage();
//firebase.auth().settings.appVerificationDisabledForTesting = true;

function authExecute(){
  $('.form-tips').show();
  $('.varify').hide();

    let phoneNumber;
    let code;
    const getCodeButton = document.getElementById("confirm-code");
    const signInWithPhoneButton = document.getElementById("sign-in-button");
    const auth = firebase.auth();

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",{
        'size': 'invisible',
      }
    );
    recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });

    const sendVerificationCode = () => {
      $('.send_loading').show();
      phoneNumber = document.getElementById("phoneNumber").value;
      phoneNumber = "+88" + phoneNumber;
      console.log(phoneNumber.length);
      if (phoneNumber === "" || phoneNumber.length != 14) {
        Swal.fire({
          icon: "error",
          title: "ফোন নম্বর ইস্যু...",
          text: "সঠিক ফোন নম্বর প্রদান করুন!",
          footer: "ফোন নম্বরটি ১১ ডিজিটের হওয়া জরুরী!",
        });
        $('.send_loading').hide();
        return;
      }


      const appVerifier = window.recaptchaVerifier;
      
      // $('.send_code').html(`
      //   Code Sent. Please check your phone. If any issue, please refresh page and send again!
      //   `)

      

      auth
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          $('.form-tips').hide();
          $('.varify').show();
          const sentCodeId = confirmationResult.verificationId;
          $(".warn").html(`
         আপনার নাম্বারে ভেরিফিকেশন কোডটি পাঠানো হয়েছে। কোডটি যেতে ১ মিনিটের মত সময় লাগতে পারে।
         `);
         $('.send_loading').hide();

         $('.resend').html(`
         <button class="btn btn-secondary" id="resend-button" disabled>Resend<span class="resend_timer"></span></button>
         `);
          let r_time = 60;
         let resendTimer = setInterval(()=>{
            r_time--;
            if(r_time<0){
              clearInterval(resendTimer);
              $('.resend').html(`
              <button class="btn btn-success" onclick="window.location.reload()" id="resend-button">Resend</button>
            `);
            }

            $('.resend_timer').html(`(${r_time})`);
         }, 1000)


          // console.log(confirmationResult);
          $('#recaptcha-container').hide();
          $("#phoneNumber").hide();
          // $(".varify").show();

          signInWithPhoneButton.addEventListener("click", () =>
           { 
             signInWithPhone(sentCodeId);

             $('.warn').html(`
             <center style="display: flex; gap: 10px; justify-content: center; align-items: center;"><div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
       Signing In Please wait! </center>
        `)
            }
          );
        }).then((r)=>{
          
          console.log(r)
          // window.location.reload();
        })
        .catch((e)=>{
          console.log(e);
          Swal.fire({
            icon: 'warning!',
            title: 'ERROR',
            text: e.toString()
          })
        })
    };

    const signInWithPhone = (sentCodeId) => {
      code = document.getElementById("code").value;
      const credential = firebase.auth.PhoneAuthProvider.credential(
        sentCodeId,
        code
      ); //This function runs everytime the auth state changes. Use to verify if the user isAuthProvider.credential(sentCodeId, code);
      auth
        .signInWithCredential(credential)
        .then(() => {
          console.log(credential);
        })
        .catch((error) => {
          console.error(error);
          Swal.fire({
            icon: "error",
            title: "Code Error",
            text: "Code you provided was wrong! Please resend code and enter correctly!",
            footer: 'Any Issue? Contact: 01318067123',
          });
        });
    };
    getCodeButton.addEventListener("click", sendVerificationCode);
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // console.log(user);
        store
          .collection("users")
          .doc(user.uid)
          .set(
            {
              phone: user.phoneNumber,
              uid: user.uid,
              creationTime: (firebase.firestore.Timestamp.fromDate(
                  new Date(user.metadata.creationTime)
                )),
              
            },
            { merge: true }
          )
          .then(() => {
            // window.location.reload();
            router.navigate('/');
            console.log(user.uid)
          });
      } else {
        console.log("USER NOT LOGGED IN");
      }
    });
}


function signOut(){
  Swal.fire({
    icon: 'warning',
    text: 'Do you want to logout?',
    confirmButtonText: 'Yes',
    showCancelButton: true,
    cancelButtonText: 'No'
   }).then(res=>{
    if(res.isConfirmed){
      firebase
          .auth()
          .signOut()
          .then(() => {
            // router.navigate('/');
            window.location.reload();
          })
          .catch((e) => {
          console.log(e);
          });
    }
  })
}

var UID = false;
var std_name = false;
var myuid = '';
var mygroup = 'unRated';
var myscore = 0;
var myPhoto = '';
var myInst = '';
var myName = '';
function authCheck(send){
firebase.auth().onAuthStateChanged(user=> {
  $('.sp').hide();

    if(user) {
        history.pushState({page: 1}, "home", "#!/")
     
      UID = user.uid;
      myuid = user.uid;

        store.collection('users').doc(user.uid).get().then(snap=>{
            // console.log(snap.data());
            if(!snap.data().name) {
                $('.get-info').html(`
                <div class="modal fade" id="info_modal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog  modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Complete your profile</h5>
                      <button type="button" class="btn-close" data-bs-disModal titlemiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body cyp">
                        <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <div class="input-group"> <input id="std_name" class="form-control" type="text" placeholder="Name"> </div>
                            </div>
                        </div>
                    </div> <br>

                        <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <div class="input-group"> <input id="std_inst" class="form-control" type="text" placeholder="College/Institute"> </div>
                            </div>
                        </div>
                    </div><br>

                        <div class="row">
                        <div class="col-sm-12">
                        <select id="grp" class="form-select" aria-label="Default select example">
                        <option selected value="">Select your group</option>
                        <option value="sci">Science</option>
                        <option value="hum">Humanity</option>
                      </select>
                        </div>
                    </div>


                    </div>
                    <div class="modal-footer">
                      <button id="submit_info" type="button" class="btn btn-primary">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
                `);

                $('#info_modal').modal('show');

                $('#submit_info').click(function(){
                    let name = $('#std_name').val();
                    let inst = $('#std_inst').val();
                    let group = $('#grp').val();

                    if(name.trim() == '' || inst.trim()=='' || group.trim() == ''){
                        Swal.fire({
                            icon: 'warning',
                            text: 'Please provide all the informations!'
                        });
                    }else {

                      console.log(name)
                      console.log(inst)
                      console.log(group);
                      $('#submit_info').hide();
                      $('.cyp').html(`
                      <center><div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                      <span class="visually-hidden">Loading...</span>
                      </div> <br>
                      Creating your profile....
                      </center>
                      `);

                        store.collection('users').doc(user.uid).set({
                            name: name,
                            inst: inst,
                            group: group
                        }, {merge: true}).then(()=>{
                          $('.cyp').html(`
                          <center><div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                          <span class="visually-hidden">Loading...</span>
                          </div><br>
                          <div class=="animate__animated animate__fadeIn">Organizing your data...</div>
                          </center>
                          `);
                        });

                        store.collection('globalRank').doc(group).set({
                          [user.uid] : {
                            name: name,
                            inst: inst,
                            score: 0
                          }
                        }, {merge: true}).then(()=>{
                          $('.cyp').html(`
                      <center class=="animate__animated animate__fadeIn" style="color: green;">
                          Your profile is created successfully.<br>Reloading in 1.5 second!
                      </center>
                      `);

                          
                          setTimeout(()=>{
                            $('#info_modal').modal('hide');
                            window.location.reload();
                          }, 1500);

                          
                        })
                    }

                })

            }else{
              std_name = snap.data().name
              myName = snap.data().name
              mygroup = snap.data().group
              myPhoto = snap.data().photoUrl ? `<img src="${snap.data().photoUrl}"/>` : `<img src="https://robohash.org/unknown.png?set=set4">`;
              myInst = snap.data().inst;
                $('.user-panel').show();
               
                $('.prfl').html(`<a class="dropdown-item" href="#!/profile/${user.uid}"><img src="https://robohash.org/${snap.data().name}.png?set=set4"></a>
                `);
                // let data={
                //     name: snap.data().name,
                //     phone: snap.data().phone,
                //     inst: snap.data().inst
                // }

                // if(send){
                //     send(data);
                // }

                //counting scores
                if(snap.data().live_exams){               
                  let live_exams = snap.data().live_exams;
                  live_exams = Object.entries(live_exams);
                
                    for(i in live_exams){
                      myscore += parseFloat(live_exams[i][1].score);
                    }

                   // console.log(myscore);
                   

                }else {
                  myscore = 0;
                }

                
            }
        })

        $('.prg-link').html(`
        <a href="#!/progress/${user.uid}"><div class="footerMenu">   
        <div class="footerIcon sz prg"><img src="./images/progress.png"></div>
        <div class="footertext">Progress</div>
      </div>
    </a>
        `)
    }
    else{
        $('.user-panel').show();
        $('.footer').hide();
    }
});

};

authCheck();

function isAuth(call){
    firebase.auth().onAuthStateChanged(user=> {
        if(user) {
         if(call){
            call(true);
         }
        }else{
            if(call){
                call(false);
            }
        }
    });
}