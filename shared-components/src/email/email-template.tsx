import * as React from "react";
import { FC } from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  mobile: string;
  message: string;
}

export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  mobile,
  message,
}) => (
  <div className="flex flex-col gap-4">
    <h3>Name: {name}</h3>
    {email && <h3>Email: {email}</h3>}
    {mobile && <h3>Mobile: {mobile}</h3>}
    <h3>Message: {message}</h3>
  </div>
);
