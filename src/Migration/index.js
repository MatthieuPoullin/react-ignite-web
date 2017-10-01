// eslint-disable-next-line
import Immutable from 'seamless-immutable'

import { createMigration } from '../Services/MigrationServices'

const manifest = {
  1: (state) => (state)
}
const migration = createMigration(manifest, 'migration')

export default migration
