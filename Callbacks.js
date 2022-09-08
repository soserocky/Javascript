window.setTimeout(() => {
  let x = 10;
  console.log('Callback 1');
  window.setTimeout(() => {
    console.log('Callback 2');
    console.log(x);
  }, 2000);
}, 2000);
