'use strict';
module.exports = (sequelize, DataTypes) => {
  var Blog = sequelize.define('Blog', {
    authorId: { type: DataTypes.INTEGER, required: false, defaultValue: 0},
    title: { type: DataTypes.STRING, required: true}, 
    article: { type: DataTypes.TEXT, required: true},
    featured: { type: DataTypes.BOOLEAN, required: true}, 
    published: { type: DataTypes.DATE, required: true}
  }, {
    classMethods: {
      associate: function(models) {
        models.Blog.belongsTo(models.Author, {as: 'authors', foreignKey: 'firstName', targetKey: 'id'});

      }
    }
  });
  return Blog;
};

// foreignKey: {name: 'uid', allowNull: false}})

// var Author = sequelize.define('Author', {
//   firstName: { type: DataTypes.STRING, required: true},
//   lastName: {type: DataTypes.STRING, required: true},
//   email: {type: DataTypes.STRING, required: true}

//is foreignKey correct?

