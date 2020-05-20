import { AwsSsmDocumentArgsIntterface } from '../interfaces';


export class AwsSsmDocumentArgs implements AwsSsmDocumentArgsIntterface {
  name: string;
  content: string;
  document_format: string;
  document_type: string;
  permissions?: string;
  tags?: string;

}
