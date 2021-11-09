import { combineReducers } from 'redux';

import timetable from './timeTable';

import notice from './Notices'

export const reducers=combineReducers({timetable,notice})