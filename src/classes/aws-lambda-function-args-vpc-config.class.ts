import { AwsLambdaFunctionArgsVpcConfigIntterface } from '../interfaces';


export class AwsLambdaFunctionArgsVpcConfig implements AwsLambdaFunctionArgsVpcConfigIntterface {
  	subnet_ids: string;
	security_group_ids: string;

}
