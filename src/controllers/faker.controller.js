class FakerController{
    constructor(fakerService){
        this.service = fakerService;
    }

    async fakeUser(req,res){
        const resp = await this.service.user();
        return res.json(resp);
    }

}

module.exports = FakerController;