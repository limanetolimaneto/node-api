class ClientController{
    constructor(clientService) {
        this.service = clientService;
    }

    index = async(req,res) => {
        const allClients = await this.service.listAllClients();
        return res.json(allClients);
    }

    store = async(req,res) => {
        const client = req.body;
        const newClient = await this.service.create(client);
        return res.json(newClient);
    }

    update = async(req,res) => {
        const id = req.params.id;
        const clientFields = req.body;
        const newClient = await this.service.update(id, clientFields);
        return res.json(newClient);
    }

    delete = async(req,res) => {
        const id = req.params.id;
        const deletedClient = await this.service.delete(id);
        return res.json(deletedClient);
    }

}

module.exports = ClientController;
