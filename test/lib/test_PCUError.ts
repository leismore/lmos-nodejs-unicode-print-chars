/**
 * Tests for the PCUError class.
 * 
 * Test goals:
 * 
 * 1. Verify that the PCUError class can be instantiated without a previous error.
 * 2. Verify that the PCUError class can be instantiated with a previous error.
 * 3. Verify that the name of the PCUError instance is correctly set.
 */

import test   from 'node:test';
import assert from 'node:assert/strict';

import { PCUError             } from '../../src/index.js';
import { VALID as ERR_VALID   } from './cases_PCUErrorErr.js';
import { VALID as ERROR_VALID } from './cases_Error.js';

const CLASS_NAME = 'PCUError';

function test_PCUError() {

    // Without a previous error
    for (const err of ERR_VALID) {

        test(`PCUError w/o previous - ${err.code}`, () => {

            const error = new PCUError(err);

            assert.strictEqual(error.name, CLASS_NAME,
                `Error Name - Expected: ${CLASS_NAME} / Actual: ${error.name}`
            );

        });

    }

    // With a previous error
    for (const err of ERR_VALID) {

        for (const prev of ERROR_VALID) {

            test(`PCUError w/ previous - ${err.code}, previous: ${prev.message}`, () => {
                
                const error = new PCUError(err, prev);

                assert.strictEqual(error.name, CLASS_NAME,
                    `Error Name - Expected: ${CLASS_NAME} / Actual: ${error.name}`
                );

            });

        }

    }

}

export { test_PCUError };
