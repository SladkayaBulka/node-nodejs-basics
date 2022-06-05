export const parseEnv = () => {
  Object.keys(process.env).forEach((variabel) => {
    if (/^RSS_/.test(variabel)) {
      console.log(`${variabel}=${process.env[variabel]}`);
    }
  });
};

parseEnv();
