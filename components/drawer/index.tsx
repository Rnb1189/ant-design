import * as React from 'react';
import RcDrawer from 'rc-drawer';
import createReactContext from '@ant-design/create-react-context';
import classNames from 'classnames';
import omit from 'omit.js';
import warning from '../_util/warning';
import Icon from '../icon';
import { withConfigConsumer, ConfigConsumerProps } from '../config-provider';
import { tuple } from '../_util/type';
import Direction from '../_util/direction';

const DrawerContext = createReactContext<Drawer | null>(null);

type EventType =
  | React.KeyboardEvent<HTMLDivElement>
  | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;

type getContainerFunc = () => HTMLElement;

const PlacementTypes = tuple('top', 'right', 'bottom', 'left');
type placementType = (typeof PlacementTypes)[number];
export interface DrawerProps {
  isRtl?: boolean;
  closable?: boolean;
  destroyOnClose?: boolean;
  getContainer?: string | HTMLElement | getContainerFunc | false;
  maskClosable?: boolean;
  mask?: boolean;
  maskStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  bodyStyle?: React.CSSProperties;
  title?: React.ReactNode;
  visible?: boolean;
  width?: number | string;
  height?: number | string;
  /* deprecated, use className instead */
  wrapClassName?: string;
  zIndex?: number;
  prefixCls?: string;
  push?: boolean;
  placement?: placementType;
  onClose?: (e: EventType) => void;
  afterVisibleChange?: (visible: boolean) => void;
  className?: string;
  handler?: React.ReactNode;
  keyboard?: boolean;
}

export interface IDrawerState {
  push?: boolean;
}

class Drawer extends React.Component<DrawerProps & ConfigConsumerProps, IDrawerState> {
  static defaultProps = {
    width: 256,
    height: 256,
    closable: true,
    // placement: 'right' as placementType,
    maskClosable: true,
    mask: true,
    level: null,
    keyboard: true,
  };

  readonly state = {
    push: false,
  };

  parentDrawer: Drawer | null;

  destroyClose: boolean;

  public componentDidMount() {
    // fix: delete drawer in child and re-render, no push started.
    // <Drawer>{show && <Drawer />}</Drawer>
    const { visible } = this.props;
    if (visible && this.parentDrawer) {
      this.parentDrawer.push();
    }
  }

  public componentDidUpdate(preProps: DrawerProps) {
    const { visible } = this.props;
    if (preProps.visible !== visible && this.parentDrawer) {
      if (visible) {
        this.parentDrawer.push();
      } else {
        this.parentDrawer.pull();
      }
    }
  }

  public componentWillUnmount() {
    // unmount drawer in child, clear push.
    if (this.parentDrawer) {
      this.parentDrawer.pull();
      this.parentDrawer = null;
    }
  }

  push = () => {
    this.setState({
      push: true,
    });
  };

  pull = () => {
    this.setState({
      push: false,
    });
  };

  onDestroyTransitionEnd = () => {
    const isDestroyOnClose = this.getDestroyOnClose();
    if (!isDestroyOnClose) {
      return;
    }
    if (!this.props.visible) {
      this.destroyClose = true;
      this.forceUpdate();
    }
  };

  //NEw
  resolvePlacement = (props: any) => {
    // if (this.props.placement) return this.props.placement;
    // if (this.props.isRtl) return 'left';
    // else return 'right';

    const { placement, isRtl } = props;
    return placement ? placement : isRtl ? 'left' : 'right';
  };

  getDestroyOnClose = () => this.props.destroyOnClose && !this.props.visible;

  // get drawer push width or height
  getPushTransform = (placement?: placementType) => {
    if (placement === 'left' || placement === 'right') {
      return `translateX(${placement === 'left' ? 180 : -180}px)`;
    }
    if (placement === 'top' || placement === 'bottom') {
      return `translateY(${placement === 'top' ? 180 : -180}px)`;
    }
  };

