import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';
import { Book } from './booksModel';

export const Copy = sequelizeInstance.define('Copy', {
  id: {
    type:DataTypes.UUID,
    primaryKey:true
    },
  bookId: {
    type: DataTypes.UUID,
    references: {
      model: Book,
      key: 'id',
    },
  },
},{
    timestamps:true,
    tableName:"copies"
});