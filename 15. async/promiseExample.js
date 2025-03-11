const login = (username, password) => {
  return new Promise((resolve, reject) => {
    let accountList = [
      {
        username: "farrel",
        password: "akbar",
      },
      {
        username: "akbar",
        password: "farrel",
      },
    ];

    setTimeout(() => {
      const authenticate = accountList.find(
        (account) =>
          account.username === username && account.password === password
      );
      if (!authenticate) {
        reject("Salah Credential");
      }
      resolve("Login");
    }, 2000);
  });
};

login("farrel", "akbar")
  .then((resuult) => console.log(resuult))
  .catch((err) => console.log(err));
