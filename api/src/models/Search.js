const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('search', {
      id:{
        type:DataTypes.INTEGER,
        // type: DataTypes.UUID,
        // defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      category:{
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      author:{
        type:DataTypes.STRING,
      },
      title:{
        type:DataTypes.STRING,
      },
      description:{
        type:DataTypes.STRING,
      },
      url: {
        type:DataTypes.STRING
      },
      urlToImage:{
        type:DataTypes.STRING(500)
      },
      publishedAt:{
        type:DataTypes.STRING
      },
      // content:{
      //   type:DataTypes.STRING
      // }
    },{
      timestamps:false
    });
  };