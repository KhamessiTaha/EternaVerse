import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Universe } from './universe.entity';

@Entity()
export class CelestialObject {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Universe, (universe) => universe.celestialObjects)
  universe: Universe;

  @Column({ type: 'jsonb' })
  position: { x: number; y: number; z: number }; // Coordinates in the universe

  @Column()
  type: string; // e.g., galaxy, star system

  @Column({ type: 'jsonb' })
  properties: object; // Specific properties like mass, temperature, etc.
}
