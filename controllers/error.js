
exports.get404Page = (req, res, next) => {
  res.status(404).render('error404.ejs' )
}