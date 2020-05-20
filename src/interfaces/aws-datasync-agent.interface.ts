import { AwsDatasyncAgentArgsIntterface, AwsDatasyncAgentAttrsIntterface } from '.';

export interface AwsDatasyncAgentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDatasyncAgentArgsIntterface;
  attrs: AwsDatasyncAgentAttrsIntterface;

}