  getRcDrawerStyle = () => {
    // const { zIndex, placement, style } = this.props;
    //NEw
    const { zIndex, style } = this.props;
    const placement = this.resolvePlacement(this.props);

    const { push } = this.state;
    return {
      zIndex,
      transform: push ? this.getPushTransform(placement) : undefined,
      ...style,
    };
  };

  renderHeader() {
    const { title, prefixCls, closable } = this.props;
    if (!title && !closable) {
      return null;
    }

    const headerClassName = title ? `${prefixCls}-header` : `${prefixCls}-header-no-title`;
    return (
      <div className={headerClassName}>
        {title && <div className={`${prefixCls}-title`}>{title}</div>}
        {closable && this.renderCloseIcon()}
      </div>
    );
  }

  renderCloseIcon() {
    const { closable, prefixCls, onClose } = this.props;
    return (
      closable && (
        // eslint-disable-next-line react/button-has-type
        <button onClick={onClose} aria-label="Close" className={`${prefixCls}-close`}>
          <Icon type="close" />
        </button>
      )
    );
  }

  // render drawer body dom
  renderBody = () => {
    // const { bodyStyle, placement, prefixCls, visible } = this.props;
    //NEw
    const { bodyStyle, prefixCls, visible } = this.props;
    const placement = this.resolvePlacement(this.props);

    if (this.destroyClose && !visible) {
      return null;
    }
    this.destroyClose = false;

    const containerStyle: React.CSSProperties =
      placement === 'left' || placement === 'right'
        ? {
            overflow: 'auto',
            height: '100%',
          }
        : {};

    const isDestroyOnClose = this.getDestroyOnClose();

    if (isDestroyOnClose) {
      // Increase the opacity transition, delete children after closing.
      containerStyle.opacity = 0;
      containerStyle.transition = 'opacity .3s';
    }

    return (
      <div
        className={`${prefixCls}-wrapper-body`}
        style={containerStyle}
        onTransitionEnd={this.onDestroyTransitionEnd}
      >
        {this.renderHeader()}
        <div className={`${prefixCls}-body`} style={bodyStyle}>
          {this.props.children}
        </div>
      </div>
    );
  };

  // render Provider for Multi-level drawer
  renderProvider = (value: Drawer) => {
    const {
      prefixCls,
      zIndex,
      style,
      // placement,
      className,
      wrapClassName,
      width,
      height,
      mask,
      ...rest
    } = this.props;
    warning(
      wrapClassName === undefined,
      'Drawer',
      'wrapClassName is deprecated, please use className instead.',
    );
    const haveMask = mask ? '' : 'no-mask';
    this.parentDrawer = value;
    //NEw
    const placement = this.resolvePlacement(this.props);

    const offsetStyle: any = {};
    if (placement === 'left' || placement === 'right') {
      offsetStyle.width = width;
    } else {
      offsetStyle.height = height;
    }
    return (
      <DrawerContext.Provider value={this}>
        <RcDrawer
          handler={false}
          {...omit(rest, [
            'zIndex',
            'style',
            'closable',
            'destroyOnClose',
            'bodyStyle',
            'title',
            'push',
            'visible',
            'getPopupContainer',
            'rootPrefixCls',
            'getPrefixCls',
            'renderEmpty',
            'csp',
            'autoInsertSpaceInButton',
          ])}
          {...offsetStyle}
          prefixCls={prefixCls}
          open={this.props.visible}
          showMask={mask}
          placement={placement}
          style={this.getRcDrawerStyle()}
          // className={classNames(wrapClassName, className, haveMask)}
          //NEw
          className={classNames(
            wrapClassName,
            className,
            haveMask,
            Direction.classFromProps(this.props),
          )}
        >
          {this.renderBody()}
        </RcDrawer>
      </DrawerContext.Provider>
    );
  };

  render() {
    return <DrawerContext.Consumer>{this.renderProvider}</DrawerContext.Consumer>;
  }
}

export default withConfigConsumer<DrawerProps>({
  prefixCls: 'drawer',
})(Drawer);
