import { AwsLbTargetGroupAttachmentArgsIntterface } from '../interfaces';


export class AwsLbTargetGroupAttachmentArgs implements AwsLbTargetGroupAttachmentArgsIntterface {
  target_group_arn: string;
  target_id: string;
  port?: string;
  availability_zone?: string;

}
