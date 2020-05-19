import { AwsWafregionalSqlInjectionMatchSetIntterface } from '../interfaces';
import { AwsWafregionalSqlInjectionMatchSetArgs,  AwsWafregionalSqlInjectionMatchSetAttrs } from '.';

export class AwsWafregionalSqlInjectionMatchSet implements AwsWafregionalSqlInjectionMatchSetIntterface {
  	name: string = 'aws_wafregional_sql_injection_match_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/wafregional_sql_injection_match_set.html';
	groupName: string = 'WAF Regional Resources';
	args: AwsWafregionalSqlInjectionMatchSetArgs;
	attrs: AwsWafregionalSqlInjectionMatchSetAttrs;

}
