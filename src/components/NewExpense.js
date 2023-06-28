import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.floor(Math.random() * 1000).toString(),
		};
		console.log(expenseData);
        props.onAddExpense(expenseData)
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
