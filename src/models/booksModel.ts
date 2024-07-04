import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';

export const Book = sequelizeInstance.define('Book', {
  id: {
    type:DataTypes.UUID,
    primaryKey:true
    },
  title: DataTypes.STRING,
  isbn: DataTypes.INTEGER,
},{
    timestamps:true,
    tableName:"books"
});
