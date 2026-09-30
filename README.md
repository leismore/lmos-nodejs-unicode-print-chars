# lmos-nodejs-unicode-print-chars

A class represents a string of printable characters in Unicode.

A robust Node.js utility to validate, sanitize, and ensure strings contain only **safe, printable Unicode characters**.

## Motivation

In text processing, certain characters are invisible but active. Legacy control characters like `BEL` (ASCII 07) can trigger machine bells, while `DEL` (ASCII 7F) can alter text streams.

If an online form accepts user input and blindly processes it without validation, malicious or malformed inputs containing hidden control characters can disrupt your application, break JSON parsing, corrupt logs, or exploit text-rendering engines.

While modern frameworks offer basic protections, the safest practice is defense-in-depth: stopping unwanted characters at the very beginning of their journey.

This package provides a strict boundary for user data, ensuring that your strings consist entirely of valid, safe, and visible printable characters across the Unicode spectrum.

## Installation

`npm install @leismore/lmos-nodejs-unicode-print-chars`

## Test

`npm test`

## Build

`npm run build`

## Examples

```typescript

import { PrintableCharsUni, PCUError } from '@leismore/lmos-nodejs-unicode-print-chars';

const STRING_VALID_EN = 'I know that I know nothing. 🏛️';
const STRING_VALID_ZH = '我唯一知道的就是我一无所知。';
const STRING_VALID_JP = '私は自分が何も知らないということだけを知っている。';

// Throws PCUError, if illegal characters
const pcuEN = new PrintableCharsUni(STRING_VALID_EN);
const pcuZH = new PrintableCharsUni(STRING_VALID_ZH);
const pcuJP = new PrintableCharsUni(STRING_VALID_JP);

/**
 * Output:
 * - I know that I know nothing. 🏛️
 * - 我唯一知道的就是我一无所知。
 * - 私は自分が何も知らないということだけを知っている。
 */

console.log(String(pcuEN));
console.log(String(pcuZH));
console.log(String(pcuJP));

```

## API Reference

### Exports

```typescript
export { PCUError, PrintableCharsUni };
export type { PCUErrorErr };
```

### PCUError

**PCUError Class Properties**

* `error`      : `PCUErrorErr`
* `previous`?  : `Error`
* `timestamp`  : `Date`

`PCUError` is the Error class for this package. All errors thrown by this library are instances of this class, allowing you to easily catch and handle them in your application.

`PCUError` extends the `LMError` class from [@leismore/lmos-nodejs-lmerror](https://www.npmjs.com/package/@leismore/lmos-nodejs-lmerror). For more details, please refer to the documentation of `@leismore/lmos-nodejs-lmerror`.

### PCUErrorErr

```typescript
type PCUErrorErr = {
  readonly message: string, // Message for human. Only ASCII printable characters allowed.
  readonly code:    string  // Code for machine. Only letter, number, and underscore allowed.
};
```

### PrintableCharsUni

```typescript
class PrintableCharsUni {

    /**
     * @throws {PCUError}
     * 2    invalid_string
     */
    constructor(chars: string)

    public toString(): string

    public static isValid(chars: string): boolean

    /**
     * @throws {PCUError}
     * 3    not_string
     */
    public static removeInvalidChars(chars: string): string

}
```

`PrintableCharsUni` class represents a string of printable characters in Unicode.

## License

© [Leismore™](https://www.leismore.co) 2026

[MIT License](https://github.com/leismore/lmos-nodejs-unicode-print-chars/blob/main/LICENSE)

## Donation

* [Leismore™](https://github.com/sponsors/leismore) on GitHub

Help us to pay our bills, so we can focus on developing and maintaining this project.

## Authors

* [Kyle Chinn / Kai Qin / 秦凯](https://kyle.chinn.leismore.org) since 28 September 2026

## Credits

* [@leismore/lmos-nodejs-lmerror](https://www.npmjs.com/package/@leismore/lmos-nodejs-lmerror)

## References

* Unicode 18.0.0 <https://www.unicode.org/versions/Unicode18.0.0>




------------------------------------------------------------------------------

Product of [Leismore™ OpenSource](https://lmos.leismore.org) Project

Supported by [Leismore™](https://www.leismore.co) (Australian Business Number: 25 935 862 619)
