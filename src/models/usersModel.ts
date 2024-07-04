import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';

export const User = sequelizeInstance.define('User', {
  id: {
        type:DataTypes.UUID,
        primaryKey:true
    },
  username: DataTypes.STRING,
  password: DataTypes.STRING,
},{
    timestamps:true,
    tableName:"users"
});