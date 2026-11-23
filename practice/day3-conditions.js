const username = 'standard_user';

if (username === 'standard_user') {
  console.log('Should see Products page');
} else if (username === 'locked_out_user') {
  console.log('Should see locked-out error');
} else {
  console.log('Should see wrong-credentials error');
}

const cartCount = 1;
const status = cartCount > 0 ? 'Checkout' : 'Cart is empty';
console.log(status);