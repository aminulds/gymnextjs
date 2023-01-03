import React from 'react';

const Notification = ({ iconName, notificatinCount }) => {
    return (
        <button type="button" className="btn rounded-circle position-relative btnNotification">
            {iconName}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-circle h-50 w-50 notificationCount">{notificatinCount}</span>
        </button>
    );
};
export default Notification;
