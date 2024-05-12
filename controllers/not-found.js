module.exports = (req, res, next) => {
    res.status(404).render('not-found', {docTitle: 'not-found'});
};