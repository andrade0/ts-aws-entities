import { AwsTransferSshKeyIntterface } from '../interfaces';
import { AwsTransferSshKeyArgs, AwsTransferSshKeyAttrs } from '.';

export class AwsTransferSshKey implements AwsTransferSshKeyIntterface {
  name: string = 'aws_transfer_ssh_key';
  type: string = 'resource';
  url: string = 'https://www.terraform.io/docs/providers/aws/r/transfer_ssh_key.html';
  groupName: string = 'Transfer Resources';
  args: AwsTransferSshKeyArgs;
  attrs: AwsTransferSshKeyAttrs;

}
