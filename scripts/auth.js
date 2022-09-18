firebase.auth().useDeviceLanguage();

function authExecute(){
    let phoneNumber;
    let code;
    const getCodeButton = document.getElementById("confirm-code");
    const signInWithPhoneButton = document.getElementById("sign-in-button");
    const auth = firebase.auth();
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container"
    );
    recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });

    const sendVerificationCode = () => {
      $(".loader").show();
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
        $(".loader").hide();
        return;
      }

      const appVerifier = window.recaptchaVerifier;
      
      $(".loader").hide();

      auth
        .signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          const sentCodeId = confirmationResult.verificationId;
          $(".warn").html(`
         ভেরিফিকেশন কোডটি পাঠানো হয়েছে। 
         `);
          console.log(confirmationResult);
          $(".loader").hide();

          $(".phone-auth").hide();
          $(".varify").show();

          signInWithPhoneButton.addEventListener("click", () =>
           { 
             $('.loader').show();
             signInWithPhone(sentCodeId)
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
            title: "Oops...",
            text: "Something went wrong!",
            footer: '',
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
            console.log(user.uid)
          });
      } else {
        console.log("USER NOT LOGGED IN");
      }
    });

    $("#signOut").click(function () {
      firebase
        .auth()
        .signOut()
        .then(() => {
          window.location.reload();
        })
        .catch((e) => {
          console.log(e);
        });
    });
}