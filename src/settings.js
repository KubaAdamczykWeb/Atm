//ATM setup:

export const currency = "PLN";
// for example: "PLN", "GBP", "$", "€"

export const withdrawalsDenominations = [20, 50, 100, 200];
// enter at least two denominations (banknotes) for withdrawals
// for example for euro it can be: [10, 20, 50, 100], in American dolar even [1, 2, 5, 10, 50]
// to disable this limit set value to null

export const withdrawLimit = 100000;
// for nolimits parametr should by null,
// in other cases provide amount like 1000, 20000 etc.

export const depositsDenominations = [10, 20, 50, 100, 200, 500];
// enter at least two denominations (banknotes) for withdrawals
// for example for euro it can be: [5, 10, 20, 50, 100, 200]
// to disable this limit set value to null

export const depositLimit = null;
// for nolimits parametr should by null,
// in other cases provide amount like 1000, 20000 etc.

export const fastWithdrawButtons = [50, 100, 200, 500];
// to remove buttons set null
// maximum quantity of buttons is 8
