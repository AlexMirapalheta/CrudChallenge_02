module.exports = (object) => {
  const yearInMilliseconds = 365 * 24 * 60 * 60 * 1000;
  const today = new Date();
  const birthdate = new Date(object.birthdate);

  const age = Math.trunc((today.getTime() - birthdate.getTime()) / yearInMilliseconds);

  object.age = age;

  return object;
};
