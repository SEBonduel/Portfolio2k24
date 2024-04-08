const form=document.querySelector('form');
const fullName=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const subject=document.getElementById('subject');
const message=document.getElementById('message');

function sendEmail(){
    const bodyMessage = `Nom: ${fullName.value}<br> Email: ${email.value}<br> Téléphone: ${phone.value}<br><br> Message: ${message.value}`;

    Email.send({
        SecureToken :"f248c05f-5575-41e2-b03a-4145cb828914",
        To : 'sebastien050599@hotmail.fr',
        From : "sebastien050599@hotmail.fr",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
         message => {
            if(message=='OK'){
                 Swal.fire({
                    title: "Félicitations !",
                    text: "Le message à bien été envoyé !",
                    icon: "success"
                });
            }
        });
    }


form.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
});