import { AwsSsmResourceDataSyncIntterface } from '../interfaces';
import { AwsSsmResourceDataSyncArgs, AwsSsmResourceDataSyncAttrs } from '.';

export class AwsSsmResourceDataSync implements AwsSsmResourceDataSyncIntterface {
  name: string = 'aws_ssm_resource_data_sync';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/ssm_resource_data_sync.html';
  groupName: string = 'SSM Resources';
  args: AwsSsmResourceDataSyncArgs;
  attrs: AwsSsmResourceDataSyncAttrs;

}
