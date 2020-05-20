import { AwsTransferServerIntterface } from '../interfaces';
import { AwsTransferServerArgs, AwsTransferServerAttrs } from '.';

export class AwsTransferServer implements AwsTransferServerIntterface {
  name: string = 'aws_transfer_server';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/transfer_server.html';
  groupName: string = 'Transfer Resources';
  args: AwsTransferServerArgs;
  attrs: AwsTransferServerAttrs;

}
