import { AwsLaunchTemplateAttrsIntterface } from '../interfaces';


export class AwsLaunchTemplateAttrs implements AwsLaunchTemplateAttrsIntterface {
  	arn?: string;
	id?: string;
	default_version?: string;
	latest_version?: string;

}
