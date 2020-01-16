
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
amount.addEventListener('blur', calculateTip, true);

currentTip.innerText = `${percent}%`;

tips.forEach(t => {
    if (t.innerText === currentTip.innerText) {
        t.classList.toggle('selected');
    }
    t.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement;
    that.classList.toggle('selected');

    currentTip.innerText = that.innerHTML;

    percent = parseInt(currentTip.innerText.replace('%', '').trimLeft(), 10);
    localStorage.setItem('storePerentage', percent.toString());
    calculateTip();
}

function calculateTip() {

    const tipAmount = tip(amount.valueAsNumber, percent);
    billAmount.innerText = `$${amount.value.toString()}`;
    tipPerentage.innerText = `${percent}%`;
    currentTip.innerText = `${percent}%`;
    amountTip.innerText = tipAmount.toString();
    total.innerText = add(amount.valueAsNumber, tipAmount).toString();

}


