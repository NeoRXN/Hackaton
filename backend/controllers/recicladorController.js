const Reciclador = require('../model/Recicladores');



exports.crearRecolector = async (req,res) =>{
    try {
        let reciclador;
        // crea el nuevo reciclador
        reciclador = new Reciclador(req.body);
        await reciclador.save();

        res.send('Usuario creado exitosamente');
    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');
        
    }
}