import db from "../db.js";
import { DataTypes } from "sequelize";

const invoiceModel = db.define("vista_facturas", {
  nro_factura: {
    type: DataTypes.NUMBER,
    allowNull: false,
    primaryKey: true // Especifica que 'nro_factura' es la clave primaria
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  cliente: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cif_cliente: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  fecha_vencimiento: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fecha_cobro: {
    type: DataTypes.DATE,
    allowNull: false
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false
  },
  base_imponible: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  porc_iva: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  importe_iva: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  total_factura: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  nro_pedido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pedido: {
    type: DataTypes.STRING,
    allowNull: false
  },
  albaran: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
  // Desactiva la creación automática de 'createdAt' y 'updatedAt'
  timestamps: false 
});

export default invoiceModel;
