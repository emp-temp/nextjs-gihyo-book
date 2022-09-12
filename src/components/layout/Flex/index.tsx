/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import Box, { BoxProps } from 'components/layout/Box';
import type {
  Responsive,
  CSSPropertyAlignItems,
  CSSPropertyAlignContent,
  CSSPropertyJustifyContent,
  CSSPropertyJustifyItems,
  CSSPropertyFlexDirection,
  CSSPropertyJustifySelf,
  CSSPropertyAlignSelf,
  CSSPropertyFlexWrap,
} from 'types/styles';
import { toPropsValue } from 'utils/styles';

type FlexProps = BoxProps & {
  alignItems?: Responsive<CSSPropertyAlignItems>;
  alignContent?: Responsive<CSSPropertyAlignContent>;
  justifyContent?: Responsive<CSSPropertyJustifyContent>;
  justifyItems?: Responsive<CSSPropertyJustifyItems>;
  flexWrap?: Responsive<CSSPropertyFlexWrap>;
  flexBasis?: Responsive<string>;
  flexDirection?: Responsive<CSSPropertyFlexDirection>;
  flexGrow?: Responsive<string>;
  flexShrink?: Responsive<string>;
  justifySelf?: Responsive<CSSPropertyJustifySelf>;
  alignSelf?: Responsive<CSSPropertyAlignSelf>;
  order?: Responsive<string>;
};

/**
 * Flexコンポーネント
 * flexboxの実現に利用する
 */
const Flex = styled(Box)<FlexProps>`
  ${(props) => toPropsValue('align-items', props.alignItems, props.theme)}
  ${(props) => toPropsValue('align-content', props.alignContent, props.theme)}
  ${(props) =>
    toPropsValue('justify-content', props.justifyContent, props.theme)}
  ${(props) => toPropsValue('justify-items', props.justifyItems, props.theme)}
  ${(props) => toPropsValue('flex-wrap', props.flexWrap, props.theme)}
  ${(props) => toPropsValue('flex-basis', props.flexBasis, props.theme)}
  ${(props) => toPropsValue('flex-direction', props.flexDirection, props.theme)}
  ${(props) => toPropsValue('flex-grow', props.flexGrow, props.theme)}
  ${(props) => toPropsValue('flex-shrink', props.flexShrink, props.theme)}
  ${(props) => toPropsValue('justify-self', props.justifySelf, props.theme)}
  ${(props) => toPropsValue('align-self', props.alignSelf, props.theme)}
  ${(props) => toPropsValue('order', props.order, props.theme)}
`;
Flex.defaultProps = {
  display: 'flex',
};
export default Flex;
