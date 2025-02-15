import * as React from 'react';
import { AbstractCheckboxGroupProps } from '../checkbox/Group';
import { AbstractCheckboxProps } from '../checkbox/Checkbox';

export type RadioGroupButtonStyle = 'outline' | 'solid';

export interface RadioGroupProps extends AbstractCheckboxGroupProps {
  isRtl?: boolean;
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
  size?: 'large' | 'default' | 'small';
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  name?: string;
  children?: React.ReactNode;
  id?: string;
  buttonStyle?: RadioGroupButtonStyle;
}

export interface RadioGroupState {
  value: any;
}

export interface RadioGroupContext {
  radioGroup: {
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    value: any;
    disabled: boolean;
    name: string;
  };
}

export type RadioProps = AbstractCheckboxProps<RadioChangeEvent>;

export interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}

export interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}
