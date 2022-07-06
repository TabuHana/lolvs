import { createRouter } from "./context";
import { z } from "zod";


export const amiiboRouter = createRouter().query("get-amiibo-by-id", {
  // input: z
  //   .object({ index: z.any() }),

  async resolve() {
    const amiiboTest = await fetch(`https://www.amiiboapi.com/api//amiibo/?amiiboSeries=0x000`)
      let data = await amiiboTest.json();
      let amiibojson = data.amiibo;

    return {
      amiibojson
    };
  },
});
