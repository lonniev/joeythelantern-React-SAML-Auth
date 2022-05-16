const config = {
    saml: {
        cert: process.env.SAML_IDP_CERT_PEM,
        entryPoint: process.env.SAML_IDP_ENTRYPOINT_URL,
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
