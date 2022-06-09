import dbConnect from '../../../lib/dbConnect'
import Membre from '../../../models/ProjetModel'

export default async function handler(req, res) {
    const {
        query: { id },
        method,
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const projet = await projets.findById(id)
                if (!membre) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: projet })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const projet = await projets.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                })
                if (!projet) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: projet })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedProjet = await projets.deleteOne({ _id: id })
                if (!deletedProjet) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
