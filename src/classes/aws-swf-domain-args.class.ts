import { AwsSwfDomainArgsIntterface } from '../interfaces';


export class AwsSwfDomainArgs implements AwsSwfDomainArgsIntterface {
  	name: string;
	name_prefix: string;
	description: string;
	workflow_execution_retention_period_in_days: string;

}
