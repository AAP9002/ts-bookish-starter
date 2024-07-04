import { DataTypes } from 'sequelize';
import sequelizeInstance from '../config/db';
import { Copy } from './copiesModel';
import { User } from './usersModel';

export const Borrow = sequelizeInstance.define('Borrow', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    copyId: {
        type: DataTypes.UUID,
        references: {
            model: Copy,
            key: 'id',
        },
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: 'id',
        },
    },
    due_at: DataTypes.INTEGER,
    Borrow_at: DataTypes.INTEGER
}, {
    timestamps: true,
    tableName: "borrows"
});