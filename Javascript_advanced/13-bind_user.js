const user = {
  hobby: "Calligraphy",
  favoriteSport: "Hockey",
  astrologicalSign: "Aries",
  firstName: "Guillaume",
  lastName: "Johns",
  location: "Netherlands",
  occupation: "Engineer",

  logWelcomeUser: function (welcomeString) {
    console.log(
      `${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`
    );
  },
};

let bindLogWelcomeUser = user.logWelcomeUser.bind(user);

bindLogWelcomeUser("Hello");
