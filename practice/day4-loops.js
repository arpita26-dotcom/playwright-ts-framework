const users = ['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user'];

for (const user of users) {
  if (user === 'locked_out_user') {
    console.log('Blocked:', user);
  } else {
    console.log('Valid:', user);
  }
}

for(let i =1; i <= 3; i++) {
    console.log('Attempt', i);
}