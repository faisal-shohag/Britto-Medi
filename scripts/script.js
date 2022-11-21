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
    let user = {
        name: localStorage.getItem('name'),
        id: localStorage.getItem('id'),
        inst: localStorage.getItem('inst')
    }
    router.on({
        '/': function(){
          $('.footer').hide();
          app.innerHTML =`
          <div class="body">
          <div class="user">
          
          <div class="std_welcome">স্বাগতম,</div>
          <div class="std_name">${user.name}</div>
          </div>

          </div>
          `
        $('.sp').hide();
        }
      }).resolve();
}
