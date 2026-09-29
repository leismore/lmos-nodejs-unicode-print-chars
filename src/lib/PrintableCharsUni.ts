/**
 * PrintableCharsUni class represents a string of printable characters in Unicode.
 */

import { PCUError } from './PCUError.js';

const regexValidString  = /^[^\p{C}\p{Zl}\p{Zp}]+$/u;
const regexInvalidChars = /[\p{C}\p{Zl}\p{Zp}]/ug;

class PrintableCharsUni {

    protected readonly chars: string;

    /**
     * 
     * @throws {PCUError}
     * 2    invalid_string
     */
    constructor(chars: string)
    {
        if ( !PrintableCharsUni.isValid(chars) )
        {
            throw new PCUError({ code: '2', message: 'invalid_string' });
        }

        this.chars = chars;
    }

    public toString(): string
    {
        return this.chars;
    }

    /*  Static Methods */

    public static isValid(chars: string): boolean
    {
        return ( typeof chars === 'string' && regexValidString.test(chars) );
    }

    /**
     * 
     * @throws {PCUError}
     * 3    not_string
     */
    public static removeInvalidChars(chars: string): string
    {
        if (typeof chars !== 'string') {
            throw new PCUError({ code: '3', message: 'not_string' });
        }
        
        return chars.replace(regexInvalidChars, '');
    }

}

export { PrintableCharsUni };
