const validationSignUpData = (req) => {
    const {firstName, lastName, emailId, password} = req.body;
      if(!firstName && !lastName){
        throw new Error("Enter Valid Name");
      };
      if(!validator.isEmail(emailId)){
        throw new Error("Please Enter Valid Email Id");
      };
      if(!validator.isStrongPassword(password) && !password){
        throw new Error("Please Enter Valid Password");
      };
};

module.exports = {
    validationSignUpData
};