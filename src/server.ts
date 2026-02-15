import { BodyPartController, EquipmentController, ExerciseController, MuscleController } from './modules'
import { App } from './app'
import { serve } from '@hono/node-server'

const app = new App([
  new ExerciseController(),
  new MuscleController(),
  new EquipmentController(),
  new BodyPartController()
]).getApp()

// Railway پورت رو از محیط می‌گیره
const port = process.env.PORT || 3001;

console.log(`🚀 Starting server on port ${port}...`);

serve({
  fetch: app.fetch,
  port: Number(port)
}, () => {
  console.log(`✅ ExerciseDB API running on http://localhost:${port}`);
});