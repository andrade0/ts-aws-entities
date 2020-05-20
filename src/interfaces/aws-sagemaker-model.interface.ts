import { AwsSagemakerModelArgsIntterface, AwsSagemakerModelAttrsIntterface } from '.';

export interface AwsSagemakerModelIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSagemakerModelArgsIntterface;
  attrs: AwsSagemakerModelAttrsIntterface;

}
