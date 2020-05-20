import { AwsGlueSecurityConfigurationArgsIntterface, AwsGlueSecurityConfigurationAttrsIntterface } from '.';

export interface AwsGlueSecurityConfigurationIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsGlueSecurityConfigurationArgsIntterface;
  attrs: AwsGlueSecurityConfigurationAttrsIntterface;

}
