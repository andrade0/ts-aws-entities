import { AwsSfnActivityArgsIntterface } from '../interfaces';


export class AwsSfnActivityArgs implements AwsSfnActivityArgsIntterface {
  name: string;
  tags?: string;

}
