const myFunction = require("./reverseChars");

test("word with mixed case and special char", () => {
  expect(myFunction("Hello World!")).toEqual("Dliow! Svool");
})