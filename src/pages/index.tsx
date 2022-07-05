import { getOptionsForVote } from "../utils/getRandomPokemon";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  const [first, second] = getOptionsForVote();

  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Amiibo would win in a fight?</div>
      <div className="p-4"/>
      <div className="border rounded p-8 flex justify-between max-w-2xl items-center">
        <div>{first}</div>
        <div className="p-8">vs</div>
        <div>{second}</div>
      </div>
    </div>
  );
};

export default Home;
