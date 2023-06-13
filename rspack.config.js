const path = require('path');

module.exports = {
    entry: {
        main: __dirname + "/_build/default/test/test_client/test/test_client.js",
    },
    output: {
        filename: 'app_test_client.js',
        path: path.resolve(__dirname, 'lib/js/test-ocaml'),
        library: 'Test_client',
        libraryTarget: 'window',
    },
};
