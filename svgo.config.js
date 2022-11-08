module.exports = {
    js2svg: {
        pretty: true // boolean, false by default
    },
    plugins: [
        {
            name: "preset-default",
            params: {
                overrides: {
                    removeViewBox: false
                }
            }
        }
    ]
};
