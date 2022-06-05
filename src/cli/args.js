export const parseArgs = () => {
  process.argv.slice(2).forEach((_, index, arr) => {
    Number.isInteger(index / 2) &&
      console.log(arr.slice(index, index + 2).join(" is "));
  });
};

parseArgs();
