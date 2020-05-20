import { AwsSsmDocumentArgsIntterface, AwsSsmDocumentAttrsIntterface } from '.';

export interface AwsSsmDocumentIntterface {
  name: string;
  type: string;
  url: string;
  groupName: string;
  args: AwsSsmDocumentArgsIntterface;
  attrs: AwsSsmDocumentAttrsIntterface;

}
