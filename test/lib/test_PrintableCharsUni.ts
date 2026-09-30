/**
 * Tests for the PrintableCharsUni class.
 */

import test   from 'node:test';
import assert from 'node:assert/strict';
import { PrintableCharsUni, PCUError } from '../../src/index.js';

import {
    VALID   as STRINGS_VALID,
    INVALID as STRINGS_INVALID
 } from './cases_string.js';

function test_PrintableCharsUni() {

    test('TESTING PrintableCharsUni', async t => {

        // Test valid strings
        for (const str of STRINGS_VALID) {

            await t.test(`String: ${str}`, () => {

                const pcu = new PrintableCharsUni(str);

                assert.strictEqual(String(pcu), str,
                    `toString() - Expected: ${str} / Actual: ${String(pcu)}`
                );

                assert.strictEqual(PrintableCharsUni.isValid(str), true,
                    `isValid() - Expected: TRUE / Actual: ${PrintableCharsUni.isValid(str)}`
                );

                assert.strictEqual(PrintableCharsUni.removeInvalidChars(str), str,
                    `removeInvalidChars() - Expected: ${str} / Actual: ${PrintableCharsUni.removeInvalidChars(str)}`
                );

            });

        }  // End of the valid strings loop

        // Test invalid strings
        for (const str of STRINGS_INVALID) {

            // Set the text version of inputs
            const INPUT_STRINGIFIED = ( typeof str === 'symbol' ? 'Symbol' : `${str}` );

            await t.test( `Input: ${INPUT_STRINGIFIED}`, () => {

                // Test the constructor
                assert.throws(
                    () => { new PrintableCharsUni(str); },
                    PCUError,
                    `The constructor should throw a PCUError for the invalid input: ${INPUT_STRINGIFIED}.`
                );

                // Test the isValid() method
                assert.strictEqual(PrintableCharsUni.isValid(str), false,
                    'isValid() - Expected: FALSE / Actual: TRUE'
                );

                // Test the removeInvalidChars() method
                if (typeof str !== 'string') {

                    assert.throws(
                        () => { PrintableCharsUni.removeInvalidChars(str); },
                        PCUError,
                        `removeInvalidChars() should throw a PCUError for the non-string input: ${INPUT_STRINGIFIED}`
                    );

                } else {

                    // Test empty string case
                    if (str === '') {
                        assert.strictEqual( PrintableCharsUni.removeInvalidChars(str), '',
                            (
                                `removeInvalidChars() - `   +
                                `Expected: Empty string / ` +
                                `Actual: ${PrintableCharsUni.removeInvalidChars(str)}`
                            )
                        );
                    } else {
                        const cleanedStr = PrintableCharsUni.removeInvalidChars(str);
                        const pcuCleanedStr = new PrintableCharsUni(cleanedStr);

                        assert.strictEqual( cleanedStr, String(pcuCleanedStr),
                            (
                                `removeInvalidChars() - ` +
                                `Expected: ${String(pcuCleanedStr)} / ` +
                                `Actual: ${cleanedStr}`
                            )
                        );
                    }
                    
                }  // End of the removeInvalidChars() test block

            });  // End of the sub-test

        }  // End of the invalid strings loop

    });  // End of PrintableCharsUni tests

}

export { test_PrintableCharsUni };
