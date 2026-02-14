import { BodyPartController, EquipmentController, MuscleController, ExerciseController } from './modules/index.js';
import { App } from './app.js';
const app = new App([
    new ExerciseController(),
    new MuscleController(),
    new EquipmentController(),
    new BodyPartController()
]).getApp();
export default app;
