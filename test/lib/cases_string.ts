/**
 * Strings for testing.
 */

import { ALL as JS_PRIMITIVES } from '@leismore/lmos-nodejs-primitives';

const NUL = '\x00';      // Null character      in ASCII
const LS  = '\u2028';    // Line Separator      in Unicode
const PS  = '\u2029';    // Paragraph Separator in Unicode

const NON_STRING_VALUES: Array<any> = JS_PRIMITIVES.filter(
    value => ( typeof value !== 'string' )
);

const TYPICAL_STRING = 'This is a typical English sentence, which uses only characters from the ASCII character set.';

const STRING_EMPTY = '';

const STRING_VALID_EN = 'I know that I know nothing. 🏛️';
const STRING_VALID_ZH = '我唯一知道的就是我一无所知。';
const STRING_VALID_JP = '私は自分が何も知らないということだけを知っている。';

const STRING_INVALID_C_EN = ( NUL + 'This string contains a null character. 💻' + NUL );
const STRING_INVALID_C_ZH = ( NUL + '这是一句包含空字符的中文字符串。 💻' + NUL );
const STRING_INVALID_C_JP = ( NUL + 'これはヌル文字を含む日本語の文字列です。 💻' + NUL );

const STRING_INVALID_ZL_EN = (
    'This is the first line. 💻'  + LS +
    'This is the second line. 💻' + LS
);

const STRING_INVALID_ZL_ZH = (
    '这是第一行。 💻' + LS +
    '这是第二行。 💻' + LS
);

const STRING_INVALID_ZL_JP = (
    'これは1行目です。 💻' + LS +
    'これは2行目です。 💻' + LS
);

const STRING_INVALID_ZP_EN = (
    'This is the first paragraph. 💻'  + PS +
    'This is the second paragraph. 💻' + PS
);

const STRING_INVALID_ZP_ZH = (
    '这是第一段。 💻' + PS +
    '这是第二段。 💻' + PS
);

const STRING_INVALID_ZP_JP = (
    'これは第一段落です。 💻' + PS +
    'これは第二段落です。 💻' + PS
);

const VALID = [
    TYPICAL_STRING,
    STRING_VALID_EN,
    STRING_VALID_ZH,
    STRING_VALID_JP
];

const INVALID = [
    ...NON_STRING_VALUES,
    STRING_EMPTY,
    STRING_INVALID_C_EN,
    STRING_INVALID_C_ZH,
    STRING_INVALID_C_JP,
    STRING_INVALID_ZL_EN,
    STRING_INVALID_ZL_ZH,
    STRING_INVALID_ZL_JP,
    STRING_INVALID_ZP_EN,
    STRING_INVALID_ZP_ZH,
    STRING_INVALID_ZP_JP
];

const ALL = [
    ...VALID,
    ...INVALID
];

export {

    TYPICAL_STRING,
    STRING_VALID_EN,
    STRING_VALID_ZH,
    STRING_VALID_JP,

    NON_STRING_VALUES,
    STRING_EMPTY,
    STRING_INVALID_C_EN,
    STRING_INVALID_C_ZH,
    STRING_INVALID_C_JP,
    STRING_INVALID_ZL_EN,
    STRING_INVALID_ZL_ZH,
    STRING_INVALID_ZL_JP,
    STRING_INVALID_ZP_EN,
    STRING_INVALID_ZP_ZH,
    STRING_INVALID_ZP_JP,

    VALID, INVALID, ALL
};
