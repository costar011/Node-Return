import express from "express";

const PORT = 3113;
const app = express();

const plusNumber = (param) => {
  const result = param + "000";

  const finalResult = parseInt(result);

  return finalResult;
};

const concat = (param1, param2) => {
  const result = param1 + param2;

  return result;
};

app.listen(PORT, () => {
  console.log(`${PORT} server start`);

  const changeValue = plusNumber(7);
  console.log(changeValue);

  const adidas = concat("Hi", "I'm RYAN");
  console.log(adidas);
});
