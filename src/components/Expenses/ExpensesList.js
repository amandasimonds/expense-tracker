import React from 'react';
import './ExpensesList.scss';
import ExpenseItem from './ExpenseItem';

function ExpensesList(props) {
	let expensesContent = <p>No expenses found.</p>;

	if (props.items.length > 0) {
		expensesContent = props.items.map((item) => (
			<ExpenseItem
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		));
	}
	return (
		<ul className="expenses-list">
			{props.items.map((item) => (
				<ExpenseItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			))}
		</ul>
	);
}

export default ExpensesList;
