import { AwsLambdaInvocationArgsIntterface } from '../interfaces';


export class AwsLambdaInvocationArgs implements AwsLambdaInvocationArgsIntterface {
  	function_name: string;
	input: string;
	qualifier?: string;

}
