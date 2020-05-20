import { AwsApiGatewayApiKeyArgsIntterface } from '../interfaces';
import { AwsApiGatewayApiKeyArgsStageKey } from '.';

export class AwsApiGatewayApiKeyArgs implements AwsApiGatewayApiKeyArgsIntterface {
  name: string;
  description?: string;
  enabled?: string;
  value?: string;
  stage_key?: AwsApiGatewayApiKeyArgsStageKey;
  id: string;
  created_date: string;
  last_updated_date: string;

}
