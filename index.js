const express = require('express');
const app = express();

app.use(express.json());

const employees = [
    {id: 1, name: 'Borbon', age: 35, enroll: true},
    {id: 2, name: 'Friki', age: 42, enroll: false},
    {id: 3, name: 'Yo', age: 30, enroll: false}
];

app.get('/', (req, res)=>{
    res.send('Node Js API');
});

app.get('/api/employees', (req, res)=>{
    res.send(employees);
});

app.get('/api/employees/:id', (req, res)=>{
    const employee = employees.find(c => c.id ===parseInt(req.params.id));
    if(!employee) return res.status(404).send('Empleado no encontrado');
    else res.send(employee);
});


app.post('/api/employees', (req, res)=>{
    const employee = {
        id: employees.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: (req.body.enroll === 'true')
    };
    employees.push(employee);
    res.send(employee);
});

app.delete('/api/employees/:id',(req, res) => {
    const employee = employees.find(c => c.id ===parseInt(req.params-id))
    if(!employee) return res.status(404).send('Empleado no encontrado');
    const index = employees.indexOf(employee)
    employees.splice(index, 1)
    res.send(employee)
});

const port = process.env.port || 80;
app.listen(port, () => console.log(`Listening port ${port}...`))