/**
 * Functionto handle the 404 condition.
 * @param {Object} app 
 * @param {string} type 
 * @param {string} value 
 */
function express404(app, type, value = '404') {
    if (type === 'template') {
        app.set('view engine', 'ejs');
        // Assume 404 since no middleware responded
        app.use(function (req, res) {
            res.status(404);
            res.render(value);
        });
    } else {
        // Assume 404 since no middleware responded
        app.use(function (req, res) {
            res.status(404).json({
                statusCode: 404,
                message: value
            });
        });
    }
}

module.exports = express404;