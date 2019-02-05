import axios from 'axios'

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function incrementCounter() {
  return 123
  // try {
  //   const response = await axios.get('/user?ID=12345');
  //   console.log(response);
  // } catch (error) {
  //   console.error(error);
  // }
}

export default {
  incrementCounter: incrementCounter,
}
