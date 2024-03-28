const getHomepage = (req, res) => {
    res.render('index.ejs');
}
const getContact = (req, res) => {
    res.render('contact.ejs');
}
const getAbout = (req, res) => {
    res.send('trunghieutran');
}

module.exports = {getHomepage,getContact,getAbout};