import { sequelize } from '../config/db.js';
import { Sequelize } from 'sequelize';
import { EnterpriseModel } from '../models/enterprise.js';

export const TravelModel = sequelize.define('Travel', {
  id_enterprise:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  origen_lat: {
    type: Sequelize.DECIMAL (12,10),
    allowNull: false
  },
  origen_lng: {
    type: Sequelize.DECIMAL (12,10),
    allowNull: false
  },
  destino_lat: {
    type: Sequelize.DECIMAL (12,10),
    allowNull: false
  },
  destino_lng: {
    type: Sequelize.DECIMAL (12,10),
    allowNull: false
  }},
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