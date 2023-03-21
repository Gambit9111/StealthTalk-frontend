import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import MainLayout from "@/components/Layouts/MainLayout";
import * as Tabs from "@radix-ui/react-tabs";
import Signup from "@/components/Authentication/Signup";
import Login from "@/components/Authentication/Login";

const AuthPage: NextPageWithLayout = () => {
  return (
    <section className="flex h-screen flex-col items-center justify-center gap-6 p-9 pt-36 font-Goldman">
      <h1 className="font-Goldman text-5xl drop-shadow-3xl">StealthTalk</h1>
      <Tabs.Root
        defaultValue="signup"
        className="flex h-full w-full flex-col items-center"
      >
        <Tabs.List
          aria-label="tabs authentication"
          className="mb-10 flex w-full bg-my-black2/50"
        >
          <Tabs.Trigger
            className="w-1/2 rounded-tl rounded-bl border-t border-l border-b border-my-white/50 p-[0.3rem] hover:border-my-white/80 data-[state=active]:translate-y-[-1px] data-[state=active]:border-my-white/80 data-[state=active]:text-my-white"
            value="signup"
          >
            Sign Up
          </Tabs.Trigger>
          <Tabs.Trigger
            className="w-1/2 rounded-tr rounded-br border-t border-r border-b border-my-white/50 p-[0.3rem] hover:border-my-white/80 data-[state=active]:translate-y-[-1px] data-[state=active]:border-my-white/80 data-[state=active]:text-my-white"
            value="login"
          >
            Login
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="signup" className="w-full">
          <Signup />
        </Tabs.Content>
        <Tabs.Content value="login" className="w-full">
          <Login />
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
};

AuthPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default AuthPage;
