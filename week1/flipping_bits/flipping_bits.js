function flippingBits(n) {
  let newArr = n.toString().split("");
  console.log(newArr);
  let n32 = n.toString(2).split("");
  console.log(n32);
  let difference = 32 - n32.length;
  console.log(difference);
  let empty = [];
  while (difference > 0) {
    empty.push("1");
    difference--;
  }

  for (let i = 0; i < n32.length; i++) {
    console.log(n32);
    if (n32[i] === "1") empty.push("0");
    else empty.push("1");
    console.log(empty.join(""));
  }
  console.log(empty.join(""));

  let result = 0;
  for (let i = 0; i < empty.length; i++) {
    result += Math.pow(2, empty.length - i - 1) * Number(empty[i]);
  }
  return result;
}
