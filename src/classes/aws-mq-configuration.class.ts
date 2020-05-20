import { AwsMqConfigurationIntterface } from '../interfaces';
import { AwsMqConfigurationArgs, AwsMqConfigurationAttrs } from '.';

export class AwsMqConfiguration implements AwsMqConfigurationIntterface {
  name: string = 'aws_mq_configuration';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/mq_configuration.html';
  groupName: string = 'MQ Resources';
  args: AwsMqConfigurationArgs;
  attrs: AwsMqConfigurationAttrs;

}
