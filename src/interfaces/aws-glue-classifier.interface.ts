import { AwsGlueClassifierArgsIntterface, AwsGlueClassifierAttrsIntterface } from '.';

export interface AwsGlueClassifierIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsGlueClassifierArgsIntterface;
  attrs: AwsGlueClassifierAttrsIntterface;

}
