import localFont from 'next/font/local';

const MERRIWEATHER_SANS = localFont(
    {
        src: [
            {
                path: '../../public/fonts/Merriweather_Sans/static/MerriweatherSans-Regular.ttf',
                weight: '400',
                style: 'normal'
            },
            {
                path: '../../public/fonts/Merriweather_Sans/static/MerriweatherSans-Bold.ttf',
                weight: '700',
                style: 'normal'
            },
            {
                path: '../../public/fonts/Merriweather_Sans/static/MerriweatherSans-Italic.ttf',
                weight: '400',
                style: 'italic'
            }
        ],
        variable: '--font-MERRIWEATHER_SANS',
        display: 'swap',
    }
);

export default MERRIWEATHER_SANS;