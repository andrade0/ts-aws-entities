import { AwsMqConfigurationArgsIntterface, AwsMqConfigurationAttrsIntterface } from '.';

export interface AwsMqConfigurationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsMqConfigurationArgsIntterface;
  attrs: AwsMqConfigurationAttrsIntterface;

}
