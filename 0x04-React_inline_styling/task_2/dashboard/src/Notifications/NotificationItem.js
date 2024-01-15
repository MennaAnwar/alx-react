import React, { memo } from "react";
import { StyleSheet, css } from "aphrodite";
import propTypes from "prop-types";

const NotificationItem = ({ type, value, html, markAsRead, id }) => {
  if (type === "urgent") {
    return (
      <li
        onCLick={() => {
          markAsRead(id);
        }}
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        className={css(itemStyles.urgent)}
      >
        {value}
      </li>
    );
  }
  return (
    <li
      onCLick={() => {
        markAsRead(id);
      }}
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      className={css(itemStyles.default)}
    >
      {value}
    </li>
  );
};

const itemStyles = StyleSheet.create({
  urgent: {
    color: "red",
  },

  default: {
    color: "blue",
  },
});

NotificationItem.propTypes = {
  type: propTypes.string,
  value: propTypes.string,
  html: propTypes.shape({
    __html: propTypes.string,
  }),
  markAsRead: propTypes.func,
  id: propTypes.number,
};

NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {},
  id: 0,
};

export default memo(NotificationItem);
