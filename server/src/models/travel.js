import { sequelize } from '../config/db.js';
import { DataTypes } from 'sequelize';
import { EnterpriseModel } from '../models/enterprise.js';

export const TravelModel = sequelize.define('Travel', {
  id_enterprise:{
    type: DataTypes.INTEGER,
    allowNull: false
  },
  origen_lat: {
    type: DataTypes.DECIMAL (12,10),
    allowNull: false
  },
  origen_lng: {
    type: DataTypes.DECIMAL (12,10),
    allowNull: false
  },
  destino_lat: {
    type: DataTypes.DECIMAL (12,10),
    allowNull: false
  },
  destino_lng: {
    type: DataTypes.DECIMAL (12,10),
    allowNull: false
  },
  estado: {
    type: DataTypes.INTEGER,
    defaultValue: 1 // Valor por defecto para el estado (activo)
  },
},
  {
    // Other model options go here
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'Travel'
});

// En el modelo de Travel
TravelModel.belongsTo(EnterpriseModel, { foreignKey: 'id_enterprise', as: 'enterprise' });
EnterpriseModel.hasOne(TravelModel, { foreignKey: 'id_enterprise', as: 'travel' });