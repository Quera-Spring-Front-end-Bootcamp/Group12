import { ThemeProvider } from "./ThemeProvider";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";


export default function App() {
  return (
    <ThemeProvider>
      <AuthLayout title="hi">
        <Login/>
      </AuthLayout>
      
    </ThemeProvider>
  );
}
