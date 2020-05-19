import { AwsWafSqlInjectionMatchSetIntterface } from '../interfaces';
import { AwsWafSqlInjectionMatchSetArgs,  AwsWafSqlInjectionMatchSetAttrs } from '.';

export class AwsWafSqlInjectionMatchSet implements AwsWafSqlInjectionMatchSetIntterface {
  	name: string = 'aws_waf_sql_injection_match_set';
	type: string = 'resource';
	url: string = 'https://www.terraform.io/docs/providers/aws/r/waf_sql_injection_match_set.html';
	groupName: string = 'WAF Resources';
	args: AwsWafSqlInjectionMatchSetArgs;
	attrs: AwsWafSqlInjectionMatchSetAttrs;

}
