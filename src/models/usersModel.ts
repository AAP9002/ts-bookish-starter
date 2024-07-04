import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';

export const User = sequelizeInstance.define('User', {
  id: {
        type:DataTypes.UUID,
        primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
},{
    timestamps:true,
    tableName:"users"
});