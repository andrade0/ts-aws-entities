import { AwsCloudhsmV2HsmIntterface } from '../interfaces';
import { AwsCloudhsmV2HsmArgs,  AwsCloudhsmV2HsmAttrs } from '.';

export class AwsCloudhsmV2Hsm implements AwsCloudhsmV2HsmIntterface {
  	name: string = 'aws_cloudhsm_v2_hsm';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/cloudhsm_v2_hsm.html';
	groupName: string = 'CloudHSM v2 Resources';
	args: AwsCloudhsmV2HsmArgs;
	attrs: AwsCloudhsmV2HsmAttrs;

}
