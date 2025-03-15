function calculateTip() {
    let bill = document.getElementById("bill").value;
    let tipPercentage = document.querySelector('input[name="tip"]:checked').value;
    let tipAmount = (bill * (tipPercentage / 100)).toFixed(2);

    document.getElementById("result").innerText = `Tip: $${tipAmount}`;
}
