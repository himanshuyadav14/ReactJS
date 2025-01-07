import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "Dummy@gmail.com",
  },
});

export default UserContext;
