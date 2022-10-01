import wishes from "../public/wishes/wishes";

const generateWish = (name: string) => {
   const wish = wishes[Math.floor(Math.random() * wishes.length)];
   return wish.replace("name", name);
};

export default generateWish;
