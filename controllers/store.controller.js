const {
    createStoreService,
    getStoreService,
    getStoreByIdService,
    updateStoreService,
  } = require("../services/store.service");
  
  
  exports.createStore = async (req, res, next) => {
    try {
      const result = await createStoreService(req.body);
  
      res.status(200).json({
        status: "success",
        message: "Successfully created the brand"
      })
    } catch (error) {
      console.log(error)
      res.status(400).json({
        status: "fail",
        error: "Couldn't create the brand"
      })
    }
  }
  
  
  exports.getStores = async (req, res, next) => {
    try {
      const brands = await getStoreService(req.body);
  
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
  
  exports.getStoreById = async (req, res, next) => {
    const { id } = req.params;
    try {
      const brand = await getStoreByIdService(id);
  
      if(!brand){
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
  
  exports.updateStore = async (req, res, next) => {
    const { id } = req.params;
    try {
      const result = await updateStoreService(id, req.body);
  
      console.log(result);
  
      if (!result.nModified) {
        return res.status(400).json({
          status: "fail",
          error: "Couldn't update the brand with this id",
        });
      }
  
      res.status(200).json({
        status: "success",
        message: "Successfully updated the brand"
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        status: "fail",
        error: "Couldn't update the brand",
      });
    }
  };