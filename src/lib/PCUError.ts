/**
 * The Error class for this project.
 * 
 * Code     Message
 * 1        unknown
 * 2        invalid_string
 * 3        not_string
 */

import      { LMError                   } from '@leismore/lmos-nodejs-lmerror';
import type { LMErrorErr as PCUErrorErr } from '@leismore/lmos-nodejs-lmerror';

class PCUError extends LMError {

    /**
     * @throws {Error}
     *   invalid_error
     *   invalid_error_message
     *   invalid_error_code
     *   invalid_previous
     */
    constructor(error: PCUErrorErr, previous?: Error)
    {
        super(error, undefined, previous);
        this.name = 'PCUError';
    }
}

export { PCUError };
export type { PCUErrorErr };
