import { NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

export default alert = (type, msg) => {
  switch (type) {
    case 'info':
      return NotificationManager.info(msg, 'Info');
    case 'success':
      return NotificationManager.success(msg, 'Success');
    case 'warning':
        return NotificationManager.warning(msg, 'Warning');
    case 'error':
        return NotificationManager.error(msg, 'Error');
    default:
      return NotificationManager.info(msg, 'Info message');
  }
};