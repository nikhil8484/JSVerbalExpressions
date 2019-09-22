import Expression from "./types/expression";
import RawExpression from "./types/raw-expression";
import exprToRaw from "./util/expr-to-raw";

function somethingBut(exp: Expression): RawExpression {
  const raw = exprToRaw(exp);

  return new RawExpression(`[^${raw}]+`);
}

export default somethingBut;
