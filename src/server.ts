import { BodyPartController, EquipmentController, ExerciseController, MuscleController } from './modules'
import { App } from './app'
import { serve } from '@hono/node-server'  // اضافه کردن این خط

const app = new App([
  new ExerciseController(),
  new MuscleController(),
  new EquipmentController(),
  new BodyPartController()
]).getApp()

const port = 3001;
console.log(`🚀 Starting server on port ${port}...`);

// برای Node.js با Hono
serve({
  fetch: app.fetch,
  port
}, () => {
  console.log(`✅ ExerciseDB API running on http://localhost:${port}`);
});