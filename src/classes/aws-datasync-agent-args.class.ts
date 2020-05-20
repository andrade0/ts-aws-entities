import { AwsDatasyncAgentArgsIntterface } from '../interfaces';
import { AwsDatasyncAgentArgsId } from '.';

export class AwsDatasyncAgentArgs implements AwsDatasyncAgentArgsIntterface {
  name: string;
  activation_key?: string;
  ip_address?: string;
  tags?: string;
  id: AwsDatasyncAgentArgsId;
  arn: string;

}
