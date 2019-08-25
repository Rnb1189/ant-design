import * as React from 'react';
import * as PropTypes from 'prop-types';
import RcSteps from 'rc-steps';
import Icon from '../icon';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import classNames from 'classnames';
import Direction from '../_util/direction';

export interface StepsProps {
  isRtl?: boolean;
  type?: 'default' | 'navigation';
  className?: string;
  current?: number;
  direction?: 'horizontal' | 'vertical';
  iconPrefix?: string;
  initial?: number;
  labelPlacement?: 'horizontal' | 'vertical';
  prefixCls?: string;
  progressDot?: boolean | Function;
  size?: 'default' | 'small';
  status?: 'wait' | 'process' | 'finish' | 'error';
  style?: React.CSSProperties;
  onChange?: (current: number) => void;
}

export interface StepProps {
  isRtl?: boolean;
  className?: string;
  description?: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  status?: 'wait' | 'process' | 'finish' | 'error';
  disabled?: boolean;
  title?: React.ReactNode;
  style?: React.CSSProperties;
}

export default class Steps extends React.Component<StepsProps, any> {
  static Step = RcSteps.Step as React.ClassicComponentClass<StepProps>;

  static defaultProps = {
    current: 0,
  };

  static propTypes = {
    prefixCls: PropTypes.string,
    iconPrefix: PropTypes.string,
    current: PropTypes.number,
  };

  renderSteps = ({ getPrefixCls }: ConfigConsumerProps) => {
    const prefixCls = getPrefixCls('steps', this.props.prefixCls);
    const iconPrefix = getPrefixCls('', this.props.iconPrefix);
    const icons = {
      finish: <Icon type="check" className={`${prefixCls}-finish-icon`} />,
      error: <Icon type="close" className={`${prefixCls}-error-icon`} />,
    };
    //NEw
    const dirClass = classNames(this.props.className, Direction.classFromProps(this.props));
    return (
      <RcSteps
        icons={icons}
        {...this.props}
        className={dirClass}
        prefixCls={prefixCls}
        iconPrefix={iconPrefix}
      />
    );
  };

  render() {
    return <ConfigConsumer>{this.renderSteps}</ConfigConsumer>;
  }
}
