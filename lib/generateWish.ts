import wishes from "../public/wishes/wishes";

const generateWish = (name: string) => {


   const wish = wishes[Math.floor(Math.random() * wishes.length)];

//change all name to small caps

   return wish.replace("NAME", name);
};

export default generateWish;
