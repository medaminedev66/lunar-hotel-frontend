/* eslint-disable consistent-return */
const authHeader = () => {
  const userToken = JSON.parse(localStorage.getItem('token'));

  if (userToken) {
    return { Authorization: userToken };
  }
};

export default authHeader;
