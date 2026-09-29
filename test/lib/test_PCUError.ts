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

import { PCUError    } from '../../src/index.js';
import { ERR_VALID   } from './cases_PCUErrorErr.js';
import { ERROR_VALID } from './cases_Error.js';

const CLASS_NAME = 'PCUError';

function test_PCUError() {

    // Without a previous error
    test('PCUError w/o previous', () => {

        const error = new PCUError(ERR_VALID);

        assert.strictEqual(error.name, CLASS_NAME,
            `Error Name - Expected: ${CLASS_NAME} / Actual: ${error.name}`
        );

    });

    // With a previous error
    test('PCUError w/ previous', () => {
                
        const error = new PCUError(ERR_VALID, ERROR_VALID);

        assert.strictEqual(error.name, CLASS_NAME,
            `Error Name - Expected: ${CLASS_NAME} / Actual: ${error.name}`
        );

    });

}

export { test_PCUError };
