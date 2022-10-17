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
         আপনার নাম্বারে ভেরিফিকেশন কোডটি পাঠানো হয়েছে। কোডটি যেতে ১ মিনিটের মত সময় লাগতে পারে।  যদি না গিয়ে থাকে তাহলে <a href="/#!/auth">আবার</a> চেষ্টা করুন। 
         `);
          // console.log(confirmationResult);
          $('#recaptcha-container').hide();
          $("#phoneNumber").hide();
          // $(".varify").show();

          signInWithPhoneButton.addEventListener("click", () =>
           { 
             signInWithPhone(sentCodeId);

             $('.warn').html(`
             <center><div class="spinner-border text-dark" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
       Signing In Please wait! </center>
        `)
            }
          );
        }).then((r)=>{
          
          console.log(r)
        })
        .catch((e)=>{
          console.log(e);
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
            window.location.reload();
            console.log(user.uid)
          });
      } else {
        console.log("USER NOT LOGGED IN");
      }
    });

   
}


function singOut(){
    firebase
          .auth()
          .signOut()
          .then(() => {
            router.navigate('/')
            window.location.reload();
          })
          .catch((e) => {
            console.log(e);
          });
}

var UID = false;
var std_name = false;
var myuid = '';
function authCheck(send){

firebase.auth().onAuthStateChanged(user=> {
  $('.sp').hide();
    if(user) {
      // history.pushState({page: 1}, "home", "#!/")
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
                    <div class="modal-body">
                        <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <div class="input-group"> <input id="std_name" class="form-control" type="text" placeholder="Name"> </div>
                            </div>
                        </div>
                    </div>

                        <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group"> 
                                <div class="input-group"> <input id="std_inst" class="form-control" type="text" placeholder="Institute"> </div>
                            </div>
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

                    if(name.trim() == '' || inst.trim()==''){
                        Swal.fire({
                            icon: 'warning',
                            text: 'Please provide all the informations!'
                        });
                    }else {
                        store.collection('users').doc(user.uid).update({
                            name: name,
                            inst: inst
                        }).then(()=>{
                            Swal.fire({
                                icon: 'success',
                                text: 'All set! Lets begin the journey!'
                            })

                            setTimeout(function(){
                              window.location.reload();
                            }, 1000)

                            $('#info_modal').modal('hide');
                        })
                    }

                })

            }else{
              std_name = snap.data().name
                $('.user-panel').show();
               
                $('.user-panel').html(`
                <div class="user dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><img class="rounded-circle" src="./images/doctor.png"></div>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#!/profile/${user.uid}"><i class="icofont-user"></i> Profile</a></li>
                  <li><a class="dropdown-item" href="#"><i class="icofont-notebook"></i> My courses</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" onclick="singOut()" href="#"><i class="icofont-logout"></i> Logout</a></li>
                  <li><a class="dropdown-item" onclick="window.location.reload()" href="#"><i class="icofont-refresh"></i> Reload</a></li>
                </ul>
                `);
                let data={
                    name: snap.data().name,
                    phone: snap.data().phone,
                    inst: snap.data().inst
                }

                if(send){
                    send(data);
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
        $('.user-panel').html(`
        <a href="/#!/auth"><div class="signInButton">Sign In</div></a>
        `);
        $('#app').html(`
        <center>Please Sign In!</center>
        `);
        $('.footer').hide();

        router.navigate('/auth');
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