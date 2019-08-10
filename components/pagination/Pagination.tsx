import * as React from 'react';
import RcPagination from 'rc-pagination';
import enUS from 'rc-pagination/lib/locale/en_US';
import classNames from 'classnames';
import MiniSelect from './MiniSelect';
import Icon from '../icon';
import Select from '../select';
import LocaleReceiver from '../locale-provider/LocaleReceiver';
import { ConfigConsumer, ConfigConsumerProps } from '../config-provider';
import direction from '../_util/direction';

export interface PaginationProps {
  isRtl?: boolean;
  total?: number;
  defaultCurrent?: number;
  disabled?: boolean;
  current?: number;
  defaultPageSize?: number;
  pageSize?: number;
  onChange?: (page: number, pageSize?: number) => void;
  hideOnSinglePage?: boolean;
  showSizeChanger?: boolean;
  pageSizeOptions?: string[];
  onShowSizeChange?: (current: number, size: number) => void;
  showQuickJumper?: boolean | { goButton?: React.ReactNode };
  showTotal?: (total: number, range: [number, number]) => React.ReactNode;
  size?: string;
  simple?: boolean;
  style?: React.CSSProperties;
  locale?: Object;
  className?: string;
  prefixCls?: string;
  selectPrefixCls?: string;
  itemRender?: (
    page: number,
    type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next',
    originalElement: React.ReactElement<HTMLElement>,
  ) => React.ReactNode;
  role?: string;
  showLessItems?: boolean;
}

export interface PaginationConfig extends PaginationProps {
  position?: 'top' | 'bottom' | 'both';
}

export type PaginationLocale = any;

export default class Pagination extends React.Component<PaginationProps, {}> {
  getIconsProps = (prefixCls: string) => {
    //NEw
    const iconLeft = this.props.isRtl ? 'right' : 'left';
    const iconRight = this.props.isRtl ? 'left' : 'right';

    const prevIcon = (
      <a className={`${prefixCls}-item-link`}>
        <Icon type={iconLeft} />
      </a>
    );
    const nextIcon = (
      <a className={`${prefixCls}-item-link`}>
        <Icon type={iconRight} />
      </a>
    );
    const jumpPrevIcon = (
      <a className={`${prefixCls}-item-link`}>
        {/* You can use transition effects in the container :) */}
        <div className={`${prefixCls}-item-container`}>
          <Icon className={`${prefixCls}-item-link-icon`} type="double-left" />
          <span className={`${prefixCls}-item-ellipsis`}>•••</span>
        </div>
      </a>
    );
    const jumpNextIcon = (
      <a className={`${prefixCls}-item-link`}>
        {/* You can use transition effects in the container :) */}
        <div className={`${prefixCls}-item-container`}>
          <Icon className={`${prefixCls}-item-link-icon`} type="double-right" />
          <span className={`${prefixCls}-item-ellipsis`}>•••</span>
        </div>
      </a>
    );
    return {
      prevIcon,
      nextIcon,
      jumpPrevIcon,
      jumpNextIcon,
    };
  };

  renderPagination = (contextLocale: PaginationLocale) => {
    const {
      prefixCls: customizePrefixCls,
      selectPrefixCls: customizeSelectPrefixCls,
      className,
      size,
      locale: customLocale,
      ...restProps
    } = this.props;
    const locale = { ...contextLocale, ...customLocale };
    const isSmall = size === 'small';
    return (
      <ConfigConsumer>
        {({ getPrefixCls }: ConfigConsumerProps) => {
          const prefixCls = getPrefixCls('pagination', customizePrefixCls);
          const selectPrefixCls = getPrefixCls('select', customizeSelectPrefixCls);

          return (
            <RcPagination
              //NEw
              isRtl={this.props.isRtl}
              {...restProps}
              prefixCls={prefixCls}
              selectPrefixCls={selectPrefixCls}
              {...this.getIconsProps(prefixCls)}
              // className={classNames(className, { mini: isSmall })}
              //NEw:
              className={classNames(className, { mini: isSmall }, direction.getClass(this.props))}
              selectComponentClass={isSmall ? MiniSelect : Select}
              locale={locale}
            />
          );
        }}
      </ConfigConsumer>
    );
  };

  render() {
    return (
      <LocaleReceiver componentName="Pagination" defaultLocale={enUS}>
        {this.renderPagination}
      </LocaleReceiver>
    );
  }
}
