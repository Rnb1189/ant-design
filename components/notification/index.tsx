import * as React from 'react';
import Notification from 'rc-notification';
import Icon from '../icon';
import Direction from './../_util/direction';
import classNames from 'classnames';

export type NotificationPlacement = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type IconType = 'success' | 'info' | 'error' | 'warning';

const notificationInstance: { [key: string]: any } = {};
let defaultDuration = 4.5;
let defaultTop = 24;
let defaultBottom = 24;
let defaultPlacement: NotificationPlacement = 'topRight';
let defaultGetContainer: () => HTMLElement;

export interface ConfigProps {
  top?: number;
  bottom?: number;
  duration?: number;
  placement?: NotificationPlacement;
  getContainer?: () => HTMLElement;
}

function setNotificationConfig(options: ConfigProps) {
  const { duration, placement, bottom, top, getContainer } = options;
  if (duration !== undefined) {
    defaultDuration = duration;
  }
  if (placement !== undefined) {
    defaultPlacement = placement;
  }
  if (bottom !== undefined) {
    defaultBottom = bottom;
  }
  if (top !== undefined) {
    defaultTop = top;
  }
  if (getContainer !== undefined) {
    defaultGetContainer = getContainer;
  }
}

function getPlacementStyle(
  placement: NotificationPlacement,
  top: number = defaultTop,
  bottom: number = defaultBottom,
) {
  let style;
  switch (placement) {
    case 'topLeft':
      style = {
        left: 0,
        top,
        bottom: 'auto',
      };
      break;
    case 'topRight':
      style = {
        right: 0,
        top,
        bottom: 'auto',
      };
      break;
    case 'bottomLeft':
      style = {
        left: 0,
        top: 'auto',
        bottom,
      };
      break;
    default:
      style = {
        right: 0,
        top: 'auto',
        bottom,
      };
      break;
  }
  return style;
}

type NotificationInstanceProps = {
  isRtl?: boolean;
  prefixCls: string;
  placement?: NotificationPlacement;
  getContainer?: () => HTMLElement;
  top?: number;
  bottom?: number;
};

function getNotificationInstance(
  {
    isRtl,
    prefixCls,
    //NEw
    // placement = defaultPlacement,
    placement,
    getContainer = defaultGetContainer,
    top,
    bottom,
  }: NotificationInstanceProps,
  callback: (n: any) => void,
) {
  //NEw
  if (!placement) {
    placement = isRtl === true ? 'topLeft' : 'topRight';
  }
  placement = !placement ? defaultPlacement : placement;

  const cacheKey = `${prefixCls}-${placement}`;
  if (notificationInstance[cacheKey]) {
    callback(notificationInstance[cacheKey]);
    return;
  }
  (Notification as any).newInstance(
    {
      prefixCls,
      className: `${prefixCls}-${placement}`,
      style: getPlacementStyle(placement, top, bottom),
      getContainer,
      closeIcon: <Icon className={`${prefixCls}-close-icon`} type="close" />,
    },
    (notification: any) => {
      notificationInstance[cacheKey] = notification;
      callback(notification);
    },
  );
}

const typeToIcon = {
  success: 'check-circle-o',
  info: 'info-circle-o',
  error: 'close-circle-o',
  warning: 'exclamation-circle-o',
};

export interface ArgsProps {
  isRtl?: boolean;
  message: React.ReactNode;
  description?: React.ReactNode;
  btn?: React.ReactNode;
  key?: string;
  onClose?: () => void;
  duration?: number | null;
  icon?: React.ReactNode;
  placement?: NotificationPlacement;
  style?: React.CSSProperties;
  prefixCls?: string;
  className?: string;
  readonly type?: IconType;
  onClick?: () => void;
  top?: number;
  bottom?: number;
  getContainer?: () => HTMLElement;
}

function notice(args: ArgsProps) {
  const outerPrefixCls = args.prefixCls || 'ant-notification';
  const prefixCls = `${outerPrefixCls}-notice`;
  const duration = args.duration === undefined ? defaultDuration : args.duration;

  let iconNode: React.ReactNode = null;
  if (args.icon) {
    iconNode = <span className={`${prefixCls}-icon`}>{args.icon}</span>;
  } else if (args.type) {
    const iconType = typeToIcon[args.type];
    iconNode = (
      <Icon className={`${prefixCls}-icon ${prefixCls}-icon-${args.type}`} type={iconType} />
    );
  }

  //NEw
  const isRtl = !!args.isRtl;
  const dirClass = Direction.classFromIsRtl(args.isRtl);
  const mergedClass = classNames(args.className, dirClass);
  ///

  const autoMarginTag =
    !args.description && iconNode ? (
      <span className={`${prefixCls}-message-single-line-auto-margin`} />
    ) : null;

  const { placement, top, bottom, getContainer } = args;

  getNotificationInstance(
    {
      isRtl,
      prefixCls: outerPrefixCls,
      placement,
      top,
      bottom,
      getContainer,
    },
    (notification: any) => {
      notification.notice({
        content: (
          <div className={iconNode ? `${prefixCls}-with-icon` : ''}>
            {iconNode}
            <div className={`${prefixCls}-message`}>
              {autoMarginTag}
              {args.message}
            </div>
            <div className={`${prefixCls}-description`}>{args.description}</div>
            {args.btn ? <span className={`${prefixCls}-btn`}>{args.btn}</span> : null}
          </div>
        ),
        duration,
        closable: true,
        onClose: args.onClose,
        onClick: args.onClick,
        key: args.key,
        style: args.style || {},
        // className: args.className,
        className: mergedClass,
      });
    },
  );
}

const api: any = {
  open: notice,
  close(key: string) {
    Object.keys(notificationInstance).forEach(cacheKey =>
      notificationInstance[cacheKey].removeNotice(key),
    );
  },
  config: setNotificationConfig,
  destroy() {
    Object.keys(notificationInstance).forEach(cacheKey => {
      notificationInstance[cacheKey].destroy();
      delete notificationInstance[cacheKey];
    });
  },
};

['success', 'info', 'warning', 'error'].forEach(type => {
  api[type] = (args: ArgsProps) =>
    api.open({
      ...args,
      type,
    });
});

api.warn = api.warning;

export interface NotificationApi {
  success(args: ArgsProps): void;
  error(args: ArgsProps): void;
  info(args: ArgsProps): void;
  warn(args: ArgsProps): void;
  warning(args: ArgsProps): void;
  open(args: ArgsProps): void;
  close(key: string): void;
  config(options: ConfigProps): void;
  destroy(): void;
}

export default api as NotificationApi;
