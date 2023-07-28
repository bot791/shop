import bcrypt from 'bcryptjs'

const users = [
    {
        name:'admin name',
        email:'admin@example.com',
        password: bcrypt.hashSync('12345',10),
        isAdmin:true
    },
    {
        name:'name name',
        email:'adminname@example.com',
        password: bcrypt.hashSync('12345',10),
    },
    {
        name:'noob name',
        email:'adminnoob@example.com',
        password: bcrypt.hashSync('12345',10),
    }
]

export default users