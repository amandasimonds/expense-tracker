import { useState } from 'react';
import './Expenses.scss';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';

function Expenses(props) {
	const [selectedYear, setSelectedYear] = useState('2021');

	const yearSelectedHandler = (year) => {
		setSelectedYear(year);
	};

	const filteredExpenses = props.items.filter(
		(item) => item.date.getFullYear().toString() === selectedYear
	);

	return (
		<Card className="expenses">
			<ExpensesFilter
				selected={selectedYear}
				onYearSelected={yearSelectedHandler}
			/>
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}

export default Expenses;
