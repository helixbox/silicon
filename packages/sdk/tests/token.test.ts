import { HelixboxToken } from "../src";


test(`test tokens`, async () => {
  const hts = await HelixboxToken.find({
    chains: ['42161'],
    tokens: ['ring'],
  });
  expect(hts.length).toBe(1);
  expect(hts[0].platforms[0].address).toBe("0x9e523234d36973f9e38642886197d023c88e307e");
}, 60000);
