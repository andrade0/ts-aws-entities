import { AwsSsmParameterAttrsIntterface } from '../interfaces';


export class AwsSsmParameterAttrs implements AwsSsmParameterAttrsIntterface {
  arn?: string;
  name?: string;
  description?: string;
  type?: string;
  value?: string;

}
