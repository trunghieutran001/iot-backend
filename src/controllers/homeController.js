const getHomepage = (req, res) => {
    res.render('home.ejs');
}
const getQrCode = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage, getQrCode
}