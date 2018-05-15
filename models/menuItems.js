module.exports = (sequelize, DataTypes) => {
    var MenuItems= sequelize.define('menu_items', {
          tem_name_english:{
        type:DataTypes.STRING,
      },
      item_name_vietnamese:{
       type:DataTypes.STRING
      },
     
      item_description:{
        type:DataTypes.STRING
       },
       item_price:{
        type:DataTypes.DECIMAL
       },
       rating:{
        type:DataTypes.INTEGER
       },

       isActive:{
        type:DataTypes.BOOLEAN ,
        defaultValue:false
       },
       created_by:{
        type:DataTypes.STRING
       },
       updated_by:{
        type:DataTypes.STRING
       },
    }, {});
    MenuItems.associate = function(models) {
      //TODO  
      
      MenuItems.hasMany(models.restaurant);
    };
    return MenuItems;
  };