import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';
import { Book } from './booksModel';

export const Copy = sequelizeInstance.define('Copy', {
  id: {
    type:DataTypes.UUID,
    primaryKey:true,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
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