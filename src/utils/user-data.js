export const getUserData = () => {
  const stringData = localStorage.getItem("userData");
  if (!!stringData) {
    return JSON.parse(stringData);
  }
  return null;
};

export const putUserData = (userData) => {
  return localStorage.setItem("userData", JSON.stringify(userData));
};

export const removeUserData = () => {
  return localStorage.removeItem("userData");
};
