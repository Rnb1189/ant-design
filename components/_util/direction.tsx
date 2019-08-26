import * as React from 'react';

export default class Direction {
  static RTL: string = 'a-rtl';
  static LTR: string = 'a-ltr';

  static classFromProps(props: any) {
    return props && props.isRtl ? Direction.RTL : Direction.LTR;
  }

  static classFromIsRtl(isRtl?: boolean) {
    return isRtl === true ? Direction.RTL : Direction.LTR;
  }

  static withRtlClassName<T extends object>(Component: React.ComponentType<T>) {
    return class extends React.Component<T> {
      render() {
        return <Component className={Direction.RTL} {...this.props} />;
      }
    };
  }

  static withLtrClassName<T extends object>(Component: React.ComponentType<T>) {
    return class extends React.Component<T> {
      render() {
        return <Component className={Direction.LTR} {...this.props} />;
      }
    };
  }
}
