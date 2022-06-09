import dbConnect from '../../../lib/dbConnect'
import Projet from '../../../models/ProjetModel'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const projets = await Projets.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: projets })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const membre = await projets.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: Projets })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
