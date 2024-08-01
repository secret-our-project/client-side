import { forwardRef } from 'react';
import { CommonProps } from '../../../common/types';
import { InfoItem, InfoItemProps } from '../info-item/InfoItem';
import { Container } from '../../../common/container/Container';

interface InfoBoxProps extends CommonProps {
  infos: Omit<InfoItemProps, 'size'>[];
  size?: 's' | 'm';
}

/**
 * InfoBox 컴포넌트
 *
 * @param {Omit<InfoItemProps, 'size'>[]} props.infos - InfoItem 컴포넌트에 전달될 정보 객체 배열 (필수, 객체 형식: {title: '제목', content: '내용', icon: '아이콘 이름'})
 * @param {'s' | 'm'} [props.size='m'] - 크기 (선택, 기본값: 'm')
 * @param {string} [props.backgroundColor] - 배경색 (선택)
 * @param {string} [props.className] - 추가 CSS 클래스 (선택)
 * @param {...CommonProps} props - Container 컴포넌트에 전달될 기타 속성
 * @param {React.Ref<HTMLElement>} ref - 전달받은 ref
 */
export const InfoBox = forwardRef<HTMLElement, InfoBoxProps>(
  ({ infos, backgroundColor, size = 'm', className, ...props }, ref) => {
    const infoItems = infos?.reduce((acc, item, index) => {
      if (index > 0) {
        acc.push(
          // 여기에 divider 컴포넌트 만들어서 수정합니다.
          <div key={`divider-${index}`} style={{ width: '1px', backgroundColor: '#E0E0E0' }} />,
        );
      }
      acc.push(
        <InfoItem
          key={`info-${index}`}
          title={item.title}
          content={item.content}
          icon={item.icon}
          size={size}
        />,
      );
      return acc;
    }, [] as React.ReactNode[]);

    return (
      <Container
        ref={ref}
        className={className}
        display="flex"
        width="100%"
        height="100%"
        backgroundColor={backgroundColor}
        borderRadius="ml"
        {...props}
      >
        {infoItems}
      </Container>
    );
  },
);
