import { AwsApiGatewayVpcLinkArgsIntterface } from '../interfaces';


export class AwsApiGatewayVpcLinkArgs implements AwsApiGatewayVpcLinkArgsIntterface {
  name: string;
  description?: string;
  target_arns: string;

}
