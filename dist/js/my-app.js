var myApp = new Framework7();

         // If your using custom DOM library, then save it to $$ variable
         var $$ = Dom7;

         // Add the view
         var mainView = myApp.addView('.view-main', {
         // enable the dynamic navbar for this view:
            dynamicNavbar: true
         });
         $$('.login-screen .list-button').on('click', function () {
            var uname = $$('.login-screen input[name="username"]').val();
            var pwd = $$('.login-screen input[name="password"]').val();
            myApp.alert('Username: ' + uname + ', Password: ' + pwd, function () {
            myApp.closeModal('.login-screen');
         });
      });