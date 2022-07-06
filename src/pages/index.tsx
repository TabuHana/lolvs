import { getOptionsForVote } from "../utils/getRandomAmiibo";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { trpc } from "../utils/trpc";
import Image from "next/image"

const Home: NextPage = () => {
  const [ids, updateIds] = useState(() => getOptionsForVote());
  const [first, second] = ids;

  const firstamiibo = trpc.useQuery(["amiibo.get-amiibo-by-id"])
  const secondamiibo = trpc.useQuery(["amiibo.get-amiibo-by-id"])
  // console.log(amiiboData.data?.amiibojson[5].);
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Amiibo would win in a fight?</div>
      <div className="p-4"/>
      <div className="p-8 flex justify-between max-w-2xl items-center">
        <div className="w-64 h-64 flex flex-col bg-red-200">
          <img
           src={firstamiibo.data?.amiibojson[first].image}
           alt="asdf"
           className="w-full"
           />
        </div>
        <div className="p-8">vs</div>
        <div className="w-64 h-64 flex flex-col bg-red-200">
          <img
           src={secondamiibo.data?.amiibojson[second].image}
           alt="asdf"
           className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
