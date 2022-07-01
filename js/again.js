function getPinNum() {
    const randonNumGenerate = Math.round(Math.random() * 10000);
    const randomString = randonNumGenerate + '';
    if (randomString.length == 4) {
        return randonNumGenerate;
    } else {

        return getPinNum();
    }

}

function generatePin() {
    const displayPin = document.getElementById('display-pin');
    displayPin.value = getPinNum();
}

document.getElementById('key-pad').addEventListener('click', function(even) {
    const getInnerValue = even.target.innerText;
    const getNumKey = document.getElementById('typed-numbers');


    if (isNaN(getInnerValue)) {
        if (getInnerValue == 'C') {
            getNumKey.value = '';

        } else if (getInnerValue == 'CE') {
            getNumKey.value = getNumKey.value.slice(0, -1);
        }
    } else {
        const getNumKeyValue = getNumKey.value;
        getNumKey.value = getNumKeyValue + getInnerValue;
    }


})






function verifyPin() {
    const displayPin = document.getElementById('display-pin').value;
    const getNumKey = document.getElementById('typed-numbers').value;
    const getNumStr = getNumKey + '';
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');
    const action = document.getElementById('action');
    const actionLeft = document.getElementById('action-left');
    const actionLeftValue = actionLeft.innerText;
    console.log(actionLeftValue);

    // if (displayPin != getNumKey) {

    //     actionLeft.innerText = parseInt(actionLeftValue) - 1;
    //     if (parseInt(actionLeftValue) == 0) {
    //         actionLeft.innerText = 'you have not ';
    //         console.log('tiutuit');
    //     }



    //     notifyFail.style.display = 'block';
    //     notifySuccess.style.display = 'none';


    // } else if (displayPin == getNumKey && getNumKey != 0) {

    //     notifySuccess.style.display = 'block';
    //     notifyFail.style.display = 'none';
    //     action.innerText = 'success';

    // }




    if (displayPin == getNumKey && getNumKey != 0) {
        notifySuccess.style.display = 'block';
        notifyFail.style.display = 'none';
        action.innerText = 'success';

    } else {
        notifyFail.style.display = 'block';
        notifySuccess.style.display = 'none';

    }
}