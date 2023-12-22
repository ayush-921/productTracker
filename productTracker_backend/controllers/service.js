const productsAll = async (req, res) => {
    res.status(200).json({msg : "List of All products"})
}

module.exports = {productsAll}