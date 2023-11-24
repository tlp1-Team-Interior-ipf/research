import { sequelize } from '../config/db.js';
import { EnterpriseModel } from '../models/enterprise.js';
import { DataTypes } from 'sequelize';

export const TravelModel = sequelize.define('Travel', {
    id_enterprise: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    origen_lat: {
        type: DataTypes.DECIMAL(12, 10),
        allowNull: false
    },
    origen_lng: {
        type: DataTypes.DECIMAL(12, 10),
        allowNull: false
    },
    destino_lat: {
        type: DataTypes.DECIMAL(12, 10),
        allowNull: false
    },
    destino_lng: {
        type: DataTypes.DECIMAL(12, 10),
        allowNull: false
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'Travel'
});

// Establecer la relación entre Travel y Enterprise
TravelModel.belongsTo(EnterpriseModel, {
    foreignKey: 'id_enterprise'
  });

EnterpriseModel.hasMany(TravelModel, {
    foreignKey: 'id_enterprise'
});
