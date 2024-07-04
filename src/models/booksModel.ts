import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db';



export const Book = sequelize.define('User', {
  id: {
    type:DataTypes.UUIDV4,
    primaryKey:true
    },
  title: DataTypes.STRING,
  isbn: DataTypes.INTEGER,
  added_at:DataTypes.BIGINT
},{
    timestamps:false,
    tableName:"books"
});
