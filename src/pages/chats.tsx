import MainLayout from "@/components/Layouts/MainLayout";
import type { NextPageWithLayout } from "./_app";
import { ReactElement, useEffect } from "react";
import { ChatState } from "@/context/ChatContext";

const ChatsPage: NextPageWithLayout = () => {
  const { user } = ChatState();

  console.log(user);

  return (
    <div>
      <h1>ZOPA</h1>
    </div>
  );
};

ChatsPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default ChatsPage;
