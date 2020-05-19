import { AwsDefaultVpcArgsIntterface } from '../interfaces';


export class AwsDefaultVpcArgs implements AwsDefaultVpcArgsIntterface {
  	enable_dns_support?: string;
	enable_dns_hostnames?: string;
	enable_classiclink?: string;
	tags?: string;

}
