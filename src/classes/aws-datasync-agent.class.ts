import { AwsDatasyncAgentIntterface } from '../interfaces';
import { AwsDatasyncAgentArgs, AwsDatasyncAgentAttrs } from '.';

export class AwsDatasyncAgent implements AwsDatasyncAgentIntterface {
  name: string = 'aws_datasync_agent';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/datasync_agent.html';
  groupName: string = 'DataSync Resources';
  args: AwsDatasyncAgentArgs;
  attrs: AwsDatasyncAgentAttrs;

}
