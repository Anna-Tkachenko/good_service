import {
  AllowNull,
  AutoIncrement, BelongsTo,
  Column,
  DataType, ForeignKey,
  Model,
  PrimaryKey,
  Table
} from 'sequelize-typescript';
import { Color } from './Color';

@Table({
  tableName: 'goods',
})

export class Good extends Model {
  @PrimaryKey
  @AutoIncrement
  @AllowNull(false)
  @Column({
    type: DataType.INTEGER,
  })
  id: number;

  @AllowNull(false)
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @AllowNull(false)
  @ForeignKey(() => Color)
  @Column({
    type: DataType.INTEGER,
    field: 'color_id',
  })
  colorId: number;

  @BelongsTo(() => Color)
  color: Color | null;
}
