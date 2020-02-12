export const increment = num => {
  return {
    type: "INCREMENT",
    payLoad: num
  };
};

export const decrement = num => {
  return {
    type: "DECREMENT",
    payLoad: num
  };
};

export const logged = () => {
  return { type: "SIGN_IN" };
};
