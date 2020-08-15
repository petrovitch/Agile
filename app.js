import { Type } from './js/data/meetings.js';
import Model from './js/models/meeting.js';
import Controller from './js/controllers/meeting.js';

const model = new Model();
const controller = new Controller(model);

controller.init(Type.GoNoGo);
