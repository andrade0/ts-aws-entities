import { AwsLambdaPermissionArgsIntterface } from '../interfaces';


export class AwsLambdaPermissionArgs implements AwsLambdaPermissionArgsIntterface {
  action: string;
  event_source_token?: string;
  function_name: string;
  principal: string;
  qualifier?: string;
  source_account?: string;
  source_arn?: string;
  statement_id?: string;
  statement_id_prefix?: string;

}
