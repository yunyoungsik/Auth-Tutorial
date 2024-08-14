import { mailtrapClient, sender } from './mailtrap.config.js';
import {
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from './emailTemplates.js';

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: 'Verify your email',
      html: VERIFICATION_EMAIL_TEMPLATE.replace('{verificationCode}', verificationToken),
      category: 'Email Verification',
    });

    console.log('Email sent successfully', response);
  } catch (error) {
    console.error(`Error sending verification`, error);

    throw new Error(`Error sending verification email: ${error}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: '35c4bd5f-1b2d-4d79-9f2b-91e38b4c6c91',
      template_variables: {
        company_info_name: 'Test_Company_info_name',
        name: 'Test_Name',
        company_info_address: 'Test_Company_info_address',
        company_info_city: 'Test_Company_info_city',
        company_info_zip_code: 'Test_Company_info_zip_code',
        company_info_country: 'Test_Company_info_country',
      },
    });

    console.log('Welcome email sent successfully', response);
  } catch (error) {
    console.error(`Error sending welcome email`, error);

    throw new Error(`Error sending welcome email: ${error}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: 'Reset your password',
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace('{resetURL}', resetURL),
      category: 'Password Reset',
    });

    console.log('Password Reset email sent successfully', response);
  } catch (error) {
    console.error(`Error sending password reset email`, error);

    throw new Error(`Error sending password reset email: ${error}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: 'Password Reset Successful',
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: 'Password Reset',
    });

    console.log('Password reset email sent successfully', response);
  } catch (error) {
    console.error(`Error sending password reset success email`, error);
    throw new Error(`Error sending password reset success email: ${error}`);
  }
};
