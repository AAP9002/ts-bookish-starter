import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';

export const Author = sequelizeInstance.define('Author', {
    id: {
        type: DataTypes.UUID,
        primaryKey:true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
    },
    name: DataTypes.STRING
}, {
    timestamps: true,
    tableName: "authors"
});