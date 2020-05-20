import { AwsElbAttachmentArgsIntterface } from '../interfaces';


export class AwsElbAttachmentArgs implements AwsElbAttachmentArgsIntterface {
  elb: string;
  instance: string;

}
