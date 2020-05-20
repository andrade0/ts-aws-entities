import { AwsDirectoryServiceConditionalForwarderIntterface } from '../interfaces';
import { AwsDirectoryServiceConditionalForwarderArgs, AwsDirectoryServiceConditionalForwarderAttrs } from '.';

export class AwsDirectoryServiceConditionalForwarder implements AwsDirectoryServiceConditionalForwarderIntterface {
  name: string = 'aws_directory_service_conditional_forwarder';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/directory_service_conditional_forwarder.html';
  groupName: string = 'Directory Service Resources';
  args: AwsDirectoryServiceConditionalForwarderArgs;
  attrs: AwsDirectoryServiceConditionalForwarderAttrs;

}
