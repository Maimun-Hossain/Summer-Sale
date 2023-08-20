let total = 0;
const couponBtn = document.getElementById("coupon-btn");
const purchaseBtn = document.getElementById("purchase");
couponBtn.disabled = true;
purchaseBtn.disabled = true;

function btnAction(call) {
  const productName = call.parentNode.childNodes[3].innerText;
  const itemsName = document.getElementById("items-name");
  const li = document.createElement("li");
  const itemCount = itemsName.getElementsByTagName("li").length + 1;
  li.innerText = itemCount + ". " + productName;
  itemsName.appendChild(li);

  const price = call.parentNode.childNodes[5].innerText.split(" ")[0];
  total = parseFloat(total) + parseFloat(price);
  const totalPrice = document.getElementById("total-price");
  totalPrice.innerText = total;

  totalPrice.innerText = total;

  if (parseFloat(totalPrice.innerText) >= 200) {
    couponBtn.disabled = false;
    purchaseBtn.disabled = false;
  }
}

document.getElementById("coupon-btn").addEventListener("click", function () {
  const couponInput = document.getElementById("coupon-input");
  const discountOutput = document.getElementById("discount-output");
  const totalOutput = document.getElementById("total-output");

  if (couponInput.value == "SELL200") {
    alert("You have successfully applied the discount");
    couponInput.value = "";
    let newTotal = total - (total * 2) / 10;
    const remainder = total * 0.2;
    discountOutput.innerText = remainder;
    totalOutput.innerText = newTotal;
  } else {
    alert("Wrong Code, Try Again");
    couponInput.value = "";
  }
});
// for reload
function btnReload() {
  location.reload();
}
