const config = {
    saml: {
        cert: './source/config/saml.pem',
        entryPoint: 'https://intercaxtest.okta.com/app/intercaxtest_syndeia_1/exk12p6ympcqnZ1rd697/sso/saml',
        issuer: 'http://localhost:1337',
        options: {
            failureRedirect: '/login',
            failureFlash: true
        }
    },
    server: {
        port: 1337
    },
    session: {
        resave: false,
        secret: 'supersecretamazingpassword',
        saveUninitialized: true
    }
};

export default config;
