class ClientController{
    constructor(clientService) {
        this.service = clientService;
    }

    async getClients() {
        return await this.service.findAll();
    }

    index = async (req, res) => {
        const clients = await this.getClients();
        return res.json(clients);
    }

    store = async (req, res) => {
        const client = req.body;
        const newClient = await this.service.create(client);
        return res.json(newClient);
    }

    update = async (req, res) => {
        const id = req.params.id;
        const client = req.body;
        const newClient = await this.service.update(id, user);
        return res.json(newClient);
    }

    delete = async (req, res) => {
        const id = req.params.id;
        const deletedClient = await this.service.delete(id);
        return res.json(deletedClient);
    }

}

module.exports = ClientController;