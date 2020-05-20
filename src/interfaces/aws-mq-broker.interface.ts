import { AwsMqBrokerArgsIntterface, AwsMqBrokerAttrsIntterface } from '.';

export interface AwsMqBrokerIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsMqBrokerArgsIntterface;
  attrs: AwsMqBrokerAttrsIntterface;

}
