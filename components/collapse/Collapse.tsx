import * as React from 'react';
import RcCollapse from 'rc-collapse';
import classNames from 'classnames';
import CollapsePanel from './CollapsePanel';
import Icon from '../icon';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import animation from '../_util/openAnimation';
import Direction from './../_util/direction';

export type ExpandIconPosition = 'left' | 'right';

export interface CollapseProps {
  isRtl?: boolean;
  activeKey?: Array<string | number> | string | number;
  defaultActiveKey?: Array<string | number> | string | number;
  /** 手风琴效果 */
  accordion?: boolean;
  destroyInactivePanel?: boolean;
  onChange?: (key: string | string[]) => void;
  style?: React.CSSProperties;
  className?: string;
  bordered?: boolean;
  prefixCls?: string;
  expandIcon?: (panelProps: PanelProps) => React.ReactNode;
  expandIconPosition?: ExpandIconPosition;
}

interface PanelProps {
  isRtl?: boolean;
  isActive?: boolean;
  header?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  showArrow?: boolean;
  forceRender?: boolean;
  disabled?: boolean;
  extra?: React.ReactNode;
}

export default class Collapse extends React.Component<CollapseProps, any> {
  static Panel = CollapsePanel;

  static defaultProps = {
    bordered: true,
    openAnimation: { ...animation, appear() {} },
    expandIconPosition: 'left',
  };

  renderExpandIcon = (panelProps: PanelProps = {}, prefixCls: string, isRtl: boolean) => {
    const { expandIcon } = this.props;
    const icon = expandIcon ? (
      expandIcon(panelProps)
    ) : (
      //NEw
      // <Icon type="right" rotate={panelProps.isActive ? 90 : undefined} />
      <Icon
        type={isRtl ? 'left' : 'right'}
        rotate={panelProps.isActive ? (isRtl ? -90 : 90) : undefined}
      />
    );
    return React.isValidElement(icon)
      ? React.cloneElement(icon as any, {
          className: `${prefixCls}-arrow`,
        })
      : icon;
  };

  renderCollapse = ({ getPrefixCls }: ConfigConsumerProps) => {
    const {
      prefixCls: customizePrefixCls,
      className = '',
      bordered,
      expandIconPosition,
    } = this.props;
    const prefixCls = getPrefixCls('collapse', customizePrefixCls);
    const collapseClassName = classNames(
      {
        [`${prefixCls}-borderless`]: !bordered,
        [`${prefixCls}-icon-position-${expandIconPosition}`]: true,
      },
      className,
      //NEw
      Direction.classFromProps(this.props),
    );
    return (
      <RcCollapse
        {...this.props}
        // expandIcon={(panelProps: PanelProps) => this.renderExpandIcon(panelProps, prefixCls)}
        expandIcon={(panelProps: PanelProps) =>
          this.renderExpandIcon(panelProps, prefixCls, !!this.props.isRtl)
        }
        prefixCls={prefixCls}
        className={collapseClassName}
      />
    );
  };

  render() {
    return <ConfigConsumer>{this.renderCollapse}</ConfigConsumer>;
  }
}
