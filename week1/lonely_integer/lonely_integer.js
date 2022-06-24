function lonelyinteger(a) {
  const result = a.reduce((acc, cur) => {
    if (acc[cur] === undefined) acc[cur] = 1;
    else acc[cur]++;
    return acc;
  }, {});
  console.log(result);
  return Object.keys(result).find((key) => result[key] === 1);
}
