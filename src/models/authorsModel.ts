import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';

export const Author = sequelizeInstance.define('Author', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    name: DataTypes.STRING
}, {
    timestamps: true,
    tableName: "authors"
});