
import {IOption} from '../../core/data/endpoints/options/options-api.interface';


export interface OptionsState {
  departments: IOption[]
}

export const initialOptionsState: OptionsState = {
  departments: [] as IOption[]
};
