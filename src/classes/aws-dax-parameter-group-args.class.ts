import { AwsDaxParameterGroupArgsIntterface } from '../interfaces';
import { AwsDaxParameterGroupArgsParameters } from '.';

export class AwsDaxParameterGroupArgs implements AwsDaxParameterGroupArgsIntterface {
  name: string;
  description: string;
  parameters?: AwsDaxParameterGroupArgsParameters;

}
