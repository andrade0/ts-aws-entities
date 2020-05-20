import { AwsWafSqlInjectionMatchSetArgsIntterface } from '../interfaces';
import { AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuples } from '.';

export class AwsWafSqlInjectionMatchSetArgs implements AwsWafSqlInjectionMatchSetArgsIntterface {
  name: string;
  sql_injection_match_tuples?: AwsWafSqlInjectionMatchSetArgsSqlInjectionMatchTuples;
  data?: string;
  type: string;

}
