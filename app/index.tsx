import { Navigator } from "@/src/Navigator";
import { NativeBaseProvider } from "native-base";

export default function Index() {
  return (
    <NativeBaseProvider>
      <Navigator />
    </NativeBaseProvider>
  );
}
