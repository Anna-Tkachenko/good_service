import {Color} from "./models/Color";
import {Good} from "./models/Good";
import {dbInit} from "./utils/initDB";

(async () => {
  dbInit();

  await Color.sync({ alter: true });
  await Good.sync({ alter: true });

  await Color.create({
    name: 'red',
  });

  await Color.create({
    name: 'green',
  });

  await Color.create({
    name: 'blue',
  });


  console.log('synced!');
})()