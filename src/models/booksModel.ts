import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';

export const Book = sequelizeInstance.define('Book', {
  id: {
    type:DataTypes.UUID,
    primaryKey:true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    },
  title: DataTypes.STRING,
  isbn: DataTypes.INTEGER,
},{
    timestamps:true,
    tableName:"books"
});
