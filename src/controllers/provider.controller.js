import {Provider} from "../models/Provider.js";

export const index = async (req, res) => {
    let providers = await Provider.findAll();
    res.json(providers);
}

export const saveProvider = async (req, res) => {
    const {name, nit} = req.body;
    try {
        let newProvider = await Provider.create({
            name,
            nit,
        }, {
            fields: ["name", "nit"]
        });
        if (newProvider) {
            return res.json({
                message: "Provider created successfully",
                data: newProvider
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Something goes wrong",
            data: {}
        });
    }
}

export const getProvider = async (req, res) => {
    const {id} = req.params;
    const provider = await Provider.findOne({
        where: {
            id
        }
    });
    res.json(provider);
}

// update unique provider
export const updateProvider = async (req, res) => {
    const {id} = req.params;
    const {name, nit} = req.body;

    const provider = await Provider.findOne({
        attributes: ["id", "name", "nit"],
    });
    await provider.update({
        name,
        nit
    });

    return res.json({
        message: "Provider updated successfully",
        data: provider
    });
}

// delete provider
export const deleteProvider = async (req, res) => {
    const {id} = req.params;
    await Provider.destroy({
        where: {
            id
        }
    });
    res.json({
        message: "Provider deleted successfully"
    });
}