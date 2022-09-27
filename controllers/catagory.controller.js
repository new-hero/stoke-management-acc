const { 
    createCategoryService,
    getCategoryService,
    getCategoryByIdService,
    updateCategoryService,

} = require("../services/catagory.service");

module.exports.createCatagory = async (req, res, next) => {
    try {
        const result = await createCategoryService(req.body);

        res.status(200).json({
            status: "success",
            message: "Successfully created the catagory"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            status: "fail",
            error: "Couldn't create the the catagory"
        })
    }
}


exports.getCategoris = async (req, res, next) => {
    try {
        const brands = await getCategoryService();

        res.status(200).json({
            status: "success",
            data: brands
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the brands",
        });
    }
};

exports.getCategoryById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const brand = await getCategoryByIdService(id);

        if (!brand) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't find a brand with this id"
            })
        }

        res.status(200).json({
            status: "success",
            data: brand,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't get the brands",
        });
    }
};

exports.updateCategory = async (req, res, next) => {
    const { id } = req.params;
    try {
        const result = await updateCategoryService(id, req.body);

        if (!result.nModified) {
            return res.status(400).json({
                status: "fail",
                error: "Couldn't update the Controller with this id",
            });
        }

        res.status(200).json({
            status: "success",
            message: "Successfully updated the "
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            status: "fail",
            error: "Couldn't update the brand",
        });
    }
};