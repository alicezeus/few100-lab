export function tip(bill: number, percent: number): number {
    console.log(bill);
    console.log(percent);
    return bill * (percent / 100);
}
export function add(bill: number, tipAmount: number): number {
    return (bill + tipAmount);
}
