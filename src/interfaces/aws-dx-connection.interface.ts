import { AwsDxConnectionArgsIntterface, AwsDxConnectionAttrsIntterface } from '.';

export interface AwsDxConnectionIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsDxConnectionArgsIntterface;
  attrs: AwsDxConnectionAttrsIntterface;

}
