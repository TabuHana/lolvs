import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Amiibo would win in a fight?</div>
      <div className="p-4"/>
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div>test</div>
        <div className="p-8">vs</div>
        <div>test</div>
      </div>
    </div>
  );
};

export default Home;
