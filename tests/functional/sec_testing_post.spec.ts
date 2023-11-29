import { test } from '@japa/runner'
//import User from 'App/Models/User'

test.group('Sec testing post', () => {
  //excelentgood
  
  test('new user POST and assert body', async ({client}) => {
    
    const response = await client.post('/users').form({
      username: "Nicole Denisse Diaz Flores",
      email: "nicoldensdizfior@gmail.com",
      contrasenia: "3456",
    });

    
    response.assertStatus(201)
    response.assertBody({
      data:{
        username: "Nicole Denisse Diaz Flores",
        email: "nicoldensdizfior@gmail.com",
        contrasenia: "3456",
      }
    })
    
  })


  //-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|

  //excelentgood

  test('update user PUT method and assertBody', async ({client}) => {

    const response = await client.put('/usersUpdate/70')
      .form({
          username: "Luan Martinez Hernandez",
		      email: "lunmarher30@gmail.com",
          contrasenia: "ertert",
      })

      
      response.assertBody({
        id: 70,
        username: "Luan Martinez Hernandez",
		      email: "lunmarher30@gmail.com",
      })
  })


  //-----------------------------------------------------------------------------------------------------------------------------------------------
  //excelentgood
  
  test('new user POST method and assertBodyContains', async ({client}) => {

    const response = await client.post('/usersContains').form({
      username: 'JosueVillalobos',
      email: 'josuvilllob@gmail.com',
      contrasenia: "09480698",
    });

    response.assertStatus(201)
    response.assertBodyContains({
      data:{
        username: 'JosueVillalobos',
        email: 'josuvilllob@gmail.com',
        contrasenia: "09480698",
      }
      
    })
  })


  //-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|

//excelentgood
  test('update user PUT method and assertBodyContains', async ({client}) => {

    const response = await client.put(`/usersUpdateContains/71`)
      .form({ 
        username: 'OliviaRamirez',
      email: 'olivRam@gmail.com',
      contrasenia: "09480698",
      })

      
      response.assertBodyContains({
        id: 71,
        username: 'OliviaRamirez',
        email: 'olivRam@gmail.com',
      })
  })

})
