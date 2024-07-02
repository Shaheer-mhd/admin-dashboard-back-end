const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())

let users = [
    {
        id: 1,
        lastname: 'Smith',
        firstname: 'John',
        email: 'johnsmith@example.com',
        phone: '987 654 321',
        createdAt: '12.03.2021',
        verified: true
    },
    {
        id: 2,
        lastname: 'Johnson',
        firstname: 'Emily',
        email: 'emilyjohnson@example.com',
        phone: '456 123 789',
        createdAt: '23.04.2020',
        verified: true
    },
    {
        id: 3,
        lastname: 'Williams',
        firstname: 'Michael',
        email: 'michaelwilliams@example.com',
        phone: '321 654 987',
        createdAt: '05.05.2019'
    },
    {
        id: 4,
        lastname: 'Brown',
        firstname: 'Sarah',
        email: 'sarahbrown@example.com',
        phone: '654 321 456',
        createdAt: '19.06.2018',
        verified: true
    },
    {
        id: 5,
        lastname: 'Jones',
        firstname: 'David',
        email: 'davidjones@example.com',
        phone: '123 987 654',
        createdAt: '11.07.2017'
    },
    {
        id: 6,
        lastname: 'Garcia',
        firstname: 'Anna',
        email: 'annagarcia@example.com',
        phone: '789 654 321',
        createdAt: '24.08.2016'
    },
    {
        id: 7,
        lastname: 'Martinez',
        firstname: 'James',
        email: 'jamesmartinez@example.com',
        phone: '321 987 654',
        createdAt: '02.09.2015'
    },
    {
        id: 8,
        lastname: 'Davis',
        firstname: 'Jessica',
        email: 'jessicadavis@example.com',
        phone: '654 789 123',
        createdAt: '15.10.2014',
        verified: true
    },
    {
        id: 9,
        lastname: 'Rodriguez',
        firstname: 'Daniel',
        email: 'danielrodriguez@example.com',
        phone: '789 321 456',
        createdAt: '28.11.2013',
        verified: true
    },
    {
        id: 10,
        lastname: 'Martinez',
        firstname: 'Laura',
        email: 'lauramartinez@example.com',
        phone: '123 654 789',
        createdAt: '03.12.2012',
        verified: true
    },
    {
        id: 11,
        lastname: 'Hernandez',
        firstname: 'Robert',
        email: 'roberthernandez@example.com',
        phone: '987 321 654',
        createdAt: '07.01.2011'
    },
    {
        id: 12,
        lastname: 'Lopez',
        firstname: 'Elizabeth',
        email: 'elizabethlopez@example.com',
        phone: '456 987 321',
        createdAt: '22.02.2010'
    },
    {
        id: 13,
        lastname: 'Gonzalez',
        firstname: 'William',
        email: 'williamgonzalez@example.com',
        phone: '321 456 987',
        createdAt: '30.03.2009',
        verified: true
    },
    {
        id: 14,
        lastname: 'Wilson',
        firstname: 'Linda',
        email: 'lindawilson@example.com',
        phone: '654 123 987',
        createdAt: '14.04.2008'
    },
    {
        id: 15,
        lastname: 'Griffin',
        firstname: 'Eric',
        email: 'ubi@gmail.com',
        phone: '123 456 789',
        createdAt: '01.02.2023'
    }
]

let usersgroup = [
    {
        id: 1,
        lastname: 'Smith',
        firstname: 'John',
        email: 'johnsmith@example.com',
        phone: '987 654 321',
        createdAt: '12.03.2021',
        verified: true
    },
    {
        id: 2,
        lastname: 'Johnson',
        firstname: 'Emily',
        email: 'emilyjohnson@example.com',
        phone: '456 123 789',
        createdAt: '23.04.2020',
        verified: true
    },
    {
        id: 3,
        lastname: 'Williams',
        firstname: 'Michael',
        email: 'michaelwilliams@example.com',
        phone: '321 654 987',
        createdAt: '05.05.2019'
    },
    {
        id: 4,
        lastname: 'Brown',
        firstname: 'Sarah',
        email: 'sarahbrown@example.com',
        phone: '654 321 456',
        createdAt: '19.06.2018',
        verified: true
    },
    {
        id: 5,
        lastname: 'Jones',
        firstname: 'David',
        email: 'davidjones@example.com',
        phone: '123 987 654',
        createdAt: '11.07.2017'
    },
    {
        id: 6,
        lastname: 'Garcia',
        firstname: 'Anna',
        email: 'annagarcia@example.com',
        phone: '789 654 321',
        createdAt: '24.08.2016'
    },
    {
        id: 7,
        lastname: 'Martinez',
        firstname: 'James',
        email: 'jamesmartinez@example.com',
        phone: '321 987 654',
        createdAt: '02.09.2015'
    },
    {
        id: 8,
        lastname: 'Davis',
        firstname: 'Jessica',
        email: 'jessicadavis@example.com',
        phone: '654 789 123',
        createdAt: '15.10.2014',
        verified: true
    },
    {
        id: 9,
        lastname: 'Rodriguez',
        firstname: 'Daniel',
        email: 'danielrodriguez@example.com',
        phone: '789 321 456',
        createdAt: '28.11.2013',
        verified: true
    },
    {
        id: 10,
        lastname: 'Martinez',
        firstname: 'Laura',
        email: 'lauramartinez@example.com',
        phone: '123 654 789',
        createdAt: '03.12.2012',
        verified: true
    },
    {
        id: 11,
        lastname: 'Hernandez',
        firstname: 'Robert',
        email: 'roberthernandez@example.com',
        phone: '987 321 654',
        createdAt: '07.01.2011'
    },
    {
        id: 12,
        lastname: 'Lopez',
        firstname: 'Elizabeth',
        email: 'elizabethlopez@example.com',
        phone: '456 987 321',
        createdAt: '22.02.2010'
    },
    {
        id: 13,
        lastname: 'Gonzalez',
        firstname: 'William',
        email: 'williamgonzalez@example.com',
        phone: '321 456 987',
        createdAt: '30.03.2009',
        verified: true
    },
    {
        id: 14,
        lastname: 'Wilson',
        firstname: 'Linda',
        email: 'lindawilson@example.com',
        phone: '654 123 987',
        createdAt: '14.04.2008'
    },
    {
        id: 15,
        lastname: 'Griffin',
        firstname: 'Eric',
        email: 'ubi@gmail.com',
        phone: '123 456 789',
        createdAt: '01.02.2023'
    }
]

// Get all users
app.get('/api/users', (req, res) => {
    console.log('====================================');
    console.log("Api Call for Get All Users...");
    console.log('====================================');
    res.json(usersgroup)
})

// Get individual user
app.get('/api/users/:id', (req, res) => {
    console.log('====================================');
    console.log("Api call for get individual user");
    console.log('====================================');
    const user = usersgroup.find((user) => user.id === parseInt(req.params.id))
    res.json(user)
})

// Add new User
app.post('/api/users', (req, res) => {
    console.log('====================================');
    console.log("Api call for add new user");
    console.log('====================================');
    usersgroup.unshift(req.body);
    res.json(usersgroup)
})

// delete existing user
app.delete('/api/users/:id', (req, res) => {
    console.log('====================================');
    console.log("Api call for delete a user");
    console.log('====================================');
    usersgroup = usersgroup.filter((user) => user.id !== parseInt(req.params.id))
    res.json("User deleted")
})


app.listen(3106, ()=>{
    console.log('====================================');
    console.log("Readct Admin Dashboard Backend Running on port 3106 ......");
    console.log('====================================');
})