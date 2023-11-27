import { sequelize } from '../config/db.js';
<<<<<<< HEAD
import { EnterpriseModel } from '../models/enterprise.js';
import { DataTypes } from 'sequelize';
=======
import { Sequelize } from 'sequelize';
import { EnterpriseModel } from '../models/enterprise.js';
>>>>>>> origin/mauri

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

<<<<<<< HEAD
// Establecer la relación entre Travel y Enterprise
TravelModel.belongsTo(EnterpriseModel, {
    foreignKey: 'id_enterprise'
  });

EnterpriseModel.hasMany(TravelModel, {
    foreignKey: 'id_enterprise'
});
=======
// En el modelo de Travel
TravelModel.belongsTo(EnterpriseModel, { foreignKey: 'id_enterprise', as: 'enterprise' });
EnterpriseModel.hasOne(TravelModel, { foreignKey: 'id_enterprise', as: 'travel' });
>>>>>>> origin/mauri
