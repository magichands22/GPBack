const { Products, Category } = require("../db"); //database
async function searchresults (word) {
    console.log('Search results!!!')
    // console.log(products) 
  
    const dataproducts = await Products.findAll()
    console.log(dataproducts)
}
    
module.exports = {searchresults}
    // const datacountrybrut = await Country.findAll({
    //                 where: {
    //                     name:  { [Sequelize.Op.like]: `${lowercasequery}%`},
    //                 }
    //             })
    
    