import dbConnect from '../../../lib/dbConnect'
import ProjetModel from '../../../models/ProjetModel'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const projets = await ProjetModel.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: projets })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const projet = await ProjetModel.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: projet })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
