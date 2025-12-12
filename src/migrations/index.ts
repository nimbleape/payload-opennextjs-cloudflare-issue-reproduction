import * as migration_20250929_111647 from './20250929_111647';
import * as migration_20251117_173648 from './20251117_173648';
import * as migration_20251212_111017 from './20251212_111017';

export const migrations = [
  {
    up: migration_20250929_111647.up,
    down: migration_20250929_111647.down,
    name: '20250929_111647',
  },
  {
    up: migration_20251117_173648.up,
    down: migration_20251117_173648.down,
    name: '20251117_173648',
  },
  {
    up: migration_20251212_111017.up,
    down: migration_20251212_111017.down,
    name: '20251212_111017'
  },
];
