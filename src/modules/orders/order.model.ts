import { Table, Column, Model } from "sequelize-typescript";
import { sequelize } from "../../db/config";

@Table({
  tableName: "orders",
  timestamps: true,
})
export default class Order extends Model {
  @Column
  userId!: string;

  @Column
  productId!: string;

  @Column
  price!: number;
}

sequelize.addModels([Order]);

sequelize.sync({
  alter: true
})
