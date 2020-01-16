export function tip(bill: number, percent: number) {
    console.log(bill);
    console.log(percent);
    return bill * (percent / 100);
}
export function add(bill: number, tipAmount: number) {
    return bill + tipAmount;
}
