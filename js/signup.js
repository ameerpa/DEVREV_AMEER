const firebaseConfig = {
  apiKey: "AIzaSyABxyxl4IlzsrXLqVMxrYTFoxQc93bKdD8",
  authDomain: "devrev-ameer.firebaseapp.com",
  projectId: "devrev-ameer",
  storageBucket: "devrev-ameer.appspot.com",
  messagingSenderId: "235518861361",
  appId: "1:235518861361:web:c0fa553d9fef61dd3c3510",
  measurementId: "G-7266NQLHP8"
};
      firebase.initializeApp(firebaseConfig);
  render();
  function render(){
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
      recaptchaVerifier.render();
  }
  function phoneAuth(){
      var number = document.getElementById('number').value;
      firebase.auth().signInWithPhoneNumber(number, window.recaptchaVerifier).then(function(confirmationResult){
          window.confirmationResult = confirmationResult;
          coderesult = confirmationResult;
          document.getElementById('sender').style.display = 'none';
          document.getElementById('verifier').style.display = 'block';
      }).catch(function(error){
          alert(error.message);
      });
  }
  function codeverify(){
      var code = document.getElementById('verificationcode').value;
      coderesult.confirm(code).then(function(){
          document.getElementsByClassName('p-conf')[0].style.display = 'block';
          document.getElementsByClassName('n-conf')[0].style.display = 'none';
      }).catch(function(){
          document.getElementsByClassName('p-conf')[0].style.display = 'none';
          document.getElementsByClassName('n-conf')[0].style.display = 'block';
      })
  }
  function gotohome() {
          window.location.href = 'home.html';
  }