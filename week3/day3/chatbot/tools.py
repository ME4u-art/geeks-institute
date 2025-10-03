import datetime, ast, operator

ALLOWED_OPERATORS = {
    ast.Add: operator.add,
    ast.Sub: operator.sub,
    ast.Mult: operator.mul,
    ast.Div: operator.truediv,
    ast.Pow: operator.pow,
    ast.USub: operator.neg,
}

def safe_eval(expr: str):
    def _eval(node):
        if isinstance(node, ast.Constant):
            return node.value
        if isinstance(node, ast.BinOp):
            op = type(node.op)
            if op not in ALLOWED_OPERATORS:
                raise ValueError("Operator not allowed")
            return ALLOWED_OPERATORS[op](_eval(node.left), _eval(node.right))
        if isinstance(node, ast.UnaryOp):
            op = type(node.op)
            if op not in ALLOWED_OPERATORS:
                raise ValueError("Operator not allowed")
            return ALLOWED_OPERATORS[op](_eval(node.operand))
        raise ValueError("Unsupported expression")
    node = ast.parse(expr, mode="eval").body
    return _eval(node)

def tool_time(_args: dict):
    return {"result": datetime.datetime.utcnow().isoformat() + "Z"}

def tool_calc(args: dict):
    expr = args.get("expr")
    if not expr:
        return {"error": "No expression provided"}
    try:
        val = safe_eval(expr)
        return {"result": val}
    except Exception as e:
        return {"error": str(e)}

TOOLS = {
    "time": {"fn": tool_time, "description": "Returns current UTC time."},
    "calc": {"fn": tool_calc, "description": "Evaluate a math expression like {'expr':'2+2'}."},
}
