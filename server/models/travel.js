import { sequelize } from "../config/db.js";
import { Sequelize } from "sequelize";


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
      createdAt: true,
      updatedAt: true,
      deletedAt: true,
      tableName: 'Travel'
  });