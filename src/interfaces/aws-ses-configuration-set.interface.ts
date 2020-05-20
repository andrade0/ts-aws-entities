import { AwsSesConfigurationSetArgsIntterface, AwsSesConfigurationSetAttrsIntterface } from '.';

export interface AwsSesConfigurationSetIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSesConfigurationSetArgsIntterface;
  attrs: AwsSesConfigurationSetAttrsIntterface;

}
