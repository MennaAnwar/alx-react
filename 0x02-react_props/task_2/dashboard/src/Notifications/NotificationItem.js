import React from "react";
import "./Notifications.css";

function NotificationItem({ type, content, value }) {
  return (
    <>
      {type && value ? <li type={type}>{value}</li> : null}
      {content ? (
        <li data-urgent dangerouslySetInnerHTML={{ __html: content }}></li>
      ) : null}
    </>
  );
}

export default NotificationItem;
