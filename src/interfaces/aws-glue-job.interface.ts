import { AwsGlueJobArgsIntterface, AwsGlueJobAttrsIntterface } from '.';

export interface AwsGlueJobIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsGlueJobArgsIntterface;
  attrs: AwsGlueJobAttrsIntterface;

}
