import * as React from 'react';
import classNames from 'classnames';
import { ButtonSize } from './button';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import omit from 'omit.js';

export interface ButtonGroupProps {
  //NEw:
  isRtl?: boolean;
  size?: ButtonSize;
  style?: React.CSSProperties;
  className?: string;
  prefixCls?: string;
}

const ButtonGroup: React.SFC<ButtonGroupProps> = props => (
  <ConfigConsumer>
    {({ getPrefixCls }: ConfigConsumerProps) => {
      const { prefixCls: customizePrefixCls, size, className, ...others } = props;
      const prefixCls = getPrefixCls('btn-group', customizePrefixCls);

      // large => lg
      // small => sm
      let sizeCls = '';
      switch (size) {
        case 'large':
          sizeCls = 'lg';
          break;
        case 'small':
          sizeCls = 'sm';
          break;
        default:
          break;
      }

      const classes = classNames(
        prefixCls,
        {
          [`${prefixCls}-${sizeCls}`]: sizeCls,
        },
        className,
        //NEw
        { 'a-rtl': !!props.isRtl, 'a-ltr': !props.isRtl },
      );

      //NEw:
      // set the rtl of children acording to button group
      others.children = React.Children.map(others.children, (child: any) => {
        let result = child;
        if (child && child.props && child.props.isRtl === undefined) {
          result = React.cloneElement(child, { isRtl: props.isRtl });
        }
        return result;
      });

      //OMid
      // return <div {...others} className={classes} />;
      return <div {...omit(others, ['isRtl'])} className={classes} />;
    }}
  </ConfigConsumer>
);

export default ButtonGroup;
