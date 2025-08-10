import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "   hello  world  ",
        expected: ["hello", "world"],
    },
    {
        input: "hello world",
        expected: ["hello", "world"],
    },
    {
        input: "hello world, goodbye world!",
        expected: ["hello", "world,", "goodbye", "world!"],
    },
    {
        input: "HELLO  WORLD",
        expected: ["hello", "world"],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
