const {auth} = require('./FBconfig')
const path = require("path");
const decodeIDToken = async(req, res, next)=>{
    const header = await req.headers.cookie
if(header !== 'Bearer%20null' && req.headers?.cookie?.startsWith('Bearer%20')){
            const idToken = req.headers.cookie.split('Bearer%20')[1]
            try {
                const decodedIdToken = await auth.verifyIdToken(idToken)
                req.currentUser = decodedIdToken
                console.log('ok');
                next()
            } catch (error) {
                console.log(error);
                res.redirect("/login")
                //res.sendFile(path.join(__dirname, "../public/login/" + "login.html"))
            }
            }else {
                console.log('no token');
                res.redirect("/login")
                //res.sendFile(path.join(__dirname, "../public/login/" + "login.html"))
            }
}

module.exports = decodeIDToken