import { Icon } from "native-base";
import { G, Path } from "react-native-svg";
import { CustomIconProps } from "./CustomIcon.type";

export function IconHome({ size }: CustomIconProps) {
  return (
    <Icon viewBox="0 0 16 16" width={size} height={size}>
      <G fill="none">
        <Path
          d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
          fill="#000000"
        />
      </G>
    </Icon>
  );
}
