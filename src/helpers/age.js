module.exports = (date) => {
  const yearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
  const today = new Date();
  const birthdate = new Date(date);

  const age = Math.trunc((today.getTime() - birthdate.getTime()) / yearInMilliseconds);

  return age;
};
