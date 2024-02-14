const numberDisplay = document.getElementById("number-display");
const nameDisplay = document.getElementById("name-display");
const dateDisplay = document.getElementById("date-display");
const monthDisplay = document.getElementById("month-display");
const yearDisplay = document.getElementById("year-display");
const cvvDisplay = document.getElementById("cvv-display");
const inputContainer = document.getElementById("input-container");
const nameInput = document.getElementById("name");
const cardNumber = document.getElementById("card-number");
const expContainer = document.getElementById("exp-container");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvvInput = document.getElementById("cvv-input");
const confirmBtn = document.getElementById("confirm-btn");

const numRegex = /\d{16}/;
const dateRegex = /\d{1,2}/;
const cvvRegex = /\d{3}/;

const checkName = () => {
    if (nameInput.value === "") {
        nameInput.parentElement.classList.add("invalid") 
    } else {
        nameInput.parentElement.classList.remove("invalid");
        return true;
    }
}

const checkNum = () => {
    if (cardNumber.value === "") {
        cardNumber.parentElement.classList.add("invalid");
        cardNumber.parentElement.classList.remove("error");
    } else if (!numRegex.test(cardNumber.value.replace(/ /g,""))) {
        cardNumber.parentElement.classList.remove("invalid");
        cardNumber.parentElement.classList.add("error");
    } else {
        cardNumber.parentElement.classList.remove("invalid");
        cardNumber.parentElement.classList.remove("error");
        return true;
    }
}

const checkDate = () => {
    if (monthInput.value == "" || yearInput.value == "") {
        expContainer.classList.add("invalid");
        expContainer.classList.remove("error");
    } else if (!dateRegex.test(monthInput.value.trim()) || !dateRegex.test(yearInput.value.trim()) ) {
            expContainer.classList.remove("invalid");
            expContainer.classList.add("error");    
    } else {
        expContainer.classList.remove("invalid");
        expContainer.classList.remove("error");
        return true
    }
}

const cvvCheck = () => {
    if (cvvInput.value === "") {
        cvvInput.parentElement.classList.add("invalid");
        cvvInput.parentElement.classList.remove("error");
    } else if (!cvvRegex.test(cvvInput.value.trim())) {
        cvvInput.parentElement.classList.remove("invalid");
        cvvInput.parentElement.classList.add("error");
    } else {
        cvvInput.parentElement.classList.remove("invalid");
        cvvInput.parentElement.classList.remove("error");
        return true;
    }
}

const validate = () => {
    checkName();
    checkNum();
    checkDate();
    cvvCheck();
    if (checkName() && checkNum() && checkDate() && cvvCheck()) {
        inputContainer.innerHTML = `
        <div id="ty-container">
                    <img id="ty-icon" src="images/icon-complete.svg" alt="picture of a checkmark"/>
                    <h1>THANK YOU!</h1>
                    <p>We've added your card details</p>
                    <button class="btn-style" type="button">Continue</button>
                </div>`
    }
}

const formatNumber = (num) => {
    return num.replace(/\D/g,"").replace(/(\d{4})(?=\d)/g,"$1 ");
}

nameInput.addEventListener("keyup", () => {
    nameDisplay.innerText = `${nameInput.value.toUpperCase()}`
})

cardNumber.addEventListener("input", () => {
    const formattedNum = formatNumber(cardNumber.value);
    cardNumber.value = formattedNum;
    numberDisplay.innerText = `${formattedNum}`;
})

monthInput.addEventListener("keyup", () => {
    monthDisplay.innerText = `${monthInput.value}`
})

yearInput.addEventListener("keyup", () => {
    yearDisplay.innerText = `${yearInput.value}`
})

cvvInput.addEventListener("keyup", () => {
    cvvDisplay.innerText = `${cvvInput.value}`
})

confirmBtn.addEventListener("click", validate)