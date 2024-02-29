export const checkValidate = (email, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isEmailValid && isPasswordValid) return "Email is not vaild";
  if (isEmailValid && !isPasswordValid) return "Password is not vaild";
  if (!isEmailValid && !isPasswordValid)
    return "Both Email and Password are invalid";
  return null;
};
