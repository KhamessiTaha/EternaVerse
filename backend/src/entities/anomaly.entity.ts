import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Universe } from './universe.entity';

@Entity()
export class Anomaly {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Universe, (universe) => universe.anomalies)
  universe: Universe;

  @Column()
  type: string; // e.g., dark energy surge, black hole merger

  @Column({ type: 'float' })
  severity: number;

  @Column({ type: 'jsonb', nullable: true })
  location: { x: number; y: number; z: number }; // Location of the anomaly

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
