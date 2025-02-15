import * as React from 'react';
import * as PropTypes from 'prop-types';
import { polyfill } from 'react-lifecycles-compat';
import classNames from 'classnames';
import { AntAnchor } from './Anchor';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import Direction from '../_util/direction';

export interface AnchorLinkProps {
  prefixCls?: string;
  href: string;
  title: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

class AnchorLink extends React.Component<AnchorLinkProps, any> {
  static defaultProps = {
    href: '#',
  };

  static contextTypes = {
    antAnchor: PropTypes.object,
  };

  context: {
    antAnchor: AntAnchor;
  };

  componentDidMount() {
    this.context.antAnchor.registerLink(this.props.href);
  }

  componentDidUpdate({ href: prevHref }: AnchorLinkProps) {
    const { href } = this.props;
    if (prevHref !== href) {
      this.context.antAnchor.unregisterLink(prevHref);
      this.context.antAnchor.registerLink(href);
    }
  }

  componentWillUnmount() {
    this.context.antAnchor.unregisterLink(this.props.href);
  }

  handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { scrollTo, onClick } = this.context.antAnchor;
    const { href, title } = this.props;
    if (onClick) {
      onClick(e, { title, href });
    }
    scrollTo(href);
  };

  renderAnchorLink = ({ getPrefixCls }: ConfigConsumerProps) => {
    const { prefixCls: customizePrefixCls, href, title, children, className } = this.props;
    const prefixCls = getPrefixCls('anchor', customizePrefixCls);
    const active = this.context.antAnchor.activeLink === href;

    //NEw
    const dirClass = Direction.classFromProps(this.props);

    const wrapperClassName = classNames(
      className,
      `${prefixCls}-link`,
      {
        [`${prefixCls}-link-active`]: active,
      },
      dirClass,
    );
    const titleClassName = classNames(`${prefixCls}-link-title`, {
      [`${prefixCls}-link-title-active`]: active,
    });
    return (
      <div className={wrapperClassName}>
        <a
          className={titleClassName}
          href={href}
          title={typeof title === 'string' ? title : ''}
          onClick={this.handleClick}
        >
          {title}
        </a>
        {children}
      </div>
    );
  };

  render() {
    return <ConfigConsumer>{this.renderAnchorLink}</ConfigConsumer>;
  }
}

polyfill(AnchorLink);

export default AnchorLink;
