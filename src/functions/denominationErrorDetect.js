export default function denominationErrorDetect(amount, denominations) {
  return !(
    denominations === null ||
    amount % denominations[0] === 0 ||
    amount % denominations[1] === 0 ||
    (amount % denominations[1]) % denominations[0] === 0
  );
}
