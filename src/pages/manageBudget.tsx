import ExpenseTracker from "../components/expenseTracker";
import { FinanceProvider } from "../context/FinanceContext";

function Expense() {
  return (
    <div className="bg-gradient-to-r from-yellow-100 via-orange-100 to-green-100 min-h-screen p-6 flex">
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl">
          <FinanceProvider>
            <ExpenseTracker />
          </FinanceProvider>
        </div>
      </main>
    </div>
  );
}

export default Expense;
