const MAX_ID = 94;

export const getRandomAmiibo: (notThisOne?: number) => number = (
  notThisOne
) => {
  const amiiboNumber = Math.floor(Math.random() * MAX_ID) + 1;

  if (amiiboNumber !== notThisOne) return amiiboNumber;
  return getRandomAmiibo(notThisOne);
};

export const getOptionsForVote = () => {
  const firstId = getRandomAmiibo();
  const secondId = getRandomAmiibo(firstId);

  return [firstId, secondId];
};