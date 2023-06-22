import * as travelService from "../services/travels.service.js";
import { getTravelsDB } from "../repositories/travels.repository.js";

export async function getTravels(req, res){
    const page = req.params.page;

    try {
        const resultPage = await travelService.pageService(page);

        if (resultPage > 4) return res.status(500).send("Too many results");

        if (isNaN(resultPage)) return res.status(400).send("Invalid page value");

        const result = await getTravelsDB(resultPage);
        return res.status(200).send(result);
        
    } catch(error) {
        return res.status(500).send(error.message);
    }
}
