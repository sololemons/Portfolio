let btn1 = document.getElementById('skills');
let btn2 = document.getElementById('education');

let progress = document.getElementById('prog-body');
let education = document.getElementById('edu');
let prog_bar = [document.querySelectorAll('.prog-dark-1'), document.querySelectorAll('.prog-dark-2')
, document.querySelectorAll('.prog-dark-3')]

let active = 1;
btn1.style.backgroundColor = '#ff2a2aff'
btn1.style.color = '#fff';
progress.style.visibility = 'visible';
education.style.visibility = 'hidden';


btn1.addEventListener('click', function(){
    if (active == 0)
    {
        btn1.style.backgroundColor = '#ff2a2aff'
        btn1.style.color = '#fff';
        active = 1;
        btn2.style.backgroundColor = '#fff'
        btn2.style.color = '#000';
        progress.style.visibility = 'visible';
        education.style.visibility = 'hidden';
        progress.classList.add('animate');
        education.classList.remove('animate');
        animateProgBar();
    }
})
btn2.addEventListener('click', function(){
    if (active == 1)
    {
        btn2.style.backgroundColor = '#ff2a2aff'
        btn2.style.color = '#fff';
        active = 0;
        btn1.style.backgroundColor = '#fff'
        btn1.style.color = '#000';
        progress.style.visibility = 'hidden';
        education.style.visibility = 'visible';
        education.classList.add('animate');
        progress.classList.remove('animate');
        deanimateProgBar();
    }
})

function animateProgBar(){
    for (let i = 0; i <= prog_bar.length; i++)
    {
        prog_bar[i][0].classList.add('prog-animate');
    }
}
function deanimateProgBar(){
    for (let i = 0; i <= prog_bar.length; i++)
    {
        prog_bar[i][0].classList.remove('prog-animate');
    }
}

function sendEmail()
{
    Email.send({
        SecureToken : "72a54064-4c67-42db-bd32-a23f693e593d",
        To : 'solohlemons75@gmail.com',
        From : 'solohlemons75@gmail.com',
        Subject : "New contact form enquiry",
        Body :  "Name: " + document.getElementById("name").value +
                "<br> Email: " + document.getElementById("email").value +
                "<br> Phone no: " + document.getElementById("phone").value +
                "<br> Message: " + document.getElementById("message").value

    }).then(
      message => alert(message)
    );
}
document.getElementById('submit').addEventListener('click', function(){
    sendEmail();
})