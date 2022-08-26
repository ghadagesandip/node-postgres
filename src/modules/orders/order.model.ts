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

  @Column
  product_price!: number;

  @Column
  quantity!: number;

  @Column
  total_price!: number;

}

sequelize.addModels([Order]);

sequelize.sync({
  alter: true
})
