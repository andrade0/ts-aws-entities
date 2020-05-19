import { AwsEksClusterArgsVpcConfigIntterface } from '../interfaces';


export class AwsEksClusterArgsVpcConfig implements AwsEksClusterArgsVpcConfigIntterface {
  	security_group_ids?: string;
	subnet_ids: string;

}
