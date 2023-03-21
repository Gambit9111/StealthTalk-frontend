import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

const ChatContext = createContext({
  // ? if we setup our context like this we can use user. notation
  user: {
    _id: "",
    token: "",
    username: "",
    pic: "",
  },
});

interface ProviderProps {
  children: React.ReactNode;
}

const ChatProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState({
    user: {
      _id: "",
      token: "",
      username: "",
      pic: "",
    },
  });
  const router = useRouter();

  console.log(router.route);

  useEffect(() => {
    // @ts-ignore
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      if (router.route !== "/auth") {
        router.push("/");
      }
    }
  }, [router.route]);

  return (
    //@ts-ignore
    <ChatContext.Provider value={{ user, setUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
