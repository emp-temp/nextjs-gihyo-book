/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import type { Responsive } from 'types/styles';
import { toPropsValue, Color, Space } from 'utils/styles';

export type BoxProps = {
  color?: Responsive<Color>;
  backgroundColor?: Responsive<Color>;
  width?: Responsive<string>;
  height?: Responsive<string>;
  minWidth?: Responsive<string>;
  minHeight?: Responsive<string>;
  display?: Responsive<string>;
  border?: Responsive<string>;
  overflow?: Responsive<string>;
  margin?: Responsive<Space>;
  marginTop?: Responsive<Space>;
  marginRight?: Responsive<Space>;
  marginBottom?: Responsive<Space>;
  marginLeft?: Responsive<Space>;
  padding?: Responsive<Space>;
  paddingTop?: Responsive<Space>;
  paddingRight?: Responsive<Space>;
  paddingBottom?: Responsive<Space>;
  paddingLeft?: Responsive<Space>;
};

/**
 * Boxコンポーネント
 * レイアウトの調整に利用する
 * ${(props) => toPropValue('color', props.color, props.theme)}
 */
const Box = styled.div<BoxProps>`
  ${(props) => toPropsValue('color', props.color, props.theme)}
  ${(props) =>
    toPropsValue('background-color', props.backgroundColor, props.theme)}
  ${(props) => toPropsValue('width', props.width, props.theme)}
  ${(props) => toPropsValue('height', props.height, props.theme)}
  ${(props) => toPropsValue('min-width', props.minWidth, props.theme)}
  ${(props) => toPropsValue('min-height', props.minHeight, props.theme)}
  ${(props) => toPropsValue('display', props.display, props.theme)}
  ${(props) => toPropsValue('border', props.border, props.theme)}
  ${(props) => toPropsValue('overflow', props.overflow, props.theme)}
  ${(props) => toPropsValue('margin', props.margin, props.theme)}
  ${(props) => toPropsValue('margin-top', props.marginTop, props.theme)}
  ${(props) => toPropsValue('margin-left', props.marginLeft, props.theme)}
  ${(props) => toPropsValue('margin-bottom', props.marginBottom, props.theme)}
  ${(props) => toPropsValue('margin-right', props.marginRight, props.theme)}
  ${(props) => toPropsValue('padding', props.padding, props.theme)}
  ${(props) => toPropsValue('padding-top', props.paddingTop, props.theme)}
  ${(props) => toPropsValue('padding-left', props.paddingLeft, props.theme)}
  ${(props) => toPropsValue('padding-bottom', props.paddingBottom, props.theme)}
  ${(props) => toPropsValue('padding-right', props.paddingRight, props.theme)}
`;

export default Box;
