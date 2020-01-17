
import './styles.css';
import { tip, add } from './tip';

const tips = document.querySelectorAll('.tip') as NodeListOf<HTMLDivElement>;
const amount = document.getElementById('amount') as HTMLInputElement;
const currentTip = document.getElementById('currentTip') as HTMLSpanElement;
const billAmount = document.getElementById('billAmount') as HTMLSpanElement;
const tipPerentage = document.getElementById('tipPerentage') as HTMLSpanElement;
const amountTip = document.getElementById('amountTip') as HTMLSpanElement;
const total = document.getElementById('total') as HTMLSpanElement;

let percent = parseInt(localStorage.getItem('storePerentage'), 10);
amount.addEventListener('blur', amountCheck, true);
let bill = amount.valueAsNumber;

currentTip.innerText = `${percent}%`;

tips.forEach(t => {
    if (t.innerText === currentTip.innerText) {
        t.classList.add('selected');
    } else {
        t.addEventListener('click', handleClick);
        t.classList.remove('selected');
    }
});

function handleClick() {
    const that = this as HTMLDivElement;
    currentTip.innerText = that.innerHTML;
    bill = amount.valueAsNumber;

    percent = parseInt(currentTip.innerText.replace('%', '').trimLeft(), 10);
    localStorage.setItem('storePerentage', percent.toString());

    tips.forEach(t => {
        if (t.innerText === currentTip.innerText) {
            t.classList.add('selected');
            t.removeEventListener('click', handleClick);
        } else {
            t.addEventListener('click', handleClick);
            t.classList.remove('selected');
        }
    });
    if (!isNaN(bill)) {
        calculateTip();
    }
}

function amountCheck() {
    const regex = /^[1-9]\d*(((,\d{3}){1})?(\.\d{0,2})?)$/;

    const that = this as HTMLDivElement;
    bill = amount.valueAsNumber;
    currentTip.innerText = `${percent}%`;

    if (regex.test(amount.value)) {
        that.classList.remove('error');
        calculateTip();
    } else {
        that.classList.add('error');
        billAmount.innerText = ``;
        tipPerentage.innerText = ``;
        amountTip.innerText = ``;
        total.innerText = ``;
    }
}

function calculateTip() {
    const tipAmount = tip(bill, percent);
    billAmount.innerText = `$${amount.value.toString()}`;
    tipPerentage.innerText = `${percent}%`;
    amountTip.innerText = tipAmount.toFixed(2);
    total.innerText = add(bill, tipAmount).toFixed(2);
}

