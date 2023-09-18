import { createStitches } from '@stitches/react';
import theme from './theme';

export const { styled, css, globalCss, config } = createStitches({
    media: {
        sm: '(min-width: 579px)',
        md: '(min-width: 768px)',
        lg: '(min-width: 1024px)',
        xl: '(min-width: 1400px)',
        xxl: '(min-width: 1600px)',
    },
});

export const globalStyles = globalCss({
    'html, body': {
        padding: 0,
        margin: 0,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    },

    a: {
        color: 'inherit',
        textDecoration: 'none',
    },

    '*': {
        boxSizing: 'border-box',
    },

    body: {
        ...theme.baseTextStyle,
        ...{
            fontSize: '16px',

            '@lg': {
                fontSize: '18px',
            },
        },
    },
});
