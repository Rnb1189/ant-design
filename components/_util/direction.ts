export default class Direction {
  static RTL: string = 'a-rtl';
  static LTR: string = 'a-ltr';
  static getClass(props: any) {
    return props && props.isRtl ? 'a-rtl' : 'a-ltr';
  }
}
