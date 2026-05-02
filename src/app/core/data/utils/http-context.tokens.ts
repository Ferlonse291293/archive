import { HttpContextToken } from '@angular/common/http';


export const NO_CACHE = new HttpContextToken<boolean>(() => false);
export const NO_AUTH = new HttpContextToken<boolean>(() => false);
