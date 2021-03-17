import isAdmin from '../auth/isAdmin.js'

app.get('/admin', (req, res) => {
    if (!isAdmin(req.user)) {
        return res.redirect(403, '/error')
    }

    return res.render('admin')
})