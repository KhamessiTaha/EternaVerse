import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { CelestialObject } from './celestial-object.entity';
import { Anomaly } from './anomaly.entity';

@Entity()
export class Universe {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => User, (user) => user.universes)
  user: User;

  @Column({ type: 'jsonb' })
  constants: {
    gravitationalConstant: number;
    speedOfLight: number;
    darkEnergyRatio: number;
    matterAntimatterRatio: number;
  };

  @Column({ type: 'bigint', default: 0 })
  currentAge: number; // Age of the universe in simulation time steps

  @Column({ type: 'jsonb', nullable: true })
  state: object; // Current state of the universe (e.g., galaxies, anomalies)

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => CelestialObject, (object) => object.universe)
  celestialObjects: CelestialObject[];

  @OneToMany(() => Anomaly, (anomaly) => anomaly.universe)
  anomalies: Anomaly[];
}
