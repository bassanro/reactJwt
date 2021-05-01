import { notification } from "antd";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { authenticationService } from "../../services/auth.service";

export function Logout() {

  const history = useHistory();
    useEffect(() => {
      authenticationService.logout();
        notification.open({
          message: 'Logout successfull',
          description:
            'You have successfully logged out!',
          onClick: () => {
            console.log('Notification Clicked!');
          },
        });
        async function sleep() {
          await new Promise(resolve => setTimeout(resolve, 2000));
          history.push('/login');
          window.location.reload();
        }
        sleep();

      } , [history]);
    
      return (
        <div>
          
        </div>
      );
}