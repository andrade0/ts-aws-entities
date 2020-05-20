import { AwsEcsContainerDefinitionArgsIntterface, AwsEcsContainerDefinitionAttrsIntterface } from '.';

export interface AwsEcsContainerDefinitionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsEcsContainerDefinitionArgsIntterface;
  attrs: AwsEcsContainerDefinitionAttrsIntterface;

}
