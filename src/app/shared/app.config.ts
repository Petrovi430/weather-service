import { InjectionToken } from '@angular/core';
import {Key} from './models/key.model';

export const API_KEY = new InjectionToken<Key>('API_KEY');
