module.exports = async (userModel) => {
  try {
    const user = await userModel.findOne();
    if (!user) {
      const newUser = await userModel.create({
        username: "root",
        password: "somepassword",
        email: "someone@gmail.com",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
