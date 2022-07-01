function getpin() {
    const random = Math.round(Math.random() * 10000);
    const randomString = random + '';

    if (randomString.length == 4) {
        return random;
    } else {

        return getpin();
    }

}


function generatePin() {

    document.getElementById('display-pin').value = getpin();
}

document.getElementById('key-pad').addEventListener('click', function(even) {
    const getInnerValue = even.target.innerText;
    const showingText = document.getElementById('typed-numbers');

    if (isNaN(getInnerValue)) {

        if (getInnerValue == 'C') {
            showingText.value = '';

        } else if (getInnerValue == 'CE') {
            showingText.value = showingText.value.slice(0, -1);
        }
    } else {
        const showimgValue = showingText.value;
        showingText.value = showimgValue + getInnerValue;
    }




})

function verifyPin() {
    const dislpayPin = document.getElementById('display-pin').value;
    const typedNumbersn = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');

    const actionTri = document.getElementById('action').innerText;
    const action = document.getElementById('action');


    if (dislpayPin == typedNumbersn) {

        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
        action.style.display = 'none'

    } else {

        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';

    }
}