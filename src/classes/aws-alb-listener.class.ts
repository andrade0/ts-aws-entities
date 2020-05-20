import { AwsAlbListenerIntterface } from '../interfaces';
import { AwsAlbListenerArgs, AwsAlbListenerAttrs } from '.';

export class AwsAlbListener implements AwsAlbListenerIntterface {
  name: string = 'aws_alb_listener';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/lb_listener.html';
  groupName: string = 'EC2 Resources';
  args: AwsAlbListenerArgs;
  attrs: AwsAlbListenerAttrs;

}
