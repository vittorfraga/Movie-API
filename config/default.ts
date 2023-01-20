const dbUser = process.env.DB_USER;
const dbPassoword = process.env.DB_PASS;

export default {
  port: 3000,
  dbUri: `mongodb+srv://${dbUser}:${dbPassoword}@cluster0.tmf2l9k.mongodb.net/?retryWrites=true&w=majority`,
  env: "development",
};
