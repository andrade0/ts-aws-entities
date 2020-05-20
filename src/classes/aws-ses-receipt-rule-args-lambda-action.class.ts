import { AwsSesReceiptRuleArgsLambdaActionIntterface } from '../interfaces';


export class AwsSesReceiptRuleArgsLambdaAction implements AwsSesReceiptRuleArgsLambdaActionIntterface {
  function_arn: string;
  invocation_type?: string;
  topic_arn?: string;
  position: string;

}
