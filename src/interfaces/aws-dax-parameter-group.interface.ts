import { AwsDaxParameterGroupArgsIntterface, AwsDaxParameterGroupAttrsIntterface } from '.';

export interface AwsDaxParameterGroupIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDaxParameterGroupArgsIntterface;
  attrs: AwsDaxParameterGroupAttrsIntterface;

}
