'use strict';
module.exports = (sequelize, DataTypes) => {
  var Author = sequelize.define('Author', {
    firstName: { type: DataTypes.STRING, required: true},
    lastName: {type: DataTypes.STRING, required: true},
    email: {type: DataTypes.STRING, required: true}
  }, {
    classMethods: {
      associate: function(models) {
        Author.hasMany(models.Blog, {
          as: 'blogs',
          foreignKey: 'authorId',
          sourceKey: 'id'
        })


      }
    }
  });
  return Author;
};

