
const GetTodayDate = () => {
    const today = new Date();

    const year = today.getFullYear();
    const month = String(today.getMonth()+1).padStart(2,0);
    const day = String(today.getDate()).padStart(2,0);

    const D = `${year}-${month}-${day}`;

    return D;
    
}

const SetDate = () =>{
    document.getElementById('date-up').setAttribute('min', GetTodayDate());
    document.getElementById('date-off').setAttribute('min', GetTodayDate());
}

SetDate();

document.getElementById('search').addEventListener('click', function(e){
    e.preventDefault();

    const inputDateUp = document.getElementById('date-up').value;
    const inputDateOff = document.getElementById('date-off').value;
    const inputTimeUp = document.getElementById('time-up').value;
    const inputTimeOff = document.getElementById('time-off').value;
    const AcceptedAge = document.getElementById('AcceptedAge');

    let p = document.getElementById('Title_of_Auto_page');


    if(inputDateOff == '' || inputDateUp == '' || inputTimeOff == '' || inputTimeUp == '')
    {
        alert('Please Fill all the inputs!')
        return;
    }
    else if(!AcceptedAge.checked){
        alert('❌ You must be 18 years or older to continue.');
        return;
    } 
    else {

        localStorage.setItem("Dup", inputDateUp);
        localStorage.setItem("Doff", inputDateOff);
        localStorage.setItem("Tup", inputTimeUp);
        localStorage.setItem("Toff", inputTimeOff);

        window.location.href = "Autos.html";

        
    }


});


