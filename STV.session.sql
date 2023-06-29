WITH RECURSIVE tree_view AS (
	SELECT id,
		dept_code,
		dept_name,
		dept_parentcode,
		0 AS level,
		CAST(dept_code AS varchar(50)) AS order_sequence
	FROM hr_department
	WHERE dept_parentcode = 0
	UNION ALL
	SELECT child.id,
		child.dept_code,
		child.dept_name,
		child.dept_parentcode,
		level + 1 AS level,
		CAST(
			order_sequence || '_' || CAST(child.dept_code AS VARCHAR (50)) AS VARCHAR(50)
		) AS order_sequence
	FROM hr_department child,
		tree_view tw
	WHERE tw.dept_code = child.dept_parentcode
)
SELECT *
FROM tree_view
WHERE 1 = 1
	AND order_sequence LIKE ('33_113_34%');

CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(200) NOT NULL,
    description TEXT NOT NULL
);