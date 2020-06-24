function validateName() {
            var name = document.getElementById('name').value;
            if(name.length == 0) {
              alert("Name can't be blank") ;
              return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
              alert("Please enter your correct name") ;//Validation Message
              return false;
            }
            return true;
          }

function validatemessage() {
            var message = document.getElementById('message').value;
            if(message.length == 0) {
              alert("message can't be blank") ;//Validation Message
              return false;
            }

           return true;

         }

function validateEmail () {

          var email = document.getElementById('email').value;
          if(email.length == 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

          }

          if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

          }

          return true;

        }


function validateForm() {
          if (!validateName() || !validatemessage() || !validateEmail()) {

            alert("Form not submitted");//Validation Message
            return false;
          }
          else {
            submitted=true;
            return true;
          }
        }


// $('#myForm').submit(function(e){
//     e.preventDefault();
//     $.ajax({
//         url:'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfMSrKDkYkcmaBNRV6JQnm0_a5iGOH68rCPkaWz5r6SGODQqQ/formResponse',
//         type:'post',
//         data:$('#myForm').serialize(),
//         success:function(){
//             //whatever you wanna do after the form is successfully submitted
//             alert("worked");
//         }
//     });
// });

function feedback() {
    alert("thank you, message sent.Check your mail for confirmation ");
    $('#myForm')[0].reset();

}