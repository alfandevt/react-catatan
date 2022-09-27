export const showFormattedDate = (date, langId = "id-ID") => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(langId, options);
};

export const generateId = () => {
  return `note-${+new Date()}${Math.round(Math.random() * 10)}`;
};

export const charLengthLeft = (limiter, textLength) => {
  return limiter - textLength;
};

export const filterList = (list, key, keyword) =>
  list.filter((item) =>
    item[key].toLowerCase().includes(keyword.toLowerCase())
  );
