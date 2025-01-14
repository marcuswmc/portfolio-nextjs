export interface EmailTemplateProps {
  firstName: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

export const EmailTemplate = ({
  firstName,
  lastname,
  email,
  phone,
  message,
}: EmailTemplateProps) => (
  <div>
    <h3>Recebeu um novo contato de {firstName}!</h3>
    <p>
      Nome: {firstName} {lastname}
    </p>
    <p>Email: {email}</p>
    <p>phone: {phone}</p>
    <p>message: {message}</p>
  </div>
);
