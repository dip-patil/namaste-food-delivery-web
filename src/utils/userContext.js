import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dipkumar Patil",
    email: "dipkumarpa2020@gmail.com",
  },
});

export default userContext;
