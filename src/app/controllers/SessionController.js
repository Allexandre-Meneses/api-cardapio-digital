    import Admin from '../models/Admins'
    import jwt from 'jsonwebtoken'

    class SessionControler{

      async store(req, res){
        const {login, password} = req.body
        const admin = await Admin.findOne({ where: {login}});
        const { id } = admin;
        if(!admin){
          return res.status(401).json({error : "Usuario não existe"});
        }

        if(!(admin.password == password)) {
            return res.json({mensagem: "PASSWORD INCORRETO"})
        }

        return res.json({
          admin: {
            id,
            login
          },
          token: jwt.sign({ id},  'textounico', {
            expiresIn: '7d' // expirar em 7 dias
          }) // primeiro parametro payloud, segundo um texto unico, configurações do token
        })

      }
    }

    export default new SessionControler ();