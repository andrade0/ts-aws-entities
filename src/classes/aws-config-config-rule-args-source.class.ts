import { AwsConfigConfigRuleArgsSourceIntterface } from '../interfaces';


export class AwsConfigConfigRuleArgsSource implements AwsConfigConfigRuleArgsSourceIntterface {
  	owner: string;
	source_identifier: string;
	event_source?: string;
	maximum_execution_frequency?: string;
	message_type?: string;
	source_detail?: string;

}
