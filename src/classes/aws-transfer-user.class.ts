import { AwsTransferUserIntterface } from '../interfaces';
import { AwsTransferUserArgs,  AwsTransferUserAttrs } from '.';

export class AwsTransferUser implements AwsTransferUserIntterface {
  	name: string = 'aws_transfer_user';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/transfer_user.html';
	groupName: string = 'Transfer Resources';
	args: AwsTransferUserArgs;
	attrs: AwsTransferUserAttrs;

}
