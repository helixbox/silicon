import { HelixboxToken } from "../src";


// test(`test ring`, async () => {
//   const hts = await HelixboxToken.find({
//     chains: ['42161'],
//     tokens: ['ring'],
//   });
//   expect(hts.length).toBe(1);
//   expect(hts[0].platforms[0].address).toBe("0x9e523234d36973f9e38642886197d023c88e307e");
// }, 60000);

// test(`test nataive token`, async () => {
//   const hts = await HelixboxToken.find({
//     chains: ['42161', '1', '10', '137'],
//     tokens: ['0x0000000000000000000000000000000000000000'],
//   });
//   expect(hts.length).toBe(2);
//   expect(hts[0].platforms[0].address).toBe("0x0000000000000000000000000000000000000000");
// }, 60000);


test(`test darwinia`, async () => {
  await HelixboxToken.load([46]);
  const hts = await HelixboxToken.find({
    chains: ['46'],
    tokens: ['0x0000000000000000000000000000000000000403'],
  });
  expect(hts.length).toBe(1);
  expect(hts[0].platforms[0].address).toBe("0x0000000000000000000000000000000000000403");
}, 60000);
