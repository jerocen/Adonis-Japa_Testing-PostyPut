import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController 
{
    public async storeOne({ request, response }: HttpContextContract) 
    {
        try 
        {
            const payload = request.body();
            const user = new User();
            user.username = payload.username
            user.email = payload.email
            user.contrasenia = payload.contrasenia
            await user.save()
            return response.status(201).json({
                data: {
                    username: user.username,
                    email: user.email,
                    contrasenia: user.contrasenia
                }
            })
        }
        catch (e) 
        {
            console.error(e)
            return response.badRequest()
        }
    }

    public async updateOne({ params, response, request }: HttpContextContract) {
        const userId = params.id
        const user = await User.findOrFail(userId)
    
        const updatedData = request.only(['username', 'email', 'contrasenia'])
        user.merge(updatedData)
        await user.save()
    
        return response.json(user)
    }
    

    public async storeTwo({ request, response }: HttpContextContract) 
    {
        try 
        {
            const payload = request.body();
            const user = new User();
            user.username = payload.username
            user.email = payload.email
            user.contrasenia = payload.contrasenia
            await user.save()
            return response.status(201).json({
                data: {
                    username: user.username,
                    email: user.email,
                    contrasenia: user.contrasenia
                }
            })

            // const data = request.only(['username', 'email', 'contrasenia'])
            // const user = await User.create(data)

            // return response.status(201).json(user)
        }
        catch(error)
        {
            console.error(error)
            return response.badRequest()
        }
    }

    public async updateTwo({ params, response, request }: HttpContextContract) {
        // const userId = params.id
        // const user = await User.findOrFail(userId)

        // const updatedData = request.only(['username', 'email', 'password'])
        // user.merge(updatedData)
        // await user.save()

        // return response.json(user)

        // try {
        //     const user = await User.findOrFail(params.id)

        //     //user.username = request.input("username", "Sin nombre")

        //     user.save()

        //     return response.status(200).json(user)
        // }
        // catch (e) {
        //     response.badRequest("No se encontró a nadie con ese ID.")
        // }
        const userId = params.id
        const user = await User.findOrFail(userId)
    
        const updatedData = request.only(['username', 'email', 'contrasenia'])
        user.merge(updatedData)
        await user.save()
    
        return response.json(user)


    }

    public async index({response }: HttpContextContract) {
        try 
        {
            const user = await User.all();

            response.ok(user)
        }
        catch (e) {
            response.badRequest()
        }
     }
    //public async destroy({}: HttpContextContract) {}
    //public async create({}: HttpContextContract) {}
    //public async show({}: HttpContextContract) {}
    //public async edit({}: HttpContextContract) {}
}
