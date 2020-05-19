import { AwsSesDomainMailFromArgsIntterface } from '../interfaces';


export class AwsSesDomainMailFromArgs implements AwsSesDomainMailFromArgsIntterface {
  	domain: string;
	mail_from_domain: string;
	behavior_on_mx_failure?: string;

}
