const { onRequest } = require("firebase-functions/v2/https");

exports.venunTest = onRequest((req, res) => {
    res.status(200).json({
        success: true,
        message: "Backend VENUN opérationnel"
    });
});
