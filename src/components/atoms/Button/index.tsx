/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Responsive } from 'types/styles';
import {
  toPropsValue,
  Color,
  FontSize,
  LetterSpacing,
  LineHeight,
  Space,
} from 'utils/styles';

// ボタンのバリアント
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  fontSize?: Responsive<FontSize>;
  fontWeight?: Responsive<string>;
  letterSpacing?: Responsive<LetterSpacing>;
  lineHeight?: Responsive<LineHeight>;
  textAlign?: Responsive<string>;
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
  pseudoClass?: {
    hover?: {
      backgroundColor?: Responsive<Color>;
    };
    disabled?: {
      backgroundColor?: Responsive<Color>;
    };
  };
};

const variants = {
  // プライマリ
  primary: {
    color: 'white',
    backgroundColor: 'primary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'primaryDark',
      },
      disabled: {
        backgroundColor: 'primary',
      },
    },
  },
  // セカンダリ
  secondary: {
    color: 'white',
    backgroundColor: 'secondary',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'secondaryDark',
      },
      disabled: {
        backgroundColor: 'secondary',
      },
    },
  },
  // デンジャー
  danger: {
    color: 'white',
    backgroundColor: 'danger',
    border: 'none',
    pseudoClass: {
      hover: {
        backgroundColor: 'dangerDark',
      },
      disabled: {
        backgroundColor: 'danger',
      },
    },
  },
};

/**
 * ボタン
 * バリアント、色、タイポグラフィ、ボーダー、レイアウト、スペース
 * 関連のPropsの追加
 */
const Button = styled.button<ButtonProps>`
  ${({ variant, color, backgroundColor, pseudoClass, theme }) => {
    // バリアントのスタイルの適用
    if (variant && variants[variant]) {
      const styles = [];
      !color &&
        styles.push(toPropsValue('color', variants[variant].color, theme));
      !backgroundColor &&
        styles.push(
          toPropsValue(
            'background-color',
            variants[variant].backgroundColor,
            theme
          )
        );
      !pseudoClass &&
        styles.push(
          `&:hover {
            ${toPropsValue(
              'background-color',
              variants[variant].pseudoClass.hover.backgroundColor,
              theme
            )}
          }`.replaceAll('\n', '')
        );
      !pseudoClass &&
        styles.push(
          `&:disabled {
            ${toPropsValue(
              'background-color',
              variants[variant].pseudoClass.disabled.backgroundColor,
              theme
            )}
          }`.replaceAll('\n', '')
        );
      return styles.join('\n');
    }
  }}
  ${(props) => toPropsValue('font-size', props.fontSize, props.theme)}
  ${(props) => toPropsValue('letter-spacing', props.letterSpacing, props.theme)}
  ${(props) => toPropsValue('line-height', props.lineHeight, props.theme)}
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
  &:hover {
    ${(props) =>
      toPropsValue(
        'background-color',
        props?.pseudoClass?.hover?.backgroundColor
      )}
  }
  &:disabled {
    ${(props) =>
      toPropsValue(
        'background-color',
        props?.pseudoClass?.disabled?.backgroundColor
      )}
  }
  cursor: pointer;
  outline: 0;
  text-decoration: 'none;
  opacity: ${({ disabled }) => (disabled ? '0.5' : '1')};
  border-radius: 4px;
  border: none;
`;

Button.defaultProps = {
  variant: 'primary',
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 1,
  paddingBottom: 1,
  color: 'white',
  display: 'inline-block',
  textAlign: 'center',
  lineHeight: 'inherit',
  fontSize: 'inherit',
};

export default Button;
