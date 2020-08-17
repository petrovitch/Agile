import Repo from './js/data/meetings.js';
import Model from './js/models/meeting.js';
import Controller from './js/controllers/meeting.js';

const repo = new Repo();
const model = new Model(repo);
const controller = new Controller(model);
