import { AwsLambdaEventSourceMappingAttrsIntterface } from '../interfaces';


export class AwsLambdaEventSourceMappingAttrs implements AwsLambdaEventSourceMappingAttrsIntterface {
  	function_arn?: string;
	last_modified?: string;
	last_processing_result?: string;
	state?: string;
	state_transition_reason?: string;
	uuid?: string;

}
