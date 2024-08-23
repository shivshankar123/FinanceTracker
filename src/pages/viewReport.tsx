import Chart from "../components/chart";
import { FinanceProvider } from "../context/FinanceContext";
import { FinanceContext } from "../context/FinanceContext";

function ViewReport() {
  return (
    <FinanceProvider>
      <Chart />
    </FinanceProvider>
  );
}
export default ViewReport;
