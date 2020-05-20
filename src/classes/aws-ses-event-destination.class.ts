import { AwsSesEventDestinationIntterface } from '../interfaces';
import { AwsSesEventDestinationArgs, AwsSesEventDestinationAttrs } from '.';

export class AwsSesEventDestination implements AwsSesEventDestinationIntterface {
  name: string = 'aws_ses_event_destination';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ses_event_destination.html';
  groupName: string = 'SES Resources';
  args: AwsSesEventDestinationArgs;
  attrs: AwsSesEventDestinationAttrs;

}
