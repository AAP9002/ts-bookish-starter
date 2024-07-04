import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';
import { Book } from './booksModel';
import { Author } from './authorsModel';

export const AuthorOfBook = sequelizeInstance.define('AuthorOfBook', {
    authorId: {
      type:DataTypes.UUID,
      primaryKey:true,
      references: {
        model: Author,
        key: 'id',
      }
      },
    bookId: {
      type: DataTypes.UUID,
      primaryKey:true,
      references: {
        model: Book,
        key: 'id',
      },
    },
  },{
      timestamps:true,
      tableName:"authorsofbooks"
  });