/**
 * Instances of the PCUErrorErr type for testing purposes.
 */

import type { PCUErrorErr as Err } from '../../src/index.js';

const ERR_VALID: Err = {
	code: '01_VALID_ERR',
	message: 'This is a valid error for testing purposes.'
};

const VALID = [
    ERR_VALID
];

const ALL = [
    ERR_VALID
];

export {
	ERR_VALID,
	VALID, ALL
};
