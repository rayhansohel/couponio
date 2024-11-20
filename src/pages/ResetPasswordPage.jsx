
import { Helmet } from 'react-helmet-async';
import ResetPassword from '../components/ResetPassword';

const ResetPasswordPage = () => {
    return (
        <div>
        <Helmet>
          <title>Reset Password - Couponio</title>
        </Helmet>
        <div>
        <ResetPassword />
      </div>
      </div>
    );
};

export default ResetPasswordPage;