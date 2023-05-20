import { Container} from "@mantine/core";
import { ThemeProvider } from "./ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}
