import { AwsSesTemplateIntterface } from '../interfaces';
import { AwsSesTemplateArgs, AwsSesTemplateAttrs } from '.';

export class AwsSesTemplate implements AwsSesTemplateIntterface {
  name: string = 'aws_ses_template';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_template.html';
  groupName: string = 'SES Resources';
  args: AwsSesTemplateArgs;
  attrs: AwsSesTemplateAttrs;

}
