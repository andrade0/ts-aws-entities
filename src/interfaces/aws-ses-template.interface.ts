import { AwsSesTemplateArgsIntterface, AwsSesTemplateAttrsIntterface } from '.';

export interface AwsSesTemplateIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSesTemplateArgsIntterface;
  attrs: AwsSesTemplateAttrsIntterface;

}
