import { combineReducers } from 'redux';

import timetable from './timeTable';

import notice from './Notices'

import requests from './requests';

import notifications from './notifications';

import Delieveries from './Delieveries';



export const reducers=combineReducers({Delieveries,requests,timetable,notice,notifications})