import { forwardRef } from 'react';
import { Text } from '../../common/text/Text';
import { Container } from '../../common/container/Container';
import { CommonProps } from '../../common/types';

/**
 * Headline
 *
 * @param {React.ReactNode} [props.children='제목'] - 헤드라인에 표시될 자식 요소 (필수)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...CommonProps} props - `CommonProps`에 정의된 기타 속성
 */
export const TextArea = forwardRef<HTMLDivElement, CommonProps>(
  ({ children = '제목', className, ...props }, ref) => {
    return (
      <Container>
        <input></input>
      </Container>
    );
  },
);
