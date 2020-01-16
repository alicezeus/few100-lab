
import './styles.css';

const tips = document.querySelectorAll('.tip') as NodeListOf<HTMLDivElement>;
const selectedTip = 3;
let currentTip = 1;

tips.forEach(tip => {
    if (currentTip === selectedTip) {
        tip.dataset.selected = 'true';
    }
    currentTip++;
    tip.addEventListener('click', handleClick);
});

function handleClick() {
    const that = this as HTMLDivElement;
    const tipSelected = that.dataset.selected === 'true';

    that.classList.toggle('selected');

}
