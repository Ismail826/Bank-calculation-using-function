document.getElementById('login-submit').addEventListener('click',function(){
    //FIXME: console.log('clicked');

//TODO: get user email

    const emailFeild = document.getElementById('user-email');
   const userEmail = emailFeild.value;

   // TODO: get user password 

//  FIXME:  console.log('userEmail');
const passwordFeild = document.getElementById('user-password');
   const usePassword = passwordFeild.value;

// TODO: Chcek Eamil and Password

   if (userEmail == 'ismailhossainddd@gmail.com' && usePassword == 'ismail'){
      // console.log('valid user');

      window.location.href = 'banking.html';
   }  

   else {
      console.log(alert('Not valid user'));

   };

});

