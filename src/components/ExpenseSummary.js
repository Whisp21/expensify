import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const ExpenseSummary = ({ expensesCount, expensesTotal }) => {
  const expensesWord = expensesCount === 1 ? "expense" : "expenses";
  const expensesTotalFormat = numeral(expensesTotal / 100).format("0,0.00")

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title"><span>{expensesCount}</span> {expensesWord} totalling <span>R {expensesTotalFormat}</span></h1>
          <div className="page-header__actions">
            <Link to="/create" className="button add--button">Add Expense</Link>
          </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpenseSummary);
