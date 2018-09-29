export default class Test{
    constructor() {
        this.init()
    }
    async init() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(343434343)
    }
}