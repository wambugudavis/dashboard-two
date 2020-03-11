module.exports = {
    theme: {
        extend: {
            colors: {
                'davis-grey-dark': '#454360',
                'davis-grey-light': '#F6F6FD',
                'davis-red': '#FE4C5F',
                'davis-purple': '#6C6DE5',
                'davis-orange': '#FAAB1D'
            },
            scale: {
                '115': '1.15'
            }
        },
    },
    variants: {
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        opacity: ['responsive', 'hover', 'focus', 'group-hover']
    },
    plugins: [],
};
